# 🌟 Event Venue Web Application - Frontend Showcase Project

Welcome to the repository for this **Premium Event Venue & Catering Website**, a modern, high-performance web application built as a personal portfolio project. This project simulates a real-world wedding and events venue (named "Mangalya Mangal Karyalay" in the UI) to demonstrate advanced frontend development skills, including fluid animations, responsive design, and performance optimization.

While this is a showcase project and not an official business website, it features everything you would expect from a top-tier establishment: an immersive gallery, beautiful parallax effects, dynamic layout structures, and seamless booking inquiry forms.

## 🚀 Technologies Used

This project is built using a modern React tech stack to ensure high performance, maintainability, and elegant UI/UX:

- **Frontend Framework**: [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/) for ultra-fast development and optimized production builds
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Components/UI**: [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/) for accessible, unstyled components
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid, dynamic page transitions and interactions
- **Routing**: [React Router](https://reactrouter.com/) (v6) with Code Splitting configurations
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: `react-hook-form` + `zod` validation schema

## ✨ Key Features

- **Beautiful Animations & Parallax Effects**: Soft loading screens, custom cursors, smooth scroll reveals, and responsive hover interactions.
- **Route-Based Code Splitting**: Optimized routing using `React.lazy()` and `<Suspense>` to keep initial JS bundles small and fast.
- **Lazy Loaded Assets**: Images are efficiently deferred via `loading="lazy"` offscreen to maximize rendering performance.
- **Responsive Design**: Works flawlessly across mobile, tablet, and desktop views.
- **Dynamic Lightbox Gallery**: Custom image gallery with categories to view photos of the venue, catering, and decorations.
- **Interactive Forms**: User-friendly inquiry and booking request forms with seamless validation.

## 📁 Project Structure

```text
dreamscape-events-site/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components (shadcn/ui, Layouts, etc.)
│   │   ├── home/           # Homepage specific components (Hero, Highlights)
│   │   ├── gallery/        # Gallery grid and Lightbox components
│   │   └── ui/             # Standardized generic UI building blocks
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Main Route Pages (Index, About, Services, Gallery, Contact, NotFound)
│   ├── App.tsx             # Root Application layout and context providers
│   ├── index.css           # Global custom CSS and Tailwind layers
│   └── main.tsx            # React application entry point
├── package.json            # Project dependencies and script tasks
├── tailwind.config.ts      # Tailwind styling configuration
├── vite.config.ts          # Vite build configuration settings
└── eslint.config.js        # ESLint code linting rules
```

## 🛠️ Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or newer recommended)
- [npm](https://www.npmjs.com/) (or yarn/bun)

### Installation

1. **Clone the repository** (if hosted via Git) or navigate to the project root directory:
   ```bash
   cd dreamscape-events-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The application will boot up at `http://localhost:8080` (or another available port).*

### Building for Production

To create an optimized production build, run:
```bash
npm run build
```
This command compiles the TypeScript code and bundles styles + assets into the `dist/` directory, ready to be deployed to your hosting provider.

## 🎨 UI/UX Philosophy

The interface follows a **"Premium and Grand"** design language, using a curated gold and deep palette (visible through `shadow-elegant` and `shadow-gold` classes). Interactive elements and micro-animations via Framer Motion encourage engagement while maintaining the trustworthy legacy of a 20+ year-old establishment.
