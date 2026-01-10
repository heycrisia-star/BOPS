import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';
import './Iridescence.css';

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`;

interface IridescenceProps {
    color?: number[];
    speed?: number;
    amplitude?: number;
    mouseReact?: boolean;
    [key: string]: any;
}

export default function Iridescence({ color = [1, 1, 1], speed = 1.0, amplitude = 0.1, mouseReact = true, ...rest }: IridescenceProps) {
    const ctnDom = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0.5, y: 0.5 });
    const animateIdRef = useRef<number>();
    const glRef = useRef<WebGLRenderingContext>();
    const rendererRef = useRef<Renderer>();

    useEffect(() => {
        if (!ctnDom.current) return;
        const ctn = ctnDom.current;

        // Check if renderer already exists to prevent duplication on strict mode double-invoke
        if (!rendererRef.current) {
            const renderer = new Renderer({ alpha: true });
            rendererRef.current = renderer;
            const gl = renderer.gl;
            glRef.current = gl;
            gl.clearColor(0, 0, 0, 0);
            ctn.appendChild(gl.canvas);
        }

        const renderer = rendererRef.current!;
        const gl = renderer.gl;

        let program: Program;

        function resize() {
            if (!ctnDom.current) return;
            const scale = 1;
            renderer.setSize(ctnDom.current.offsetWidth * scale, ctnDom.current.offsetHeight * scale);
            if (program) {
                program.uniforms.uResolution.value = new Color(
                    gl.canvas.width,
                    gl.canvas.height,
                    gl.canvas.width / gl.canvas.height
                );
            }
        }
        window.addEventListener('resize', resize, false);
        resize();

        const geometry = new Triangle(gl);
        program = new Program(gl, {
            vertex: vertexShader,
            fragment: fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new Color(...color) },
                uResolution: {
                    value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
                },
                uMouse: { value: new Float32Array([mousePos.current.x, mousePos.current.y]) },
                uAmplitude: { value: amplitude },
                uSpeed: { value: speed }
            }
        });

        const mesh = new Mesh(gl, { geometry, program });

        function update(t: number) {
            animateIdRef.current = requestAnimationFrame(update);
            program.uniforms.uTime.value = t * 0.001;
            renderer.render({ scene: mesh });
        }
        animateIdRef.current = requestAnimationFrame(update);

        function handleMouseMove(e: MouseEvent) {
            if (!ctnDom.current) return;
            const rect = ctnDom.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = 1.0 - (e.clientY - rect.top) / rect.height;
            mousePos.current = { x, y };
            program.uniforms.uMouse.value = new Float32Array([x, y]);
        }

        if (mouseReact) {
            ctn.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (animateIdRef.current) cancelAnimationFrame(animateIdRef.current);
            window.removeEventListener('resize', resize);
            if (mouseReact && ctn) {
                ctn.removeEventListener('mousemove', handleMouseMove);
            }
            if (glRef.current) {
                glRef.current.getExtension('WEBGL_lose_context')?.loseContext();
            }
            if (ctn && ctn.contains(gl.canvas)) {
                ctn.removeChild(gl.canvas);
                rendererRef.current = undefined;
            }
        };
    }, [color, speed, amplitude, mouseReact]);

    return <div ref={ctnDom} className="iridescence-container" {...rest} />;
}
