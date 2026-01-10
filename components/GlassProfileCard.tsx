import React, { useEffect, useRef, useState } from 'react';

interface GlassProfileCardProps {
    avatarUrl: string;
}

const GlassProfileCard: React.FC<GlassProfileCardProps> = ({ avatarUrl }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasCamera, setHasCamera] = useState(false);

    useEffect(() => {
        const startVideo = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    setHasCamera(true);
                }
            } catch (err) {
                console.log("Camera access denied or unavailable, using fallback image.", err);
                setHasCamera(false);
            }
        };

        startVideo();

        // Cleanup: Stop tracks when unmounting
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div className="relative group w-[300px] h-[450px] rounded-[30px] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] bg-slate-900">

            {/* 1. BACKGROUND: WEBCAM FEED OR STATIC IMAGE */}
            <div className="absolute inset-0 overflow-hidden">
                {hasCamera ? (
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover transform scale-x-[-1] transition-transform duration-700 group-hover:scale-[1.1]"
                    />
                ) : (
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${avatarUrl})` }}
                    />
                )}
                {/* Subtle overlay to blend with dark theme, but keeping face visible */}
                <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply"></div>
            </div>

            {/* 2. GLASS OVERLAY (The "Card" effect) */}
            <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5 border border-white/20 shadow-inner rounded-[30px] flex flex-col justify-between p-6 hover:backdrop-blur-none transition-all duration-500">

                {/* NOISE TEXTURE OVERLAY */}
                <div className="absolute inset-0 opacity-[0.10] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

                {/* HEADER: SECURE ACCESS */}
                <div className="flex justify-between items-start relative z-10">
                    <div className="px-3 py-1.5 rounded-lg border border-white/20 bg-black/40 backdrop-blur-md flex items-center gap-2">
                        <span className="material-symbols-outlined text-[12px] text-emerald-400 animate-pulse">radio_button_checked</span>
                        <span className="text-[10px] font-black tracking-widest text-white uppercase">Live Feed</span>
                    </div>
                    <span className="material-symbols-outlined text-white/50">face</span>
                </div>

                {/* BODY: NAME & INFO */}
                <div className="relative z-10 text-center mt-auto">
                    {/* Target Reticle visual */}
                    <div className="mb-8 relative opacity-50 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 mx-auto border border-cyan-400/50 rounded-lg flex items-center justify-center relative">
                            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-400"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-cyan-400"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-cyan-400"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-400"></div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-[900] text-white tracking-tight uppercase mb-1 drop-shadow-md">
                        Cristian Gutiérrez
                    </h3>
                    <p className="text-[10px] font-bold text-cyan-300 tracking-[0.2em] uppercase mb-8">
                        AI Solutions Architect
                    </p>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

                    <div className="flex justify-between items-end">
                        <div className="text-left">
                            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                            <p className="text-sm font-mono text-emerald-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                ONLINE
                            </p>
                        </div>
                        <span className="material-symbols-outlined text-4xl text-white/20">fingerprint</span>
                    </div>
                </div>
            </div>

            {/* 3. SHINE EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
        </div>
    );
};

export default GlassProfileCard;
