# PromptCraft 🎨

> AI-powered Text to 3D & Image to 3D model generation platform

---

## Overview

PromptCraft is a modern web platform that lets users generate high-quality 3D models from text prompts or images using AI. It features a Model Market for browsing and sharing community creations, enterprise-grade team management tools, and a clean, responsive UI built for both creators and developers.

---

## Features

- **Text to 3D** — Generate 3D models instantly from a text description
- **Image to 3D** — Upload any image and convert it into a 3D model
- **Multi-Side Image to 3D** — Upload front, side, and back views for high-fidelity results
- **Model Market** — Browse, filter, and download community-created 3D models
- **AI Texture Editing** — Refine colours, patterns, and materials via prompt
- **Free Retry** — Re-generate models for free until you get the perfect result
- **Enterprise Controls** — Multi-team workspace management with centralised oversight
- **Responsive Design** — Fully optimised for desktop, tablet, and mobile

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, JSX |
| Styling | CSS Modules, CSS Variables |
| Routing | React Router DOM |
| Animations | Intersection Observer API (custom scroll-reveal hook) |
| Deployment | Vercel |
| Version Control | Git, GitHub |

---

## Getting Started

### Prerequisites
- Node.js v16 or higher
- npm v8 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Usha0070/Prompt-Craft.git

# Navigate into the project
cd Prompt-Craft

# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode with hot reload |
| `npm run build` | Builds the app for production into the `build` folder |
| `npm test` | Launches the test runner in interactive watch mode |

---

## Project Structure

```
Prompt-Craft/
├── public/                  # Static assets & images
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── Categories/
│   │   ├── MultiSide/
│   │   ├── Enterprise/
│   │   ├── Reviews/
│   │   ├── FAQ/
│   │   └── Footer/
│   ├── pages/               # Page-level components
│   │   ├── Home.jsx
│   │   ├── TextTo3D.jsx
│   │   ├── ImageTo3D.jsx
│   │   └── ModelMarket.jsx
│   ├── data/                # Static data & content
│   ├── hooks/               # Custom React hooks
│   └── styles/              # Global styles & variables
└── package.json
```

---

## Deployment

This project is deployed on **Vercel** with automatic deployments triggered on every push to the `main` branch.

To deploy your own instance:

1. Fork this repository
2. Import it into [Vercel](https://vercel.com)
3. Set the production branch to `main`
4. Click Deploy — done!

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

**Usha0070** — [mdushakhan007@gmail.com](mailto:mdushakhan007@gmail.com)

GitHub: [@Usha0070](https://github.com/Usha0070)
