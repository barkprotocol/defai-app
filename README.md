<div align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)
[![Follow on X](https://img.shields.io/x/follow/bark_protocol?style=social)](https://x.com/bark_finance)
[![Telegram](https://img.shields.io/badge/Telegram-@bark-protocol)](https://t.me/bark-protocol)
[![Instagram](https://img.shields.io/badge/Instagram-@bark.protocol)](https://instagram.com/bark.protocol)

<p align="center">
  <img src="https://raw.githubusercontent.com/bark-protocol/defi-frontend/refs/heads/master/public/bark.png" alt="BARK Finance Logo" width="200"/>
</p>

</div>

# BARK FINANCE Overview

## Description

**BARK** FINANCE is a cutting-edge financial platform that revolutionizes how you interact with financial markets. Built with modern web technologies, it provides a seamless and intuitive user experience for all your financial needs.

## Features

- **Solana Integration** - Built on Solana's high-performance blockchain
- **Web3 Wallet Support** - Compatible with Phantom, Solflare, and other Solana wallets
- **Modern UI/UX** - Built with Next.js 15 and Radix UI components
- **Responsive Design** - Optimized for all devices with Tailwind CSS
- **Dark/Light Mode** - Theme support with next-themes
- **Interactive Charts** - Financial data visualization with Recharts
- **Type Safety** - Full TypeScript support
- **Testing** - Comprehensive Jest and React Testing Library setup

## Tech Stack

### Core
- ![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### Styling
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)

### Blockchain
- ![Solana](https://img.shields.io/badge/Solana-9945FF?style=for-the-badge&logo=solana&logoColor=white)
- Anchor Framework
- Web3.js

### Testing
- ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
- React Testing Library

## Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager
- A Solana wallet (Phantom or Solflare recommended)

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/bark-protocol/defi-frontend.git
cd defi-frontend
```

2. **Install dependencies**
```bash
pnpm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Start the development server**
```bash
pnpm run dev
# or
yarn dev
```

5. **Run tests**
```bash
pnpm test
pnpm run test:watch   # Watch mode
pnpm run test:coverage # Coverage report
```

## Project Structure

```
BARKFrontend/
├── app/              # Next.js 14 app directory
├── components/       # React components
│   ├── background/  # Background components
│   └── ui/          # UI components
├── public/          # Static files
├── styles/          # Global styles
├── lib/             # Utility functions
├── hooks/           # Custom React hooks
└── __tests__/       # Test files
```

## Contributing

We welcome contributions! Here's how you can help:

1. **Fork the Repository**
   - Create your own fork of the code

2. **Create a Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make Changes**
   - Write your code
   - Add or update tests
   - Update documentation

4. **Follow Coding Standards**
   - Use TypeScript for type safety
   - Follow the existing code style
   - Run tests before submitting

5. **Commit Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

6. **Push and Create PR**
   ```bash
   git push origin feature/AmazingFeature
   ```
   Then create a Pull Request on GitHub

## Development Guidelines

- Use TypeScript for all new code
- Write tests for new features
- Follow the component structure in place
- Use Tailwind CSS for styling
- Ensure responsive design
- Keep accessibility in mind

## License

The MIT License - see the [LICENSE](LICENSE) file for details.
