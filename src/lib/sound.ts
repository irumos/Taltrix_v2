/** Tiny WebAudio blip engine — no assets, no network. */
type Blip = "type" | "run" | "compile" | "hover";

const PRESETS: Record<Blip, { freq: number; dur: number; gain: number; type: OscillatorType }> = {
  type: { freq: 880, dur: 0.03, gain: 0.012, type: "square" },
  hover: { freq: 620, dur: 0.04, gain: 0.008, type: "sine" },
  run: { freq: 340, dur: 0.16, gain: 0.03, type: "triangle" },
  compile: { freq: 520, dur: 0.22, gain: 0.022, type: "sine" },
};

let ctx: AudioContext | null = null;
let muted = true;

export const isMuted = () => muted;

export function setMuted(next: boolean) {
  muted = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem("taltrix:muted", String(next));
  }
}

export function restoreMuted() {
  if (typeof window === "undefined") return true;
  muted = window.localStorage.getItem("taltrix:muted") !== "false";
  return muted;
}

export function blip(kind: Blip) {
  if (muted || typeof window === "undefined") return;
  try {
    let volumeMultiplier = 1;
    // Check if stored user settings exist
    const stored = window.localStorage.getItem("taltrix:user_settings:v1");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed?.sound) {
        if (parsed.sound.masterSound === false) return;
        if (kind === "type" && parsed.sound.soundTyping === false) return;
        if (kind === "run" && parsed.sound.soundRun === false) return;
        if (kind === "hover" && parsed.sound.soundHover === false) return;
        if (typeof parsed.sound.volume === "number") {
          volumeMultiplier = parsed.sound.volume / 100;
        }
      }
    }

    ctx ??= new AudioContext();
    if (ctx.state === "suspended") void ctx.resume();
    const p = PRESETS[kind];
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = p.type;
    osc.frequency.value = p.freq;
    const finalGain = p.gain * volumeMultiplier;
    gain.gain.setValueAtTime(finalGain, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + p.dur);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + p.dur);
  } catch {
    /* audio unavailable — silently ignore */
  }
}