import React, { useRef, useEffect } from 'react';

interface LetterGlitchProps {
  glitchColors?: string[];
  className?: string;
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  characters?: string;
  fontSize?: number;
}

const LetterGlitch: React.FC<LetterGlitchProps> = ({
  glitchColors = ['#cbd5e1', '#94a3b8', '#2b8cee'],
  className = '',
  glitchSpeed = 50,
  centerVignette = true,
  outerVignette = false,
  smooth = true,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789',
  fontSize = 16
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const grid = useRef({ columns: 0, rows: 0 });
  const lastGlitchTime = useRef(Date.now());
  const charGrid = useRef<{ char: string; color: string }[][]>([]);

  const lettersAndSymbols = Array.from(characters);

  const getRandomChar = () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
  const getRandomColor = () => glitchColors[Math.floor(Math.random() * glitchColors.length)];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      grid.current.columns = Math.ceil(canvas.width / (fontSize * 0.8));
      grid.current.rows = Math.ceil(canvas.height / fontSize);
      
      charGrid.current = Array.from({ length: grid.current.rows }, () => 
        Array.from({ length: grid.current.columns }, () => ({
          char: getRandomChar(),
          color: getRandomColor()
        }))
      );
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const draw = () => {
      const now = Date.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = 'top';

      const shouldGlitch = now - lastGlitchTime.current > glitchSpeed;

      for (let r = 0; r < grid.current.rows; r++) {
        for (let c = 0; c < grid.current.columns; c++) {
          if (shouldGlitch && Math.random() < 0.02) {
            charGrid.current[r][c] = {
              char: getRandomChar(),
              color: getRandomColor()
            };
          }
          const { char, color } = charGrid.current[r][c];
          ctx.fillStyle = color;
          ctx.globalAlpha = 0.12;
          ctx.fillText(char, c * (fontSize * 0.8), r * fontSize);
        }
      }

      if (shouldGlitch) lastGlitchTime.current = now;

      if (centerVignette) {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.5
        );
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.6, 'rgba(255,255,255,0)');
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over';
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [glitchColors, glitchSpeed, centerVignette, characters, fontSize]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`w-full h-full block ${className}`}
      style={{ filter: smooth ? 'blur(0.5px)' : 'none' }}
    />
  );
};

export default LetterGlitch;