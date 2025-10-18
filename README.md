# OWNDAYS Landing Page

A modern, responsive landing page for OWNDAYS eyewear store built with Next.js 15 and Tailwind CSS v4.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.14-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Components](#components)
- [Styling Approach](#styling-approach)
- [Build & Deployment](#build--deployment)
- [Performance](#performance)

## ✨ Features

### Core Features
- 🎨 **Modern UI/UX** - Clean, minimalist design with Japanese aesthetic
- 📱 **Fully Responsive** - Mobile-first approach with tablet and desktop breakpoints
- ⚡ **Performance Optimized** - Next.js Image optimization and Link components
- 🎭 **Smooth Animations** - CSS transitions and hover effects
- 🔍 **Interactive Search** - Modal-based product search functionality
- 🍔 **Mobile Navigation** - Hamburger menu with smooth sidebar animations

### Component Features
- **Navigation Bar** with search modal and responsive hamburger menu
- **Product Cards** with hover effects and favorite functionality
- **Button Components** with custom styling and animations
- **Footer** with organized link sections
- **Landing Sections** for collections and featured content

## 🛠 Tech Stack

### Frontend Framework
- **Next.js 15.5.4** - React framework with App Router
- **React 19.2.0** - Latest React with concurrent features
- **React DOM 19.2.0** - DOM renderer for React

### Styling & UI
- **Tailwind CSS 4.1.14** - Utility-first CSS framework (Latest v4)
- **PostCSS** - CSS post-processor for Tailwind
- **Custom CSS Variables** - Theme configuration with CSS custom properties
- **Google Fonts** - Outfit and Noto Sans JP fonts

### Development Tools
- **ESLint** - Code linting and formatting
- **Autoprefixer** - CSS vendor prefixing
- **React Icons** - Icon library for UI components

### Design System
- **Custom Color Palette** - OWNDAYS brand colors (Red: #B8181E)
- **Typography System** - Outfit primary, Noto Sans JP for Japanese text
- **Responsive Grid** - CSS Grid and Flexbox layouts
- **Animation Library** - CSS transitions with Tailwind utilities

## 📁 Project Structure

```
owndays-landing-page/
├── components/
│   ├── button/
│   │   ├── ButtonBox.js          # Custom button with arrow icon
│   │   └── ButtonPrimary.js      # Primary action button
│   ├── card/
│   │   └── ProductCard.js        # Product display card with favorites
│   ├── landing/
│   │   └── Collection.js         # Collection showcase section
│   └── layout/
│       ├── Footer.js             # Site footer with links
│       └── Navbar.js             # Navigation with search modal
├── pages/
│   ├── _app.js                   # App configuration & global styles
│   ├── index.js                  # Homepage
│   └── api/
│       └── hello.js              # API route example
├── public/                       # Static assets (images, icons)
├── styles/
│   ├── globals.css               # Global CSS & Tailwind config
│   └── Home.module.css           # Module-specific styles
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
└── package.json                  # Dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/worawit-bw/owndays-frontend-test.git
   cd owndays-landing-page
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install
   ```

3. **Start development server**
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev
yarn dev

# Production build
npm run build
yarn build

# Start production server
npm run start
yarn start

# ESLint code linting
npm run lint
yarn lint
```

### Environment Setup

The project uses Next.js 15 with the following key configurations:

**Next.js Config** (`next.config.js`):
```javascript
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
}
```

**Tailwind Config** (`tailwind.config.js`):
```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#B8181E',
        // Custom theme colors
      },
    },
  },
  plugins: [],
}
```

## 🧩 Components

### Layout Components

#### Navbar (`components/layout/Navbar.js`)
- **Features**: Responsive navigation, search modal, mobile hamburger menu
- **State Management**: React hooks for modal and sidebar state
- **Animations**: Smooth transitions for mobile sidebar with staggered animations
- **Accessibility**: Keyboard navigation support and proper ARIA labels

```javascript
// Key features:
- Search modal with backdrop blur
- Mobile-responsive hamburger menu
- Smooth sidebar animations with delays
- Next.js Link integration for performance
```

#### Footer (`components/layout/Footer.js`)
- **Structure**: 4-column grid layout with company info and links
- **Responsive**: Stacked layout on mobile, grid on desktop
- **Links**: All internal links use Next.js Link component

### UI Components

#### ProductCard (`components/card/ProductCard.js`)
- **Dynamic Styling**: Inline styles for dynamic background colors
- **Image Optimization**: Next.js Image component with proper sizing
- **Interactive Elements**: Hover effects on favorite button with SVG fill animation
- **Props**: Configurable product data, colors, and favorite status

#### Button Components
- **ButtonPrimary**: Standard action button with consistent styling
- **ButtonBox**: Custom button with arrow icon and hover shadow effects

### Landing Sections

#### Collection (`components/landing/Collection.js`)
- **Purpose**: Showcase product collections and featured items
- **Layout**: Flexible grid system for different content types

## 🎨 Styling Approach

### Tailwind CSS v4 Configuration

The project uses Tailwind CSS v4 with custom theme configuration in `globals.css`:

```css
@theme {
  --color-red: #B8181E;
  --color-yellow: #F2DC00;
  --font-mizolet: mizolet, sans-serif;
  --tracking-nav: 8px;
  --container: {
    center: true,
    padding: '2rem',
  }
}
```

### Design System

**Colors**:
- Primary Red: `#B8181E` (OWNDAYS brand color)
- Accent Yellow: `#F2DC00`
- Neutral Grays: Tailwind default palette

**Typography**:
- Primary: `Outfit` (Google Fonts)
- Japanese: `Noto Sans JP` (Google Fonts)
- Fallback: System font stack

**Spacing & Layout**:
- Max container width: `1440px`
- Responsive padding: `2rem` default
- Grid system: CSS Grid and Flexbox

### Animation Strategy

1. **CSS Transitions**: Smooth hover effects with `transition-all duration-200`
2. **Transform Animations**: Scale, translate, and opacity changes
3. **Staggered Animations**: Sequential delays for sidebar menu items
4. **Hover States**: Interactive feedback on buttons and links

## 🏗 Build & Deployment

### Production Build

```bash
# Create optimized production build
npm run build
yarn build

# Start production server
npm run start
yarn start
```

### Build Optimizations

- **Image Optimization**: Automatic WebP conversion and responsive images
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind CSS purging of unused styles
- **Bundle Analysis**: Built-in Next.js bundle analyzer

### Deployment Options

**Vercel (Recommended)**:
```bash
# Deploy to Vercel
npx vercel --prod
```

**Netlify**:
```bash
# Build command
npm run build

# Publish directory
.next
```

**Docker**:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## ⚡ Performance

### Core Web Vitals Optimizations

1. **Largest Contentful Paint (LCP)**
   - Next.js Image optimization with priority loading
   - Font preloading with `font-display: swap`

2. **First Input Delay (FID)**
   - React 19 concurrent features
   - Minimal JavaScript on initial load

3. **Cumulative Layout Shift (CLS)**
   - Proper image dimensions and aspect ratios
   - CSS Grid for stable layouts

### Performance Features

- **Static Generation**: Pre-built HTML for faster loading
- **Image Optimization**: Automatic format selection and resizing
- **Font Optimization**: Google Fonts with optimal loading strategy
- **CSS Optimization**: Tailwind CSS purging removes unused styles
- **Link Prefetching**: Next.js Link component preloads routes

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-feature`
3. **Make your changes** following the existing code style
4. **Test thoroughly** on different screen sizes
5. **Commit your changes**: `git commit -m 'Add new feature'`
6. **Push to the branch**: `git push origin feature/new-feature`
7. **Open a Pull Request**

### Code Standards

- **ESLint**: Follow the configured linting rules
- **Component Structure**: Use functional components with hooks
- **Styling**: Prefer Tailwind utilities over custom CSS
- **Performance**: Always use Next.js Link for internal navigation
- **Accessibility**: Include proper ARIA labels and semantic HTML

## 📄 License

This project is private and proprietary to OWNDAYS Co., Ltd.

## 📞 Support

For questions or issues, please contact the development team or create an issue in the repository.

---

**Built with ❤️ by the OWNDAYS Frontend Team**