import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
    to: number;
    from?: number;
    direction?: 'up' | 'down';
    delay?: number;
    duration?: number;
    className?: string;
    startWhen?: boolean;
    separator?: string;
    onStart?: () => void;
    onEnd?: () => void;
}

export default function CountUp({
    to,
    from = 0,
    direction = 'up',
    delay = 0,
    duration = 2,
    className = '',
    startWhen = true,
    separator = '',
    onStart,
    onEnd
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === 'down' ? to : from);

    const damping = 20 + 40 * (1 / duration);
    const stiffness = 100 * (1 / duration);

    const springValue = useSpring(motionValue, {
        damping,
        stiffness
    });

    const isInView = useInView(ref, { once: true, margin: '0px' });

    useEffect(() => {
        if (ref.current) {
            ref.current.textContent = String(from);
        }
    }, [from]);

    useEffect(() => {
        if (isInView && startWhen) {
            if (onStart) {
                onStart();
            }

            const timeoutId = setTimeout(() => {
                motionValue.set(direction === 'down' ? from : to);
            }, delay * 1000);

            const durationMs = duration * 1000;

            const unsubscribe = springValue.on('change', (latest) => {
                if (ref.current) {
                    const isFloat = Number.isInteger(latest) === false;
                    // Simple formatting: no decimals for now as mostly integers used, avoiding complex logic without necessity.
                    // If latest needs decimals, can verify props.
                    const formattedNumber = Math.round(latest).toLocaleString('en-US').replace(/,/g, separator);
                    ref.current.textContent = formattedNumber;
                }
            });

            const endTimeoutId = setTimeout(() => {
                if (onEnd) {
                    onEnd();
                }
            }, delay * 1000 + durationMs);

            return () => {
                clearTimeout(timeoutId);
                clearTimeout(endTimeoutId);
                unsubscribe();
            };
        }
    }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration, separator, springValue]);

    return <span className={className} ref={ref} />;
}
