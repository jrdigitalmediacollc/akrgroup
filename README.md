# AKR Group Monorepo

Initialized with Next.js (SSR), NestJS, PostgreSQL, Redis, Render, and Cloudflare.

## Project Structure

```bash
.
├── apps
│   ├── api          # NestJS Backend
│   └── web          # Next.js Frontend
├── packages         # Shared internal packages (UI, Config, etc.)
├── docker-compose.yml # Local services (DB, Redis)
├── render.yaml      # Render deployment configuration
└── .cursorrules     # Agentic rules for the monorepo
```

## Quick Start (Local)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start Local Services (Postgres & Redis)**:
   ```bash
   docker compose up -d
   ```

3. **Run Development Mode**:
   - Both: `npm run dev` (from root)
   - Frontend: `npm run dev:web`
   - Backend: `npm run dev:api`

## Deployment

### Render
The project is configured for Render. Connect your repo and it should automatically pick up `render.yaml`.
- API lives on `http://localhost:3001` (local) or configured Render URL.
- Web lives on `http://localhost:3000` (local) or configured Render URL.

### Cloudflare
1. **CDN/DNS**: Point your domain to Cloudflare Nameservers.
2. **Security**: Enable WAF and Page Rules as needed.
3. **Proxy**: Ensure the proxy (orange cloud) is enabled for your Render web service CNAME record.
4. **SSL/TLS**: Set to "Full" or "Full (Strict)".

## Agentic Rules
This project includes `.cursorrules` at the root and within each application workspace to guide AI assistants during development.
