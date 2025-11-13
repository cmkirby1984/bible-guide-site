# Bible Guide - Docusaurus Website

A beautiful, modern website for your comprehensive Bible study collection, built with Docusaurus and styled with Wisprflow-inspired dark theme.

## 🎨 Features

- **Dark Theme with Purple/Blue Gradients** - Inspired by Wisprflow's aesthetic
- **Clean Navigation** - Organized by Old Testament, New Testament, and Resources
- **Mobile Responsive** - Works perfectly on all devices
- **Fast Search** - Built-in search functionality (add Algolia for production)
- **Easy to Update** - Simply edit markdown files and push to GitHub

## 📁 Project Structure

```
bible-guide/
├── docs/                          # All your content goes here
│   ├── intro.md                   # Homepage
│   ├── old-testament/            # Old Testament books (create these)
│   │   ├── 01-genesis.md
│   │   ├── 02-exodus.md
│   │   └── ...
│   ├── new-testament/            # New Testament books
│   │   ├── 01-matthew.md
│   │   ├── 06-romans.md (example)
│   │   └── ...
│   ├── resources/                # Study resources
│   ├── indexes/                  # Various indexes
│   └── quick-reference/          # Quick reference tables
├── src/
│   └── css/
│       └── custom.css            # Custom Wisprflow-inspired styling
├── docusaurus.config.ts          # Site configuration
└── sidebars.ts                   # Navigation structure
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- Git

### Local Development

1. **Install dependencies:**
```bash
cd bible-guide
npm install
```

2. **Start development server:**
```bash
npm start
```

This opens http://localhost:3000 in your browser. The site auto-reloads when you edit files.

3. **Build for production:**
```bash
npm run build
```

This generates static files in the `build` folder.

4. **Test production build locally:**
```bash
npm run serve
```

## 📝 Adding Your Content

### Method 1: Copy from Your GitHub Repo

1. Clone your existing repo alongside this one:
```bash
cd ..
git clone https://github.com/cmkirby1984/bibleinfocollection.git
```

2. Copy all markdown files to the docs folder:
```bash
# Copy Old Testament files
cp -r bibleinfocollection/old-testament/* bible-guide/docs/old-testament/

# Copy New Testament files
cp -r bibleinfocollection/new-testament/* bible-guide/docs/new-testament/

# Copy resources
cp -r bibleinfocollection/resources/* bible-guide/docs/resources/

# Copy indexes
cp -r bibleinfocollection/indexes/* bible-guide/docs/indexes/

# Copy quick reference
cp -r bibleinfocollection/quick-reference/* bible-guide/docs/quick-reference/
```

3. Make sure each file has proper frontmatter at the top:
```markdown
---
id: filename-without-extension
title: Display Title
sidebar_label: Sidebar Name
---

# Your Content Here
```

### Method 2: Manual File Creation

Simply create markdown (.md) files in the appropriate folders. The sidebar is already configured to display them.

## 🌐 Deploying to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. **Create a new GitHub repository** for the website (separate from your content repo)

2. **Push this project to GitHub:**
```bash
cd bible-guide
git init
git add .
git commit -m "Initial Bible Guide website"
git branch -M main
git remote add origin https://github.com/cmkirby1984/bible-guide-site.git
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"

4. **Create GitHub Action workflow:**
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci
      - name: Build website
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./build

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. **Push the workflow:**
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment"
git push
```

Your site will automatically deploy to: `https://cmkirby1984.github.io/bible-guide-site/`

### Option 2: Manual Deployment

1. **Build the site:**
```bash
npm run build
```

2. **Deploy to GitHub Pages:**
```bash
GIT_USER=cmkirby1984 npm run deploy
```

## 🎨 Customizing the Theme

### Colors

Edit `src/css/custom.css` to change the color scheme. Current colors:
- Primary: `#a78bfa` (purple)
- Background: `#0a0a0f` (very dark blue)
- Surface: `#111118` (dark blue-gray)

### Logo

Replace `static/img/logo.svg` with your own logo

### Favicon

Replace `static/img/favicon.ico` with your own favicon

## 📦 Adding Features

### Search (Algolia)

1. Apply for Algolia DocSearch: https://docsearch.algolia.com/apply/
2. Once approved, add to `docusaurus.config.ts`:
```typescript
themeConfig: {
  algolia: {
    apiKey: 'YOUR_API_KEY',
    indexName: 'YOUR_INDEX_NAME',
    appId: 'YOUR_APP_ID',
  },
}
```

### Google Analytics

Add to `docusaurus.config.ts`:
```typescript
themeConfig: {
  gtag: {
    trackingID: 'G-XXXXXXXXXX',
  },
}
```

## 🛠️ Troubleshooting

### Build Errors

If you get missing file errors:
1. Check that all files referenced in `sidebars.ts` exist in the `docs` folder
2. Make sure file paths match exactly (case-sensitive)
3. Verify all files have proper frontmatter

### Styling Issues

- Clear cache: `npm run clear`
- Rebuild: `npm run build`

## 📚 Documentation

- Docusaurus docs: https://docusaurus.io
- Markdown features: https://docusaurus.io/docs/markdown-features

## 🤝 Contributing

This is your personal Bible study resource! Edit freely and make it your own.

## 📄 License

Your content, your license. Consider adding a Creative Commons license if you want others to use it.

---

**Need help?** Check the Docusaurus documentation or create an issue on GitHub.
