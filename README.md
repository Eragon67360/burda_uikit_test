# 🚀 Storybook Component Library Setup Guide

## 📋 Prerequisites

### System Requirements

- **Node.js**: v20.x or later
  - [Official Node.js Download](https://nodejs.org/en/download)
- **Package Manager**:
  - npm (v10.x)
  - or Yarn (v1.22.x)

### Global Installations

```bash
npm install -g npm@latest
npm install -g @storybook/cli
```

## 🔧 Project Setup

### 1. Open a terminal in the Repository/Folder

### 2. Install Dependencies

```bash
# Using npm
npm install
```

## 🛠 Available Scripts

### Development

```bash
# Start Development (Tailwind + Storybook)
npm run dev

# Watch Tailwind CSS
npm run watch:tailwindcss

# Start Storybook
npm run watch:storybook
```

### Build Project

```bash
# Build Storybook static site
npm run build

# Preview Built Storybook
npm run preview-storybook
```

### Testing

```bash
npm test
```

## 📦 Core Dependencies

| Dependency  | Version | Purpose               |
| ----------- | ------- | --------------------- |
| Storybook   | v8.6.4  | Component Development |
| TailwindCSS | v4.0.6  | Styling               |
| Webpack     | v5      | Bundling              |

## 🔍 Troubleshooting

### Common Installation Issues

#### Node Version Conflicts

- Use [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm)
- Verify Node.js compatibility

#### Dependency Conflicts

```bash
# Clear npm cache
npm cache clean --force

# Rebuild node modules
rm -rf node_modules
npm install
```

## 🌐 Storybook Addons Included

- Accessibility (a11y)
- Interactions
- Essentials
- Backgrounds
- Webpack5 Compiler

## 🔒 License

UNLICENSED - avenit AG

---

### 🌟 Quick Start Checklist

- [ ] Install Node.js v20.x
- [ ] Install dependencies
- [ ] Run `npm run dev`
- [ ] Open Storybook at `http://localhost:6006`
- [ ] Start developing components!
