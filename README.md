# 🚀 Storybook Component Library Setup Guide

## 📋 Prerequisites

### System Requirements

- **Node.js**: v20.x or later
  - [Official Node.js Download](https://nodejs.org/en/download)
- **Package Manager**:
  - npm (v10.x)
  - Yarn (v1.22.x)
  - pnpm (optional)

### Cross-Platform Setup

```bash
# Universal Node.js Installation
# Windows: Use official installer
# Linux: Use nvm or package manager
# MacOS: Recommended methods below
```

## 🔧 Platform-Specific Installations

### MacOS Specific Setup 🍎

```bash
# Recommended MacOS Installation Methods
# Option 1: Homebrew (Preferred)
brew install node@20

# Option 2: Official Installer
# Download from nodejs.org and install

# Xcode Command Line Tools (Essential)
xcode-select --install
```

### Windows Specific Setup 🪟

```powershell
# Use Windows Installer
# Ensure to check "Automatically install npm"
# Use Windows Subsystem for Linux (WSL) for better compatibility
```

### Linux Specific Setup 🐧

```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Arch Linux
sudo pacman -S nodejs npm
```

## 🛠 Project Dependencies

```bash
# Universal Dependency Installation
npm install

# MacOS Specific Performance Tip
brew install watchman  # Faster file watching
```

## 🔍 Troubleshooting

### Common Cross-Platform Issues

```bash
# Universal Dependency Reset
npm cache clean --force
rm -rf node_modules
npm install
```

### MacOS Specific Quirks 🍏

- **Permissions**: Often more strict
- **Firewall Considerations**:
  - Allow Node.js in Security Preferences
  - Check Application Permissions
- **M1/M2 Arch Compatibility**:
  - Use ARM64 Node.js versions
  - Rosetta 2 for x86 compatibility if needed

## 💡 Development Scripts

```bash
# Start Development
npm run dev

# Build Storybook
npm run build:storybook

# Run Tests
npm test
```

## 🌐 Recommended Tools

- **Cross-Platform**:
  - Visual Studio Code
  - Docker Desktop
- **MacOS Extras**:
  - iTerm2
  - Homebrew
- **Windows Extras**:
  - Windows Terminal
  - WSL2

## 🔒 License

UNLICENSED - avenit AG

### 🚀 Quick Start Checklist

- [ ] Install Node.js
- [ ] Install dependencies
- [ ] Configure environment
- [ ] Run `npm run dev`
- [ ] Open Storybook
