# cursor2claude

> **Translate Cursor IDE rules into a single, tidy `CLAUDE.md` so Claude Code understands your project.**

---

## ✨ Why?

_Cursor_ lets you write granular `.mdc` rules that keep its AI agent on‑brand.  
_Claude Code_ only looks at one Markdown file – `CLAUDE.md`. Keeping those in sync is a chore.

**cursor2claude** is a tiny CLI that:

1. Scans `.cursor/rules/**/*.{md,mdc}` at any depth
2. Categorizes rules (always‑apply • context‑specific • other)
3. Decides whether to **inline** short / critical rules or **import** long ones
4. Writes / updates `CLAUDE.md`, preserving any notes below a marker
5. Offers `sync`, `watch`, and `status` commands for smooth DX.

Write a rule once ⇒ both AIs follow it.

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

---

## 📋 Commands

```bash
cursor2claude sync    # One-time sync of rules to CLAUDE.md
cursor2claude watch   # Watch for changes and auto-sync
cursor2claude status  # Check current sync status
```

---

## 🔧 How It Works

1. **Discovers** all `.md` and `.mdc` files in `.cursor/rules/`
2. **Parses** YAML frontmatter to understand rule properties
3. **Categorizes** rules based on `alwaysApply` and `description` fields
4. **Generates** a clean `CLAUDE.md` with:
   - Auto-generated header
   - Organized rule imports
   - Preserved user content below marker

### Rule Types

- **Always-Apply Rules**: Global context rules (`alwaysApply: true`)
- **Agent-Selected Rules**: Context-specific rules with descriptions
- **Other Rules**: Manual or auto rules without descriptions

### How It Works

cursor2claude transforms your Cursor rules into a single CLAUDE.md file:

```
📁 .cursor/rules/                    ➜    📄 CLAUDE.md
├── 📁 core-rules/                        ┌─────────────────────────────┐
│   └── 📄 code-quality.mdc               │ ## 🌍 Always-Apply Rules    │
│       (alwaysApply: true)               │ @.cursor/rules/core-rules/  │
│                                         │   code-quality.mdc          │
└── 📁 tool-rules/                        │                             │
    ├── 📄 git-commit-assistant.mdc       │ ## 🤖 Agent-Selected Rules  │
    │   (agent-selected)                  │ @.cursor/rules/tool-rules/  │
    └── 📄 task-list-management.mdc       │   git-commit-assistant.mdc  │
        (agent-selected)                  │ @.cursor/rules/tool-rules/  │
                                          │   task-list-management.mdc  │
                                          └─────────────────────────────┘
```

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
