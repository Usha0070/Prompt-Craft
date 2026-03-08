# PromptCraft 🎨

An AI-powered **Text to 3D** and **Image to 3D** model generation platform — built with React 18 and deployed on Vercel.

---

## 📌 About

PromptCraft is a modern web platform that lets users generate high-quality 3D models from text prompts or uploaded images using AI. It features a community Model Market for browsing and sharing creations, enterprise-grade team management tools, and a clean responsive UI built for both creators and developers.

---

## ✨ Features

| Feature | Description |
|---|---|
| ✍️ **Text to 3D** | Generate 3D models instantly from a text description |
| 🖼️ **Image to 3D** | Upload any image and convert it into a 3D model |
| 🔄 **Multi-Side Image to 3D** | Upload front, side, and back views for high-fidelity results |
| 🛒 **Model Market** | Browse, filter, and download community-created 3D models |
| 🎨 **AI Texture Editing** | Refine colours, patterns, and materials via prompt |
| 🔁 **Free Retry** | Re-generate models for free until you get the perfect result |
| 🏢 **Enterprise Controls** | Multi-team workspace management with centralised oversight |
| 📱 **Responsive Design** | Fully optimised for desktop, tablet, and mobile |

---

## 🗂 Project Structure

```
Prompt-Craft/
├── public/                  # Static assets & images
└── src/
    ├── components/          # Reusable UI components
    │   ├── Navbar/
    │   ├── Hero/
    │   ├── Features/
    │   ├── Categories/
    │   ├── MultiSide/
    │   ├── Enterprise/
    │   ├── Reviews/
    │   ├── FAQ/
    │   └── Footer/
    ├── pages/               # Page-level components
    │   ├── Home.jsx
    │   ├── TextTo3D.jsx
    │   ├── ImageTo3D.jsx
    │   └── ModelMarket.jsx
    ├── data/                # Static data & content
    ├── hooks/               # Custom React hooks (scroll-reveal, etc.)
    └── styles/              # Global styles & CSS variables
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, JSX |
| Styling | CSS Modules, CSS Variables |
| Routing | React Router DOM |
| Animations | Intersection Observer API (custom scroll-reveal hook) |
| Deployment | Vercel |
| Version Control | Git, GitHub |

---

## ⚙️ Prerequisites

- Node.js v16+
- npm v8+

---

## 🚀 Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/Usha0070/Prompt-Craft.git
cd Prompt-Craft
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Run the app in development mode with hot reload |
| `npm run build` | Build the app for production into the `build` folder |
| `npm test` | Launch the test runner in interactive watch mode |

---

## ☁️ Deployment

This project is deployed on **Vercel** with automatic deployments on every push to `main`.

To deploy your own instance:

1. Fork this repository
2. Import it into [Vercel](https://vercel.com)
3. Set the production branch to `main`
4. Click **Deploy** — done!

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 👨‍💻 Author

**Md. Usha Khan**
GitHub: [@Usha0070](https://github.com/Usha0070)
Email: [mdushakhan007@gmail.com](mailto:mdushakhan007@gmail.com)
LinkedIn: [mdushakhan007](https://www.linkedin.com/in/mdushakhan007/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
