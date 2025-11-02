#!/bin/bash
echo "🚀 Configurando Git para deployment..."
echo ""

# Inicializar git si no está inicializado
if [ ! -d .git ]; then
  echo "Inicializando repositorio Git..."
  git init
  echo "✅ Git inicializado"
fi

# Agregar todos los archivos
echo "Agregando archivos al staging..."
git add .
echo "✅ Archivos agregados"

# Verificar estado
echo ""
echo "📋 Estado actual del repositorio:"
git status --short

echo ""
echo "✅ Listo para commit!"
echo ""
echo "Próximos pasos:"
echo "1. git commit -m 'Initial commit: Premium domain landing page for Wallet.charity'"
echo "2. Crear repositorio en GitHub"
echo "3. git remote add origin https://github.com/TU_USUARIO/TU_REPO.git"
echo "4. git push -u origin main"
echo ""
echo "Luego sigue las instrucciones en DEPLOYMENT.md para Vercel"
