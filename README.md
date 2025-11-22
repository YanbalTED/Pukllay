# Pukllay - Marketplace de Juegos Peruanos

Pukllay (que significa "jugar" en quechua) es una plataforma B2B2C que conecta desarrolladores peruanos con jugadores locales, ofreciendo pagos locales (Yape, Plin) y contenido culturalmente relevante.

## 🎮 Características

- **Marketplace de Juegos**: Catálogo curado de juegos desarrollados en Perú
- **Pagos Locales**: Integración nativa con Yape y Plin
- **Diseño Limpio**: Inspirado en App Store con toques andinos sutiles
- **Responsive**: Mobile-first design
- **Performance**: Optimizado para velocidad

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
pukllay/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Homepage
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── layout/           # Navbar, Footer
│   ├── home/             # Componentes de homepage
│   └── games/            # Componentes de juegos
├── types/                 # TypeScript types
└── public/                # Assets estáticos
```

## 🎨 Diseño

El diseño combina:
- **Estilo App Store**: Limpio, minimalista, enfocado en contenido
- **Patrones Andinos**: Colores inspirados en textiles peruanos (terracota, verde, dorado)
- **Tipografía**: Inter (sistema)
- **Componentes**: Reutilizables y accesibles

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Estado**: Zustand
- **Formularios**: React Hook Form + Zod

## 📝 Próximos Pasos

- [ ] Página de detalle de juego
- [ ] Checkout con Yape/Plin
- [ ] Sistema de autenticación
- [ ] Dashboard de desarrolladores
- [ ] Sistema de reviews
- [ ] Búsqueda y filtros avanzados

## 📄 Licencia

Privado - Pukllay 2025

