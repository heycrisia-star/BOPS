
import React, { useState, useRef, useEffect } from 'react';
import { streamGeminiChat } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const ContactBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Hola, soy tu Arquitecto de IA. ¿Qué proceso de tu negocio quieres automatizar hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    let assistantText = '';
    setMessages(prev => [...prev, { role: 'assistant', text: '' }]);

    try {
      const stream = streamGeminiChat(userMsg);
      for await (const chunk of stream) {
        assistantText += chunk;
        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1].text = assistantText;
          return newMsgs;
        });
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: 'Lo siento, he tenido un problema técnico. ¿Podemos intentarlo de nuevo?' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Botón Flotante - Color dinámico para mejor visibilidad */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all transform active:scale-90 ${
            isOpen ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white hover:bg-blue-600'
          }`}
        >
          <span className="material-symbols-outlined text-[24px] md:text-[28px]">
            {isOpen ? 'close' : 'forum'}
          </span>
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white animate-pulse"></span>
          )}
        </button>
      </div>

      {/* Ventana de Chat - Mobile Responsive Fix */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 right-4 md:left-auto md:right-8 md:w-[380px] h-[70vh] md:h-[550px] max-h-[85vh] bg-white z-[99] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-[28px] md:rounded-[32px] border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          
          {/* Header - Ajustado para no cortarse */}
          <div className="p-5 md:p-6 bg-slate-900 text-white flex-shrink-0">
            <h4 className="font-black text-[12px] md:text-[14px] uppercase tracking-widest truncate">Asistente de Sistemas</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse flex-shrink-0"></span>
              <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-tighter truncate">
                Gemini 3 Pro • Thinking On
              </p>
            </div>
          </div>

          {/* Área de Mensajes - Scroll optimizado */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] md:max-w-[85%] p-3 md:p-4 rounded-[20px] text-[13px] md:text-[14px] leading-relaxed shadow-sm break-words ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && messages[messages.length-1].text === '' && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-3 md:p-4 rounded-[20px] rounded-tl-none shadow-sm text-slate-400 text-[11px] md:text-[12px] italic">
                  Analizando arquitectura...
                </div>
              </div>
            )}
          </div>

          {/* Input - Mejorado para móviles */}
          <div className="p-3 md:p-4 bg-white border-t border-slate-100 flex-shrink-0">
            <div className="flex gap-2 bg-slate-50 p-1.5 md:p-2 rounded-2xl border border-slate-200 items-center">
              <input 
                type="text"
                placeholder="Escribe tu consulta..."
                className="flex-grow h-10 px-3 bg-transparent text-[13px] md:text-[14px] outline-none min-w-0"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all disabled:opacity-30 flex-shrink-0"
              >
                <span className="material-symbols-outlined text-[18px] md:text-[20px]">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactBot;
