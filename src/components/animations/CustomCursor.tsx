import { useEffect, useRef, useState } from "react";
import { useSettings } from "@/contexts/SettingsContext";

type Mode = "default" | "button" | "code" | "text";

export function CustomCursor() {
  const { settings } = useSettings();
  const devCursor = settings.devCursor;

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const [mode, setMode] = useState<Mode>("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!devCursor?.enabled) {
      setEnabled(false);
      document.documentElement.style.cursor = "";
      return;
    }

    setEnabled(true);
    document.documentElement.style.cursor = "none";

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    const trailPos = { ...target };
    let raf = 0;

    const handleMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;

      const el = (e.target as HTMLElement | null)?.closest?.("[data-cursor], button, a, [role='button']") as HTMLElement | null;
      const next = (el?.dataset?.["cursor"] as Mode | undefined) ?? (el ? "button" : "default");
      setMode(next);
    };

    const handleClick = (e: MouseEvent) => {
      if (!devCursor?.clickRipple) return;
      const id = Date.now();
      setRipples((prev) => [...prev.slice(-4), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    const loop = () => {
      const speed = (devCursor.interactionStrength || 3) * 0.08;
      pos.x += (target.x - pos.x) * speed;
      pos.y += (target.y - pos.y) * speed;

      trailPos.x += (target.x - trailPos.x) * (speed * 0.45);
      trailPos.y += (target.y - trailPos.y) * (speed * 0.45);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.x}px, ${trailPos.y}px, 0) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(raf);
      document.documentElement.style.cursor = "";
    };
  }, [devCursor?.enabled, devCursor?.clickRipple, devCursor?.interactionStrength]);

  if (!enabled || !devCursor?.enabled) return null;

  const styleMode = devCursor.style;

  const ringStyle: Record<Mode, string> = {
    default:
      styleMode === "crosshair"
        ? "h-6 w-6 border-cyan-400/80 rounded-none border-dashed"
        : styleMode === "glow"
        ? "h-9 w-9 rounded-full border-cyan-400 bg-cyan-500/20 shadow-[0_0_20px_var(--color-accent)]"
        : "h-7 w-7 rounded-full border-cyan-400/80 bg-cyan-500/10 shadow-sm",
    button: "h-11 w-11 rounded-2xl border-cyan-400 bg-cyan-500/25 shadow-lg border-2",
    code: "h-9 w-9 rounded-lg border-purple-400/80 bg-purple-500/20",
    text: "h-8 w-[3px] rounded-full border-cyan-400 bg-cyan-400",
  };

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[999999]">
      {/* Click Ripples */}
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{ left: r.x, top: r.y }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/80 bg-cyan-400/20 animate-ping h-8 w-8"
        />
      ))}

      {/* Trailing follower ring if trail enabled */}
      {devCursor.trail ? (
        <div
          ref={trailRef}
          className="absolute top-0 left-0 h-10 w-10 rounded-full border border-cyan-500/25 bg-cyan-500/5 transition-transform duration-75"
        />
      ) : null}

      {/* Outer morphing ring */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 border transition-[width,height,border-radius,background-color,border-color] duration-200 ease-out ${ringStyle[mode]}`}
      />

      {/* Inner precise dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_var(--color-accent)]"
      />
    </div>
  );
}