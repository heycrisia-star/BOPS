import React, { useRef, useEffect } from 'react';
import './Squares.css';

interface SquaresProps {
    direction?: 'up' | 'down' | 'left' | 'right' | 'diagonal';
    speed?: number;
    borderColor?: string;
    squareSize?: number;
    hoverFillColor?: string;
    className?: string;
}

const Squares: React.FC<SquaresProps> = ({
    direction = 'right',
    speed = 1,
    borderColor = '#999',
    squareSize = 40,
    hoverFillColor = '#222',
    className = ''
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number>();
    const numSquaresX = useRef<number>(0);
    const numSquaresY = useRef<number>(0);
    const gridOffset = useRef({ x: 0, y: 0 });
    const hoveredSquare = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
            numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
            const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

            for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
                for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
                    const squareX = x - (gridOffset.current.x % squareSize);
                    const squareY = y - (gridOffset.current.y % squareSize);

                    if (
                        hoveredSquare.current &&
                        Math.floor((x - startX) / squareSize) === hoveredSquare.current.x &&
                        Math.floor((y - startY) / squareSize) === hoveredSquare.current.y
                    ) {
                        ctx.fillStyle = hoverFillColor;
                        ctx.fillRect(squareX, squareY, squareSize, squareSize);
                    }

                    ctx.strokeStyle = borderColor;
                    ctx.strokeRect(squareX, squareY, squareSize, squareSize);
                }
            }

            // Updated gradient to be more subtle for the dark theme
            const gradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
            );
            // Transparent center to show grid, fading to black/slate at edges if needed, 
            // but original code had transparent to transparent? 
            // Original: gradient.addColorStop(0, 'rgba(0, 0, 0, 0)'); -> imply full transparent fill?
            // Actually ctx.fillStyle = gradient; ctx.fillRect... masks it?
            // Let's keep original logic: gradient opacity 0 at center.
            // But wait, if fillStyle is gradient and it rects the whole screen... 
            // The original code does: gradient addColorStop(0, 'rgba(0,0,0,0)'). 
            // And then fills rect. This essentially does nothing if it only has one stop?
            // Usually radial gradient needs 2 stops. 
            // I will add a second stop to fade out the edges slightly or keep it clean.
            // Let's stick to the prompt's logic but ensure it works. 
            // If the user provided code has only 1 stop, it might be incomplete or I missed something.
            // "gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');"
            // If I only add one stop, it's that color everywhere. So it clears the canvas overlay.
            // I'll assume they might want a fade. I'll add a transparent to slate fade.
            gradient.addColorStop(0, 'rgba(15, 23, 42, 0)'); // Transparent at center
            gradient.addColorStop(1, 'rgba(15, 23, 42, 0.8)'); // Darker at edges (Vignette)

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const updateAnimation = () => {
            const effectiveSpeed = Math.max(speed, 0.1);
            switch (direction) {
                case 'right':
                    gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
                    break;
                case 'left':
                    gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
                    break;
                case 'up':
                    gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
                    break;
                case 'down':
                    gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
                    break;
                case 'diagonal':
                    gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
                    gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
                    break;
                default:
                    break;
            }

            drawGrid();
            requestRef.current = requestAnimationFrame(updateAnimation);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
            const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

            const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / squareSize);
            const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / squareSize);

            if (
                !hoveredSquare.current ||
                hoveredSquare.current.x !== hoveredSquareX ||
                hoveredSquare.current.y !== hoveredSquareY
            ) {
                hoveredSquare.current = { x: hoveredSquareX, y: hoveredSquareY };
            }
        };

        const handleMouseLeave = () => {
            hoveredSquare.current = null;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        requestRef.current = requestAnimationFrame(updateAnimation);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [direction, speed, borderColor, hoverFillColor, squareSize]);

    return <canvas ref={canvasRef} className={`squares-canvas ${className}`}></canvas>;
};

export default Squares;
