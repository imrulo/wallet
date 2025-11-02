# 📋 Instrucciones Rápidas para GitHub y Vercel

## Paso 1: Inicializar Git y Hacer Commit

```bash
cd wallet-charity-landing

# Si git no está inicializado
git init

# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Initial commit: Premium domain landing page for Wallet.charity"
```

## Paso 2: Crear Repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repositorio: `wallet-charity-landing` (o el que prefieras)
3. **NO** marques "Add a README file" (ya tenemos uno)
4. **NO** marques "Add .gitignore" (ya tenemos uno)
5. Haz clic en "Create repository"

## Paso 3: Conectar y Subir Código

```bash
# Conectar con GitHub (reemplaza TU_USUARIO y TU_REPO)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# Cambiar a branch main
git branch -M main

# Subir código
git push -u origin main
```

## Paso 4: Deploy en Vercel

1. **Ve a Vercel**: [vercel.com/new](https://vercel.com/new)

2. **Inicia sesión con GitHub** (si no lo has hecho)

3. **Importa el proyecto**:
   - Selecciona el repositorio que acabas de crear
   - Vercel detectará automáticamente Next.js

4. **Configuración del proyecto**:
   - Framework Preset: **Next.js** (auto)
   - Root Directory: `./` (dejar por defecto)
   - Build Command: `npm run build` (dejar por defecto)
   - Output Directory: `.next` (dejar por defecto)

5. **Variables de Entorno**:
   ```
   DOMAIN_NAME=Wallet.charity
   ```
   ⚠️ **IMPORTANTE**: 
   - **NO** agregues `NEXT_PUBLIC_BASE_URL` todavía
   - Haz el primer deploy
   - Después del deploy, Vercel te dará la URL de tu proyecto
   - Ve a Settings → Environment Variables
   - Agrega `NEXT_PUBLIC_BASE_URL` con la URL real que Vercel te proporcionó
   - Haz un nuevo deploy para que los OG images funcionen correctamente

6. **Haz clic en "Deploy"**

7. **Espera 2-3 minutos** mientras se construye y despliega

8. **¡Listo!** Tu sitio estará en vivo en la URL que Vercel te proporciona

## Post-Deployment

1. **Verifica el sitio** en la URL de Vercel
2. **Actualiza variables de entorno** con la URL real
3. **Haz redeploy** para aplicar cambios en metadata y OG images
4. **Verifica OG images** visitando `https://TU_URL.vercel.app/opengraph-image`

## Problemas Comunes

### "Build failed"
- Verifica que todas las dependencias estén en `package.json`
- Revisa los logs de build en Vercel Dashboard

### "OG Images no aparecen"
- Verifica que `NEXT_PUBLIC_BASE_URL` esté configurada correctamente
- Espera unos minutos después del deploy
- Prueba visitando directamente `/opengraph-image`

### "Variables de entorno no funcionan"
- Asegúrate de hacer redeploy después de agregar variables
- Verifica que los nombres sean exactos (case-sensitive)

## ✅ Todo Listo!

Tu landing page está preparada para deployment. Solo sigue estos pasos y estarás en producción en minutos.

Para más detalles, consulta `DEPLOYMENT.md`.

