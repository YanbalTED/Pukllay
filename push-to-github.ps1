# Script PowerShell para hacer push a GitHub
# Ejecutar desde PowerShell: .\push-to-github.ps1

Write-Host "Iniciando push a GitHub..." -ForegroundColor Green

# Verificar si git esta instalado
try {
    $gitVersion = git --version
    Write-Host "Git encontrado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git no esta instalado. Por favor instala Git primero." -ForegroundColor Red
    Write-Host "Descarga desde: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Cambiar al directorio del proyecto
$projectPath = $PSScriptRoot
Set-Location $projectPath
Write-Host "Directorio: $projectPath" -ForegroundColor Cyan

# Verificar si ya es un repositorio git
if (Test-Path ".git") {
    Write-Host "Repositorio Git ya inicializado" -ForegroundColor Green
} else {
    Write-Host "Inicializando repositorio Git..." -ForegroundColor Yellow
    git init
}

# Agregar todos los archivos
Write-Host "Agregando archivos..." -ForegroundColor Yellow
git add .

# Verificar si hay cambios para commit
$status = git status --porcelain
if ($status) {
    Write-Host "Haciendo commit..." -ForegroundColor Yellow
    git commit -m "Initial commit: Pukllay marketplace - Next.js app with Andean design"
} else {
    Write-Host "No hay cambios para commitear" -ForegroundColor Cyan
}

# Verificar si el remote ya existe
$remoteCheck = git remote get-url origin 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "Remote 'origin' ya configurado" -ForegroundColor Green
} else {
    Write-Host "Agregando remote de GitHub..." -ForegroundColor Yellow
    git remote add origin https://github.com/YanbalTED/Pukllay.git
}

# Cambiar a branch main
Write-Host "Configurando branch main..." -ForegroundColor Yellow
git branch -M main

# Hacer push
Write-Host "Haciendo push a GitHub..." -ForegroundColor Yellow
Write-Host "NOTA: Puede que necesites autenticarte con GitHub" -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Push exitoso!" -ForegroundColor Green
    Write-Host "Tu codigo esta en GitHub: https://github.com/YanbalTED/Pukllay" -ForegroundColor Green
    Write-Host "Ahora puedes conectar el repositorio en Vercel para deploy automatico" -ForegroundColor Cyan
} else {
    Write-Host "Error al hacer push. Verifica:" -ForegroundColor Red
    Write-Host "  1. Que tengas acceso al repositorio" -ForegroundColor Yellow
    Write-Host "  2. Que estes autenticado en GitHub" -ForegroundColor Yellow
    Write-Host "  3. Que el repositorio exista en GitHub" -ForegroundColor Yellow
}
