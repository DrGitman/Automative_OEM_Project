import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { HiSparkles, HiX, HiMicrophone, HiPaperAirplane, HiRefresh } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import ReactMarkdown from 'react-markdown';

interface Message {
  role: "user" | "ai";
  content: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function FloatingAIAgent({ isOpen, onClose }: Props) {
  const { t, language } = useLanguage();
  const [userId, setUserId] = useState<number | null>(null);
  const [pendingAction, setPendingAction] = useState<any>(null);
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUserId(user.id);
      } catch (e) {
        console.error("Auth error", e);
      }
    }
  }, []);

  const INITIAL_MESSAGE: Message = useMemo(() => ({
    role: "ai",
    content: t('ai_initial_msg'),
  }), [t]);

  const AI_RESPONSES = useMemo(() => [
    t('ai_resp_1'),
    t('ai_resp_2'),
    t('ai_resp_3'),
    t('ai_resp_4'),
    t('ai_resp_5'),
  ], [t]);
  const [isListening, setIsListening] = useState(false);
  const [listeningText, setListeningText] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ isDragging: boolean; startX: number; startY: number; initX: number; initY: number }>({
    isDragging: false, startX: 0, startY: 0, initX: 0, initY: 0,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Set default position anchored near top-right (below header) on first open
  useEffect(() => {
    if (isOpen && !initialized) {
      setPosition({ x: window.innerWidth - 390, y: 84 });
      setInitialized(true);
    }
  }, [isOpen, initialized]);

  // Handle initial message localization
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].role === "ai" && prev[0].content !== INITIAL_MESSAGE.content) {
        return [INITIAL_MESSAGE];
      }
      return prev;
    });
  }, [INITIAL_MESSAGE]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    dragRef.current = {
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      initX: position.x,
      initY: position.y,
    };
    e.preventDefault();
  }, [position]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragRef.current.isDragging) return;
      setPosition({
        x: dragRef.current.initX + (e.clientX - dragRef.current.startX),
        y: dragRef.current.initY + (e.clientY - dragRef.current.startY),
      });
    };
    const handleMouseUp = () => { dragRef.current.isDragging = false; };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const sendMessage = useCallback(async (textOverride?: string, wasVoice: boolean = false) => {
    const text = (textOverride ?? input).trim();
    if (!text) return;
    
    setMessages(prev => [...prev, { role: "user", content: text }]);
    setInput("");
    setListeningText("");
    setIsTyping(true);

    try {
      const response = await fetch(`http://localhost:8000/ai/chat?user_id=${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      
      const data = await response.json();
      const reply = data.response || "I'm having trouble connecting to my service.";
      const action = data.action;
      
      setMessages(prev => [...prev, { role: "ai", content: reply }]);
      if (action) {
        setPendingAction(action);
      }
      
      // Voice Output (TTS) - ONLY if the user spoke to the AI
      if (wasVoice) {
        const utterance = new SpeechSynthesisUtterance(reply);
        const langMap: Record<string, string> = {
          'English': 'en-US',
          'German': 'de-DE',
          'Afrikaans': 'af-ZA',
          'Oshiwambo': 'en-US'
        };
        utterance.lang = langMap[language as string] || 'en-US';
        window.speechSynthesis.speak(utterance);
      }
      
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: "ai", content: "Sorry, I can't reach the backend right now." }]);
    } finally {
      setIsTyping(false);
    }
  }, [input, userId, language]);

  const confirmAction = async () => {
    if (!pendingAction || !userId) return;
    setIsExecuting(true);
    try {
      const resp = await fetch(`http://localhost:8000/ai/execute-action?user_id=${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pendingAction),
      });
      const data = await resp.json();
      if (data.status === "success") {
        setMessages(prev => [...prev, { role: "ai", content: `Done! ${data.message}` }]);
        setPendingAction(null);
      }
    } catch (e) {
      console.error("Action Error", e);
    } finally {
      setIsExecuting(false);
    }
  };

  const clearChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setPendingAction(null);
    setInput("");
    setListeningText("");
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(undefined, false); }
  };

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (_) {}
      recognitionRef.current = null;
    }
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
    setIsListening(false);
  }, []);

  const resetSilenceTimer = useCallback((text: string) => {
    if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    silenceTimerRef.current = setTimeout(() => {
      stopListening();
      if (text.trim()) sendMessage(text.trim(), true);
    }, 4000);
  }, [stopListening, sendMessage]);

  const toggleListen = () => {
    if (isListening) { stopListening(); return; }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      const langMap: Record<string, string> = {
        'English': 'en-US',
        'German': 'de-DE',
        'Afrikaans': 'af-ZA',
        'Oshiwambo': 'ng-NA'
      };
      recognition.lang = langMap[language as string] || 'en-US';
      recognitionRef.current = recognition;
      let accumulated = "";

      recognition.onresult = (event: any) => {
        let interim = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) accumulated += event.results[i][0].transcript + " ";
          else interim += event.results[i][0].transcript;
        }
        const full = accumulated + interim;
        setListeningText(full);
        resetSilenceTimer(full);
      };
      recognition.onerror = () => stopListening();
      recognition.onend = () => { if (recognitionRef.current) resetSilenceTimer(accumulated); };
      recognition.start();
      setIsListening(true);
      setListeningText("");
      resetSilenceTimer("");
    } else {
      // Fallback simulation
      setIsListening(true);
      setListeningText(t('listening_label'));
      silenceTimerRef.current = setTimeout(() => {
        const sim = t('ai_resp_1');
        stopListening();
        sendMessage(sim, true);
      }, 4000);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={popupRef}
      style={{ left: position.x, top: position.y, position: "fixed" }}
      className="z-50 w-[360px] select-none transition-all duration-300"
    >
      <div
        className="bg-card/95 backdrop-blur-xl rounded-[28px] shadow-2xl overflow-hidden flex flex-col border border-border"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}
      >
        {/* Drag Handle / Header */}
        <div
          onMouseDown={handleMouseDown}
          className="flex items-center justify-between px-5 pt-5 pb-3 cursor-grab active:cursor-grabbing"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <HiSparkles className="text-white text-base" />
            </div>
            <div>
              <p className="text-foreground font-semibold text-sm leading-none">{t('gearbot')}</p>
              <p className="text-muted-foreground text-xs font-normal mt-0.5">{t('fleet_assistant')}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={clearChat}
              className="size-7 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-primary transition-all group/refresh"
              title="Clear Chat"
            >
              <HiRefresh className="text-sm group-hover/refresh:rotate-180 transition-transform duration-500" />
            </button>
            <button
              onClick={onClose}
              className="size-7 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-all"
            >
              <HiX className="text-sm" />
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="mx-4 mb-3 bg-muted rounded-2xl p-4 max-h-[240px] overflow-y-auto space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm font-normal leading-relaxed ${
                msg.role === "user"
                  ? "bg-primary text-white rounded-br-sm"
                  : "bg-background text-foreground rounded-bl-sm shadow-sm border border-border"
              }`}>
                {msg.role === "user" ? (
                  msg.content
                ) : (
                  <ReactMarkdown
                    components={{
                      p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-bold text-foreground" {...props} />,
                      em: ({node, ...props}) => <em className="italic" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2 last:mb-0 space-y-1" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal pl-4 mb-2 last:mb-0 space-y-1" {...props} />,
                      li: ({node, ...props}) => <li className="" {...props} />,
                      h1: ({node, ...props}) => <h1 className="text-lg font-bold mb-2 mt-2" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-base font-bold mb-2 mt-2" {...props} />,
                      h3: ({node, ...props}) => <h3 className="text-sm font-bold mb-2 mt-2" {...props} />,
                      a: ({node, ...props}) => <a className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer" {...props} />,
                      code({node, inline, className, children, ...props}: any) {
                        return inline ? (
                          <code className="bg-muted/50 px-1 py-0.5 rounded text-primary text-[13px] font-mono border border-border" {...props}>
                            {children}
                          </code>
                        ) : (
                          <pre className="bg-muted/30 p-3 rounded-xl text-[13px] font-mono overflow-x-auto border border-border my-2">
                            <code {...props}>{children}</code>
                          </pre>
                        )
                      }
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-background rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-border flex gap-1 items-center">
                <div className="size-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="size-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="size-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          
          {pendingAction && (
            <div className="flex justify-center p-4">
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 w-full text-center space-y-4 shadow-xl">
                <p className="text-[10px] font-black text-primary uppercase tracking-widest">Action Required</p>
                <p className="text-sm font-bold text-foreground">
                  Confirm {pendingAction.details?.label || pendingAction.type.replace(/_/g, ' ')}?
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={confirmAction}
                    disabled={isExecuting}
                    className="flex-1 bg-primary text-primary-foreground py-2.5 rounded-xl text-xs font-black shadow-lg shadow-primary/20 disabled:opacity-50"
                  >
                    {isExecuting ? "Executing..." : "Confirm"}
                  </button>
                  <button 
                    onClick={() => setPendingAction(null)}
                    className="flex-1 bg-muted text-muted-foreground py-2.5 rounded-xl text-xs font-black"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* AI Orb */}
        <div className="flex justify-center py-2">
          <div className="relative">
            <div
              className={`size-16 rounded-full flex items-center justify-center shadow-xl shadow-primary/30 transition-all duration-300 ${isListening ? "scale-110 shadow-2xl shadow-primary/40" : ""}`}
              style={{
                background: isListening
                  ? "radial-gradient(circle at 30% 30%, #ff4444, var(--primary))"
                  : "radial-gradient(circle at 30% 30%, #e83333, var(--primary))",
              }}
            >
              {isListening && (
                <>
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                  <div className="absolute -inset-2 rounded-full bg-primary/15 animate-ping" style={{ animationDelay: "150ms" }} />
                </>
              )}
              <HiSparkles className="text-white text-2xl relative z-10" />
            </div>
          </div>
        </div>

        {/* Live voice transcript preview */}
        {isListening && listeningText && (
          <div className="mx-4 mb-2 px-3 py-2 bg-primary/10 rounded-xl">
            <p className="text-sm text-primary font-normal italic leading-snug">{listeningText}</p>
            <p className="text-[10px] text-primary/60 mt-0.5">{t('auto_send_note')}</p>
          </div>
        )}

        {/* Input Row */}
        <div className="px-4 pb-4 pt-1">
          <div className="flex items-center gap-2 bg-muted border border-border rounded-2xl px-4 h-11">
            <input
              type="text"
              value={isListening ? listeningText : input}
              onChange={(e) => !isListening && setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isListening ? t('listening_label') : t('ask_gearbot')}
              readOnly={isListening}
              className={`flex-1 bg-transparent outline-none text-sm font-normal placeholder-muted-foreground ${
                isListening ? "text-primary italic" : "text-foreground"
              }`}
            />
            {/* Mic button */}
            <button
              onClick={toggleListen}
              className={`text-lg transition-colors flex-shrink-0 ${isListening ? "text-primary animate-pulse" : "text-muted-foreground hover:text-primary"}`}
              title={isListening ? t('dismiss') : t('listening_label')}
            >
              <HiMicrophone />
            </button>
            {/* Send button — hidden while listening */}
            {!isListening && (
              <button
                onClick={() => sendMessage(undefined, false)}
                disabled={!input.trim()}
                className={`text-lg flex-shrink-0 transition-all ${
                  input.trim() ? "text-primary hover:scale-110 active:scale-90" : "text-muted-foreground/30 cursor-not-allowed"
                }`}
                title={t('send_message')}
              >
                <HiPaperAirplane className="rotate-90" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
