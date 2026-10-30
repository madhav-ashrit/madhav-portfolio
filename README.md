# Madhav Ashrit — React portfolio

Responsive React + Vite portfolio, styled for GitHub Pages.

## Before publishing
1. Edit `src/config.js` and replace the LinkedIn, GitHub, LeetCode, Credly and AI DevOps Assistant URLs. These are placeholders because the actual URLs were not present in the resume text available to me.
2. Add your PDF resume to `public/Madhav_Ashrit_Resume.pdf`.
3. In `vite.config.js`, if this is a project repo such as `madhav-portfolio`, change `base: '/'` to `base: '/madhav-portfolio/'`. If your repository is named `YOURUSERNAME.github.io`, keep `/`.

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Push the project to GitHub, then go to Settings → Pages and select GitHub Actions. Add `.github/workflows/deploy.yml` (included) or use the included workflow. Push to `main`; GitHub Actions builds and publishes the site.
