import React from 'react';

const IntroVideo: React.FC = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-slate-900">
            {/* VIDEO BACKGROUND */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
                src="https://pppwfgqjnfdprcpbzudk.supabase.co/storage/v1/object/sign/bops/ezgif.com-video-to-webp-converter%20(1).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hY2Y3MDNhOS03NTRlLTQ3OGItYTRiYy0wMjE4MjA1MTY1NjkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib3BzL2V6Z2lmLmNvbS12aWRlby10by13ZWJwLWNvbnZlcnRlciAoMSkubXA0IiwiaWF0IjoxNzY4MTY3OTA5LCJleHAiOjIwODM1Mjc5MDl9.uYjb_HfMHedwoq2RsDmmmpEVowzoOXswklfqWCxUILU"
            />

            {/* OVERLAY for better text contrast if needed (optional, keeping minimal as requested) */}
            <div className="absolute inset-0 bg-black/20 z-0"></div>

            {/* CONTENT - Kept minimal as "solo cabecera y footer" implies video is the hero */}
        </section>
    );
};

export default IntroVideo;
