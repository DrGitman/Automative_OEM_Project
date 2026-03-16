import { useState, useRef, useEffect, useCallback } from "react";
import { HiSparkles, HiX, HiMicrophone, HiPaperAirplane } from "react-icons/hi";

interface Message {
  role: "user" | "ai";
  content: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_MESSAGE: Message = {
  role: "ai",
  content: "Hey! I'm Gearbot, your fleet intelligence assistant. How can I help you today?",
};

const AI_RESPONSES = [
  "Your fleet is currently at 92% operational capacity. 2 vehicles require attention.",
  "Based on maintenance history, Vehicle GH-102 is due for a service check within the next 3 days.",
  "I've detected 1 critical alert: a brake wear warning on Tesla Model 3 (GH-102). Schedule maintenance immediately.",
  "Fleet stats: 14 active vehicles, 2 in maintenance, 1 booking pending for tomorrow.",
  "GH-056 speed threshold was exceeded on M1 Highway yesterday. Driver: Mike Ross.",
];

export default function FloatingAIAgent({ isOpen, onClose }: Props) {
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
      className="z-50 w-[360px] select-none"
    >
      <div
        className="bg-white/95 backdrop-blur-xl rounded-[28px] shadow-2xl overflow-hidden flex flex-col"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)" }}
      >
        {/* Drag Handle / Header */}
        <div
          onMouseDown={handleMouseDown}
          className="flex items-center justify-between px-5 pt-5 pb-3 cursor-grab active:cursor-grabbing"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-xl bg-[#D72322] flex items-center justify-center shadow-lg shadow-red-200">
              <HiSparkles className="text-white text-base" />
            </div>
            <div>
              <p className="text-[#04091E] font-semibold text-sm leading-none">Gearbot</p>
              <p className="text-[#A3A6B4] text-xs font-normal mt-0.5">Fleet Intelligence Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="size-7 rounded-lg bg-[#F8F9FB] flex items-center justify-center text-[#A3A6B4] hover:bg-[#EEEFF2] hover:text-[#04091E] transition-all"
          >
            <HiX className="text-sm" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="mx-4 mb-3 bg-[#F8F9FB] rounded-2xl p-4 max-h-[240px] overflow-y-auto space-y-3">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm font-normal leading-relaxed ${
                msg.role === "user"
                  ? "bg-[#D72322] text-white rounded-br-sm"
                  : "bg-white text-[#04091E] rounded-bl-sm shadow-sm border border-[#EEEFF2]"
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-[#EEEFF2] flex gap-1 items-center">
                <div className="size-1.5 bg-[#A3A6B4] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="size-1.5 bg-[#A3A6B4] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="size-1.5 bg-[#A3A6B4] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* AI Orb */}
        <div className="flex justify-center py-2">
          <div className="relative">
            <div
              className={`size-16 rounded-full flex items-center justify-center shadow-xl shadow-red-300 transition-all duration-300 ${isListening ? "scale-110 shadow-2xl shadow-red-400" : ""}`}
              style={{
                background: isListening
                  ? "radial-gradient(circle at 30% 30%, #ff4444, #D72322)"
                  : "radial-gradient(circle at 30% 30%, #e83333, #D72322)",
              }}
            >
              {isListening && (
                <>
                  <div className="absolute inset-0 rounded-full bg-[#D72322]/30 animate-ping" />
                  <div className="absolute -inset-2 rounded-full bg-[#D72322]/15 animate-ping" style={{ animationDelay: "150ms" }} />
                </>
              )}
              <HiSparkles className="text-white text-2xl relative z-10" />
            </div>
          </div>
        </div>

        {/* Live voice transcript preview */}
        {isListening && listeningText && (
          <div className="mx-4 mb-2 px-3 py-2 bg-[#FEE2E2] rounded-xl">
            <p className="text-sm text-[#D72322] font-normal italic leading-snug">{listeningText}</p>
            <p className="text-[10px] text-[#D72322]/60 mt-0.5">Auto-sending after 4s of silence…</p>
          </div>
        )}

        {/* Input Row */}
        <div className="px-4 pb-4 pt-1">
          <div className="flex items-center gap-2 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl px-4 h-11">
            <input
              type="text"
              value={isListening ? listeningText : input}
              onChange={(e) => !isListening && setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isListening ? "Listening..." : "Ask Gearbot..."}
              readOnly={isListening}
              className={`flex-1 bg-transparent outline-none text-sm font-normal placeholder-[#A3A6B4] ${
                isListening ? "text-[#D72322] italic" : "text-[#04091E]"
              }`}
            />
            {/* Mic button */}
            <button
              onClick={toggleListen}
              className={`text-lg transition-colors flex-shrink-0 ${isListening ? "text-[#D72322] animate-pulse" : "text-[#A3A6B4] hover:text-[#D72322]"}`}
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
                  input.trim() ? "text-[#D72322] hover:scale-110 active:scale-90" : "text-[#D4D5DB] cursor-not-allowed"
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
