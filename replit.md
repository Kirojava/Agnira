# Agnira MUN 2025 - Conference Website

## Overview

This is a modern, single-page React application for the Agnira MUN x EPS MUN 2025 conference. The website serves as the primary digital presence for a Model United Nations conference scheduled for November 6-7, 2025, at East Point School in Delhi.

The site features a sophisticated dark theme with maroon and golden color scheme, custom Matrix-style background animation, and smooth scrolling navigation across multiple sections including event information, committee details, leadership messages, venue information, registration details, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Component-based architecture with modular, reusable UI components

**Styling Strategy**
- Tailwind CSS for utility-first styling and responsive design
- Custom CSS for complex animations (Matrix rain effect, scrollbar styling)
- Design system based on maroon (#8B0000, #A52A2A) and golden (#FFD700, #FFA500) color palette
- Custom typography using Google Fonts: Playfair Display for headings, Inter for body text

**Component Structure**
- Single-page application with section-based navigation
- Core components: Hero, About, Committees, Messages, Venue, Registration, Contact
- Utility components: Navigation (with mobile hamburger menu), MatrixRain (canvas-based animation), CommitteeLogos (SVG graphics)
- Active section tracking with scroll-based state management

**State Management**
- Local component state using React hooks (useState, useEffect)
- No external state management library required due to simple application scope
- Scroll position tracking for active navigation highlighting

**Responsive Design**
- Mobile-first approach with breakpoints for tablet and desktop
- Tailwind's responsive utilities (sm:, md:, lg:) for adaptive layouts
- Hamburger menu for mobile navigation

### Performance & Optimization

**Code Quality**
- ESLint configuration with TypeScript support
- Strict TypeScript compiler options for type safety
- React Hooks linting rules for best practices

**Build Optimization**
- Vite's optimized bundling and tree-shaking
- Lucide React icons explicitly excluded from dependency optimization
- Production builds with minification and code splitting

**Development Experience**
- Hot Module Replacement (HMR) configured for Replit environment
- Custom server configuration (host: 0.0.0.0, port: 5000)
- HMR client port set to 443 for Replit compatibility

## External Dependencies

### Core Libraries
- **React 18.3.1** - UI library for component-based development
- **React DOM 18.3.1** - React renderer for web applications
- **Lucide React 0.344.0** - Icon library for UI elements

### Backend Services
- **Supabase Client 2.57.4** - Database and authentication service (currently integrated but not actively used in visible components)

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS transformation tool
- **Autoprefixer 10.4.18** - Automatic vendor prefix handling

### Development Tools
- **TypeScript 5.5.3** - Static type checking
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting rules
- **Vite 5.4.2** - Build tool and development server
- **Vite Plugin React 4.3.1** - React integration for Vite

### Code Quality
- **ESLint 9.9.1** - JavaScript/TypeScript linting
- **ESLint Plugin React Hooks 5.1.0-rc.0** - React Hooks-specific linting
- **ESLint Plugin React Refresh 0.4.11** - Fast Refresh support validation

### External Fonts
- **Google Fonts** - Playfair Display and Inter font families loaded via CDN