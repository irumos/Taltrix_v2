import { memo, useEffect, useRef } from "react";

const TOKENS = [
  "if", "return", "class", "while", "for", "print", "malloc", "new", "{}", "[]", "()",
  "const", "let", "def", "function", "=>", "async", "await", "null", "int", "void",
  "try", "catch", "yield", "self", "0x1a", "&ptr", "stack", "heap", "push", "pop",
];

type Fragment = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hx: number;
  hy: number;
  size: number;
  alpha: number;
  text: string;
  hue: number;
};

export const LivingCodeCanvas = memo(function LivingCodeCanvas({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let fragments: Fragment[] = [];
    let order = 0;
    let raf = 0;
    const pointer = { x: -9999, y: -9999 };
    const ripples: { x: number; y: number; r: number; life: number }[] = [];

    const build = () => {
      const nextW = canvas.clientWidth;
      const nextH = canvas.clientHeight;
      if (!nextW || !nextH) return;

      if (canvas.width !== Math.floor(nextW * dpr) || canvas.height !== Math.floor(nextH * dpr)) {
        canvas.width = Math.floor(nextW * dpr);
        canvas.height = Math.floor(nextH * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      w = nextW;
      h = nextH;

      // Capped density for buttery 60fps performance
      const density = Math.min(90, Math.max(50, Math.round((w * h) / 14000)));

      if (fragments.length === 0) {
        fragments = Array.from({ length: density }, () => {
          const x = Math.random() * w;
          const y = Math.random() * h;
          return {
            x,
            y,
            hx: x,
            hy: y,
            vx: (Math.random() - 0.5) * 0.18,
            vy: (Math.random() - 0.5) * 0.18,
            size: 11,
            alpha: 0.12 + Math.random() * 0.28,
            text: TOKENS[Math.floor(Math.random() * TOKENS.length)] ?? "if",
            hue: Math.random(),
          };
        });
      } else if (fragments.length < density) {
        const diff = density - fragments.length;
        for (let i = 0; i < diff; i++) {
          const x = Math.random() * w;
          const y = Math.random() * h;
          fragments.push({
            x,
            y,
            hx: x,
            hy: y,
            vx: (Math.random() - 0.5) * 0.18,
            vy: (Math.random() - 0.5) * 0.18,
            size: 11,
            alpha: 0.12 + Math.random() * 0.28,
            text: TOKENS[Math.floor(Math.random() * TOKENS.length)] ?? "if",
            hue: Math.random(),
          });
        }
      } else if (fragments.length > density) {
        fragments.length = density;
      }
    };

    const columnTargets = () => {
      const cols = 6;
      const perCol = Math.ceil(fragments.length / cols) || 1;
      fragments.forEach((f, i) => {
        const col = Math.floor(i / perCol);
        const row = i % perCol;
        f.hx = (w / (cols + 1)) * (col + 1);
        f.hy = ((row + 0.5) / perCol) * h;
      });
    };

    const scatterTargets = () => {
      fragments.forEach((f) => {
        f.hx = Math.random() * w;
        f.hy = Math.random() * h;
      });
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };

    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const onDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      ripples.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, r: 0, life: 1 });
      if (ripples.length > 5) ripples.shift();
    };

    const onScroll = () => {
      const next = window.scrollY > 120 ? 1 : 0;
      if (next === order) return;
      order = next;
      if (order) columnTargets();
      else scatterTargets();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      // Set font ONCE per frame outside loop to prevent canvas re-parsing lag
      ctx.font = '12px "JetBrains Mono", monospace';

      for (const f of fragments) {
        if (order) {
          f.x += (f.hx - f.x) * 0.03;
          f.y += (f.hy - f.y) * 0.03;
        } else {
          f.x += f.vx;
          f.y += f.vy;
        }

        const dx = f.x - pointer.x;
        const dy = f.y - pointer.y;
        const dist2 = dx * dx + dy * dy;

        if (dist2 < 20000) {
          const d = Math.sqrt(dist2) || 1;
          const push = (1 - d / 140) * 3;
          f.x += (dx / d) * push;
          f.y += (dy / d) * push;
        }

        for (const rp of ripples) {
          const rdx = f.x - rp.x;
          const rdy = f.y - rp.y;
          const d = Math.hypot(rdx, rdy) || 1;
          const band = Math.abs(d - rp.r);
          if (band < 40) {
            const force = (1 - band / 40) * rp.life * 2.4;
            f.x += (rdx / d) * force;
            f.y += (rdy / d) * force;
          }
        }

        if (f.x < -30) f.x = w + 30;
        if (f.x > w + 30) f.x = -30;
        if (f.y < -30) f.y = h + 30;
        if (f.y > h + 30) f.y = -30;

        const near = dist2 < 36000;
        ctx.fillStyle =
          f.hue > 0.86
            ? `rgba(168, 85, 247, ${Math.min(0.85, f.alpha + (near ? 0.35 : 0))})`
            : f.hue > 0.72
              ? `rgba(34, 211, 238, ${Math.min(0.8, f.alpha + (near ? 0.32 : 0))})`
              : `rgba(190, 202, 226, ${Math.min(0.75, f.alpha * (near ? 1.8 : 1))})`;
        ctx.fillText(f.text, f.x, f.y);
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i]!;
        rp.r += 8;
        rp.life -= 0.016;
        if (rp.life <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.strokeStyle = `rgba(34, 211, 238, ${rp.life * 0.25})`;
        ctx.lineWidth = 1;
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(canvas);

    if (reduced) {
      draw();
      cancelAnimationFrame(raf);
      return () => ro.disconnect();
    }

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    canvas.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("scroll", onScroll);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced]);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full transform-gpu will-change-transform z-[1]" />;
});