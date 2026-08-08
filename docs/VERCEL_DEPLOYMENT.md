# Vercel Deployment Guide & Architecture Audit

**Project**: TALTRIX Interactive Code Visualizer  
**Framework Architecture**: TanStack Start + Vite + Nitro + React SSR  
**Target Platform**: Vercel (Build Output API v3)  
**Status**: Fully Compatible & Deployment Ready  

---

## 1. Framework & Architecture Detected

TALTRIX is a full-stack React SSR application powered by:
- **TanStack Start** (`@tanstack/react-start`)
- **TanStack Router** (`@tanstack/react-router`)
- **Nitro Engine** (`nitro`)
- **Vite Bundler** (`vite`)

When building for production, Nitro intercepts the build via `NITRO_PRESET=vercel` (configured in [vite.config.ts](file:///c:/Users/komal/Downloads/CHROME/code-canvas-live-main/code-canvas-live-main/vite.config.ts)) and emits Vercel's official **Build Output API v3** format directly into `.vercel/output/`.

---

## 2. Build & Install Commands

| Action | Command | Notes |
| :--- | :--- | :--- |
| **Install Command** | `npm install` | Installs dependencies specified in `package.json` |
| **Build Command** | `npm run build` | Compiles client assets & SSR serverless handlers |
| **Preview Command** | `npm run preview` | Previews local production bundle |

---

## 3. Output Handling & Vercel Output Directory

- **Nitro Vercel Preset**: Automatically manages output paths under `.vercel/output/`.
- **Static Assets**: `.vercel/output/static/`
- **SSR Serverless Functions**: `.vercel/output/functions/__server.func/`
- **Route Manifest**: `.vercel/output/config.json`

> **IMPORTANT**: Do **NOT** set `dist` or any custom folder as the Output Directory in Vercel. Leave the **Output Directory** setting empty / default in the Vercel Dashboard so Vercel auto-detects `.vercel/output`.

---

## 4. Required Environment Variables

A `.env.example` file has been created at the root of the project:

```env
# Optional: Nitro Preset override (defaults to "vercel" when building for Vercel)
# NITRO_PRESET=vercel

# Optional: Custom API Base URL if external backend services are attached in future
# VITE_API_BASE_URL=https://api.taltrix.com
```

No secrets or API keys are hardcoded in source code. All runtime environment variables will be passed directly via Vercel Project Settings if needed.

---

## 5. Deployment Configuration & Files Audited

| File | Purpose | Audit / Change Status |
| :--- | :--- | :--- |
| [vite.config.ts](file:///c:/Users/komal/Downloads/CHROME/code-canvas-live-main/code-canvas-live-main/vite.config.ts) | Ensures `NITRO_PRESET = "vercel"` and delegates SSR entry to `src/server.ts`. | **Preserved & Verified** |
| [src/server.ts](file:///c:/Users/komal/Downloads/CHROME/code-canvas-live-main/code-canvas-live-main/src/server.ts) | TanStack Start SSR entry handler with error capture wrapper. | **Preserved & Verified** |
| [package.json](file:///c:/Users/komal/Downloads/CHROME/code-canvas-live-main/code-canvas-live-main/package.json) | Contains `dev`, `build`, and `preview` scripts. | **Preserved & Verified** |
| [.gitignore](file:///c:/Users/komal/Downloads/CHROME/code-canvas-live-main/code-canvas-live-main/.gitignore) | Ensures `.vercel`, `.output`, `dist`, `node_modules` are excluded. | **Verified** |
| [.env.example](file:///c:/Users/komal/Downloads/CHROME/code-canvas-live-main/code-canvas-live-main/.env.example) | Documents environment variable templates. | **Created** |
| `vercel.json` | **NOT NEEDED** for TanStack Start SSR. (Avoid static SPA rewrites). | **Removed / Excluded** |

---

## 6. Vercel Dashboard Settings

When importing this project repository into Vercel:

1. **Framework Preset**: Select **Other** (or leave as auto-detected).
2. **Build Command**: `npm run build` (or leave default).
3. **Install Command**: `npm install` (or leave default).
4. **Output Directory**: **Leave empty / default** (Do NOT override with `dist`).
5. **Root Directory**: `./` (Project root).

---

## 7. Production Test Results

- Ran `npm run build` synchronously in local environment.
- Output generated cleanly:
  - `.vercel/output/static` (Client static assets)
  - `.vercel/output/functions/__server.func` (SSR Handler)
  - `.vercel/output/nitro.json` (Nitro Manifest)
- Zero TypeScript or bundling errors.

---

## 8. Remaining Warnings & Advisories

- **Vendor Chunk Size Warning**: standard advisory for large client packages (`monaco-editor`, `recharts`, `framer-motion`). Does not impact Vercel serverless function deployment or route execution.
