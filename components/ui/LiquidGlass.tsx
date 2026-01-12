"use client";

import React from "react";

// Types
interface GlassEffectProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    href?: string;
    target?: string;
    onClick?: (e: React.MouseEvent) => void;
}

// Glass Effect Wrapper Component
const GlassEffect: React.FC<GlassEffectProps> = ({
    children,
    className = "",
    style = {},
    href,
    target = "_self",
    onClick,
}) => {
    const glassStyle = {
        boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
        ...style,
    };

    const content = (
        <div
            className={`relative flex font-semibold overflow-hidden text-black transition-all duration-700 group cursor-pointer ${className}`}
            style={glassStyle}
            onClick={onClick}
        >
            {/* Glass Layers */}
            <div
                className="absolute inset-0 z-0 overflow-hidden rounded-inherit"
                style={{
                    backdropFilter: "blur(4px)",
                    // Note: mask-image or clip-path might be needed if filter bleeds, but overflow-hidden handles it usually.
                    filter: "url(#glass-distortion)",
                    isolation: "isolate",
                }}
            />

            {/* Glossy Reflection */}
            <div
                className="absolute inset-0 z-10 rounded-inherit opacity-40 group-hover:opacity-60 transition-opacity"
                style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)" }}
            />

            {/* Border/Highlight */}
            <div
                className="absolute inset-0 z-20 rounded-inherit overflow-hidden"
                style={{
                    boxShadow:
                        "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.2)",
                }}
            />

            {/* Content */}
            <div className="relative z-30 w-full h-full flex items-center justify-center">{children}</div>
        </div>
    );

    return href ? (
        <a href={href} target={target} rel="noopener noreferrer" className="block max-w-fit">
            {content}
        </a>
    ) : (
        content
    );
};

// Button Component
export const GlassButton: React.FC<{
    children: React.ReactNode;
    href?: string;
    className?: string;
    target?: string;
    onClick?: () => void;
}> = ({
    children,
    href,
    className,
    target,
    onClick
}) => (
        <GlassEffect
            href={href}
            target={target}
            onClick={onClick as any}
            className={`rounded-3xl hover:rounded-4xl active:scale-[0.98] ${className}`}
        >
            <div
                className="transition-all duration-700 hover:scale-105 px-8 py-3 flex items-center gap-2"
                style={{
                    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
                }}
            >
                {children}
            </div>
        </GlassEffect>
    );

// SVG Filter Component (Must be rendered once in the app, usually in Hero or root)
export const GlassFilter: React.FC = () => (
    <svg style={{ display: "none", position: "absolute", width: 0, height: 0 }}>
        <filter
            id="glass-distortion"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            filterUnits="objectBoundingBox"
        >
            <feTurbulence
                type="fractalNoise"
                baseFrequency="0.001 0.005"
                numOctaves="1"
                seed="17"
                result="turbulence"
            />
            <feComponentTransfer in="turbulence" result="mapped">
                <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
                <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
            </feComponentTransfer>
            <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
            <feSpecularLighting
                in="softMap"
                surfaceScale="5"
                specularConstant="1"
                specularExponent="100"
                lightingColor="white"
                result="specLight"
            >
                <fePointLight x="-200" y="-200" z="300" />
            </feSpecularLighting>
            <feComposite
                in="specLight"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
                result="litImage"
            />
            <feDisplacementMap
                in="SourceGraphic"
                in2="softMap"
                scale="20"
                xChannelSelector="R"
                yChannelSelector="G"
            />
        </filter>
    </svg>
);
