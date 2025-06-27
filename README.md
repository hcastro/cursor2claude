# cursor2claude ⚙️ → 📜

> **Translate Cursor IDE rules into a single, tidy `CLAUDE.md` so Claude Code understands your project.**

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![CI](https://github.com/<ORG>/cursor2claude/actions/workflows/ci.yml/badge.svg)](https://github.com/<ORG>/cursor2claude/actions)
[![npm](https://img.shields.io/npm/v/cursor2claude.svg)](https://www.npmjs.com/package/cursor2claude)

---

## ✨ Why?

_Cursor_ lets you write granular `.mdc` rules that keep its AI agent on‑brand.  
_Claude Code_ only looks at one Markdown file – `CLAUDE.md`. Keeping those in sync is a chore.

**cursor2claude** is a tiny CLI that:

1. Scans `.cursor/rules/**/*.{md,mdc}` at any depth
2. Categorises rules (always‑apply • context‑specific • other)
3. Decides whether to **inline** short / critical rules or **import** long ones
4. Writes / updates `CLAUDE.md`, preserving any notes below a marker
5. Offers `sync`, `watch`, and `status` commands for smooth DX.

Write a rule once ⇒ both editors follow it.

---

## 🛠 Tech Stack

| Tool                        | Purpose                     |
| --------------------------- | --------------------------- |
| **Node 22+ (TypeScript 5)** | Runtime & language          |
| **Commander**               | CLI surface                 |
| **yaml**                    | Robust front‑matter parsing |
| **chalk**                   | Colourised logs             |
| **Jest 30**                 | Unit tests                  |
| **pnpm**                    | Package manager             |
| **ESLint 9 + Prettier 3**   | Code quality                |

---

## 🚀 Quick Start

### One-off (no install required)

```bash
# pnpm
pnpm dlx cursor2claude sync

# npm
npx cursor2claude sync

# Yarn (≥2 / Berry)
yarn dlx cursor2claude sync
```

### Install as a dev-dependency

```bash
# pnpm
pnpm add -D cursor2claude
pnpm cursor2claude sync

# npm
npm install --save-dev cursor2claude
npx cursor2claude sync   # or add to package.json scripts

# Yarn
yarn add -D cursor2claude
yarn cursor2claude sync
```
