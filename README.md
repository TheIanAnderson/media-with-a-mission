# Media with a Mission

Vite + React site for Media with a Mission.

## Setup

```bash
npm install
npm run dev
```

Create a `.env` with:

```
VITE_SUPABASE_URL=your-url
VITE_SUPABASE_ANON_KEY=your-key
```

The app will fall back to `public/data/cases.json` if Supabase is unreachable.
