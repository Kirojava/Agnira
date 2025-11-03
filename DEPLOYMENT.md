# Netlify Deployment Guide

This project is ready to be deployed on Netlify!

## Quick Deploy

### Option 1: Deploy via Netlify UI

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git provider and select your repository
5. Netlify will automatically detect the build settings from `netlify.toml`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Build Configuration

The project is configured with:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **SPA routing**: Enabled via redirects

All settings are defined in `netlify.toml`.

## Environment Variables

If your project uses environment variables, add them in:
- Netlify UI: Site settings → Build & deploy → Environment variables

## Custom Domain

To add a custom domain:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## That's it! 🎉

Your Agnira MUN website will be live with automatic deployments on every push to your main branch.
