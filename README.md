# Tecsup Bus - Sistema de Transporte Universitario

Este proyecto ha sido migrado de **Vite + React** a **Next.js 16** con App Router.

## 🚀 Características

- ✅ Next.js 16 con App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Shadcn/ui Components
- ✅ Framer Motion para animaciones
- ✅ React Query para gestión de estado del servidor
- ✅ Sistema de autenticación con Context API

## 📦 Instalación

```bash
# Instalar dependencias
bun install

# o con npm
npm install

# o con yarn
yarn install
```

## 🛠️ Desarrollo

```bash
# Iniciar servidor de desarrollo
bun run dev

# o con npm
npm run dev

# o con yarn
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🏗️ Build

```bash
# Crear build de producción
bun run build

# Iniciar servidor de producción
bun run start
```

## 📁 Estructura del Proyecto

```
tecsup-bus/
├── app/                      # Directorio App Router de Next.js
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   ├── providers.tsx        # Providers de la aplicación
│   ├── globals.css          # Estilos globales
│   ├── login/               # Página de login
│   ├── dashboard/           # Dashboard
│   ├── routes/              # Explorador de rutas
│   └── not-found.tsx        # Página 404
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ui/             # Componentes de UI (Shadcn)
│   │   ├── layout/         # Componentes de layout (Navbar, Footer)
│   │   ├── routes/         # Componentes de rutas
│   │   └── dashboard/      # Componentes del dashboard
│   ├── context/            # Contextos de React
│   ├── data/               # Datos y configuración
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilidades
│   └── types/              # Tipos de TypeScript
├── public/                 # Archivos estáticos
└── next.config.js         # Configuración de Next.js
```

## 🔄 Cambios Principales en la Migración

### De Vite a Next.js

1. **Routing**: 
   - ❌ `react-router-dom` 
   - ✅ Next.js App Router

2. **Navegación**:
   - ❌ `<Link to="/path">` 
   - ✅ `<Link href="/path">`
   - ❌ `useNavigate()` 
   - ✅ `useRouter()` from `next/navigation`

3. **Componentes del Cliente**:
   - Todos los componentes interactivos necesitan `'use client'` en la parte superior

4. **Estructura de Archivos**:
   - ❌ `src/pages/` 
   - ✅ `app/` con archivos `page.tsx`
   - ❌ `index.html` 
   - ✅ `app/layout.tsx`

5. **Scripts**:
   - ❌ `vite dev` 
   - ✅ `next dev`
   - ❌ `vite build` 
   - ✅ `next build`

## 🔑 Credenciales de Demo

Para probar la aplicación, usa las siguientes credenciales:

- **Admin**: 
  - Email: `admin@tecsup.edu.pe`
  - Password: `admin123`

- **Driver**: 
  - Email: `driver@tecsup.edu.pe`
  - Password: `driver123`

- **Passenger**: 
  - Email: `passenger@tecsup.edu.pe`
  - Password: `passenger123`

## 📚 Tecnologías Utilizadas

- [Next.js 16](https://nextjs.org/) - Framework de React
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Shadcn/ui](https://ui.shadcn.com/) - Componentes de UI
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [React Query](https://tanstack.com/query) - Gestión de estado del servidor
- [Lucide React](https://lucide.dev/) - Iconos

## 📝 Notas de Migración

- Los archivos originales de Vite se movieron a `.backup`:
  - `index.html.backup`
  - `vite.config.ts.backup`
  - `src/main.tsx.backup`
  - `src/App.tsx.backup`
  - `src/pages.backup/`
  - `tsconfig.json.backup`

- Se mantienen todos los componentes UI de Shadcn en `src/components/ui/`
- El contexto de autenticación se actualizó para funcionar con Next.js
- Los componentes de layout (Navbar, Footer) se adaptaron para usar Next.js Link

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.

## 📄 Licencia

© 2024 Penguins on Road for Tecsup. Todos los derechos reservados.
