import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { HiSparkles, HiX, HiMicrophone, HiPaperAirplane } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

interface Message {
  role: "user" | "ai";
  content: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function FloatingAIAgent({ isOpen, onClose }: Props) {
  const { t } = useLanguage();

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

  const sendMessage = useCallback((textOverride?: string) => {
    const text = (textOverride ?? input).trim();
    if (!text) return;
    setMessages(prev => [...prev, { role: "user", content: text }]);
    setInput("");
    setListeningText("");
    setIsTyping(true);
    setTimeout(() => {
      const reply = AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)];
      setMessages(prev => [...prev, { role: "ai", content: reply }]);
      setIsTyping(false);
    }, 1400);
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
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
      if (text.trim()) sendMessage(text.trim());
    }, 4000);
  }, [stopListening, sendMessage]);

  const toggleListen = () => {
    if (isListening) { stopListening(); return; }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";
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
      setListeningText("Listening...");
      silenceTimerRef.current = setTimeout(() => {
        const sim = "What is the current fleet status?";
        stopListening();
        sendMessage(sim);
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
          <button
            onClick={onClose}
            className="size-7 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-all"
          >
            <HiX className="text-sm" />
          </button>
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
                {msg.content}
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
              title={isListening ? "Stop listening" : "Speak to Gearbot"}
            >
              <HiMicrophone />
            </button>
            {/* Send button — hidden while listening */}
            {!isListening && (
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim()}
                className={`text-lg flex-shrink-0 transition-all ${
                  input.trim() ? "text-primary hover:scale-110 active:scale-90" : "text-muted-foreground/30 cursor-not-allowed"
                }`}
                title="Send message"
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
