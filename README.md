# 🤯 lobechat-plugin-template
A Lobe-chat plugin template for Cloudflare Workers.

## ⚙️  Development

We use [pnpm](https://pnpm.io/) as package manager. Follow these simple steps to get started:

```bash
# 📦 Install dependencies
pnpm install

# 🛠️ Start development server
pnpm dev
```

This will start a local development server at `http://localhost:5173`.

Add your plugins to the `src/apis` directory. Each plugin should be added to the `providers` array
in `src/apis/index.ts`.

### Miscellaneous

There is something you need to replace in files:

- `wrangler.toml`: Replace `name` and `service` with your own values.
- `src/manifest.ts`: Replace all the constants with your own values.

## 🌟 Deployment

This is a Cloudflare Worker project. Deploy it to Cloudflare Workers with just one command:

```bash
# 🚀 Build and deploy
pnpm run deploy
```

Once deployed, you can access your plugin manifest at:
`https://your-worker-name.your-account.workers.dev/manifest.json`
