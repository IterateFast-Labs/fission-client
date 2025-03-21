//blink.module.css
import css from './blink.module.css';

export function Blink({
  children,
  duration,
  step,
}: {
  children: React.ReactNode;
  duration?: number;
  step?: number;
}) {
  return (
    <span
      className={css.test}
      style={
        {
          '--blink-duration': `${duration ?? 0.5}s`,
          '--blink-step': `${step ?? 0.5}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
}
