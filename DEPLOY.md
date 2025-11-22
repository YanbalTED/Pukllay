# Instrucciones para Desplegar Pukllay en Vercel

## Prerrequisitos

1. **Instalar Git** (si no lo tienes):
   - Descarga desde: https://git-scm.com/download/win
   - O instala GitHub Desktop: https://desktop.github.com/

2. **Tener cuenta en GitHub y Vercel**

## Pasos para Push a GitHub

### Opción 1: Usando Git en Terminal

```bash
# 1. Navegar al directorio del proyecto
cd "D:\Users\mfarfan\OneDrive - UNIQUEYANBAL\Escritorio\Prisma AI\pukllay"

# 2. Inicializar repositorio Git (si no está inicializado)
git init

# 3. Agregar todos los archivos
git add .

# 4. Hacer commit inicial
git commit -m "Initial commit: Pukllay marketplace"

# 5. Agregar el remote de GitHub
git remote add origin https://github.com/YanbalTED/Pukllay.git

# 6. Cambiar a branch main (si es necesario)
git branch -M main

# 7. Hacer push al repositorio
git push -u origin main
```

### Opción 2: Usando GitHub Desktop

1. Abre GitHub Desktop
2. File → Add Local Repository
3. Selecciona la carpeta `pukllay`
4. Si no está inicializado, GitHub Desktop te preguntará si quieres crear un repositorio
5. Escribe un mensaje de commit: "Initial commit: Pukllay marketplace"
6. Click en "Commit to main"
7. Click en "Publish repository"
8. Selecciona el repositorio: `YanbalTED/Pukllay`
9. Click en "Publish Repository"

## Configurar Vercel

### Opción 1: Desde Vercel Dashboard

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Click en "Add New Project"
3. Importa el repositorio `YanbalTED/Pukllay` desde GitHub
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Configuración automática:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (dejar por defecto)
   - **Build Command**: `npm run build` (automático)
   - **Output Directory**: `.next` (automático)
   - **Install Command**: `npm install` (automático)
6. Click en "Deploy"
7. ¡Listo! Tu sitio estará disponible en unos minutos

### Opción 2: Desde CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# En el directorio del proyecto
cd "D:\Users\mfarfan\OneDrive - UNIQUEYANBAL\Escritorio\Prisma AI\pukllay"

# Login en Vercel
vercel login

# Deploy
vercel

# Para producción
vercel --prod
```

## Variables de Entorno (si las necesitas después)

En Vercel Dashboard:
1. Ve a tu proyecto
2. Settings → Environment Variables
3. Agrega las variables necesarias (cuando conectes con APIs)

## Configuración Automática

Vercel detectará automáticamente:
- ✅ Next.js 14
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Build commands

## Notas Importantes

- El repositorio en GitHub está vacío, así que el primer push creará todo
- Vercel se conectará automáticamente al repositorio
- Cada push a `main` desplegará automáticamente
- Los previews se crean para cada Pull Request

## Troubleshooting

### Si Git no está instalado:
- Instala Git desde: https://git-scm.com/download/win
- O usa GitHub Desktop (más fácil para principiantes)

### Si hay problemas con el push:
```bash
# Forzar push (solo si es necesario y estás seguro)
git push -u origin main --force
```

### Si Vercel no detecta Next.js:
- Verifica que `package.json` tenga `"next"` en dependencies
- Verifica que `next.config.js` exista
- Revisa los logs de build en Vercel

