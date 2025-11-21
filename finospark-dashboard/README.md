## Finospark · AI-powered Finance Dashboard

Finospark is a Gemini-enabled personal finance cockpit built with Next.js (App Router), Tailwind v4, shadcn/ui, and a lightweight SQLite data layer (direct async queries, no ORM). The experience leans into a black + neon-green palette, responsive motion, and live insights for spending, rewards, and savings progress.

### ✨ Highlights

- Hero landing screen, neon navbar, and fully responsive insights dashboard.
- Recharts-powered line and pie visualizations for spend trends and categories.
- Built-in auth (username + email + password) with SQLite persistence.
- Dashboard, insights, and AI panels run against the authenticated user’s real data.
- Gemini endpoints for spending summaries, predictions, and AI advisor chat.
- shadcn/ui components (cards, badges, inputs, progress, avatar, scroll area).

### 🧱 Tech Stack

- Next.js 16 (App Router, Server Components)
- Tailwind CSS v4 + Framer Motion
- shadcn/ui + lucide-react icons
- SQLite (file-based dev database via `sqlite3` + `sqlite`)
- Gemini (`@google/generative-ai`)

### ⚙️ Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment variables**

   Create a `.env` (or `.env.local`) file in the project root:

   ```bash
   SQLITE_DB_PATH="app.db" # optional override, defaults to app.db
   SESSION_SECRET="replace-with-random-string"
   GEMINI_API_KEY="your_key_here" # optional, enables live Gemini calls
   ```

3. **Development server**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000`.

### 📡 API Surface

| Route | Description |
| --- | --- |
| `GET /api/transactions` | Authenticated feed of the user’s transactions (`limit`, `since`) |
| `POST /api/transactions` | Create a single transaction (credits/debits/manual notes) |
| `GET /api/transactions/:id` | Fetch one transaction scoped to the session |
| `PUT /api/transactions/:id` | Update transaction fields (amount, tags, labels, etc.) |
| `DELETE /api/transactions/:id` | Remove a transaction |
| `GET /api/insights` | Server-side derived spend rollups for the signed-in user |
| `POST /api/insights/manual` | Convert manual timeframe inputs into stored transactions |
| `POST /api/auth/register` | Create an account + seed demo rewards/transactions |
| `POST /api/auth/login` | Issue a session cookie for username/email + password |
| `POST /api/auth/logout` | Destroy the current session |
| `GET /api/auth/session` | Lightweight session probe for the navbar/client |
| `POST /api/ai/spending-summary` | Gemini summary of spending patterns |
| `POST /api/ai/predict` | Forecast next month’s spend swing |
| `POST /api/ai/advice` | Free-form AI advisor responses |

### 🧪 Testing & linting

```bash
npm run lint
```

### 🚀 Deployment

Use `npm run build` to produce the production bundle, then `npm run start` (or deploy via Vercel, Fly.io, etc.). Remember to configure the same environment variables on your host. SQLite lives in `app.db` (or the path set by `SQLITE_DB_PATH`).
