# 🚀 Guía de Deployment en Vercel

## Paso 1: Inicializar Git (si aún no está inicializado)

```bash
cd wallet-charity-landing
git init
git add .
git commit -m "Initial commit: Premium domain landing page for Wallet.charity"
```

## Paso 2: Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
   - Nombre sugerido: `wallet-charity-landing` o `wallet-charity-domain`
   - **No** inicialices con README, .gitignore o licencia (ya los tenemos)

2. Conecta tu repositorio local con GitHub:

```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

## Paso 3: Deploy en Vercel

### Opción A: Desde el Dashboard de Vercel (Recomendado)

1. **Inicia sesión en Vercel**
   - Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta GitHub

2. **Importa el proyecto**
   - Haz clic en "Add New Project"
   - Selecciona el repositorio que acabas de crear
   - Vercel detectará automáticamente Next.js

3. **Configura las Variables de Entorno**
   - En la sección "Environment Variables", agrega:
     ```
     NEXT_PUBLIC_BASE_URL=https://TU_PROYECTO.vercel.app
     DOMAIN_NAME=Wallet.charity
     ```
   - ⚠️ **IMPORTANTE**: Después del primer deploy, Vercel te dará la URL. Vuelve a Settings → Environment Variables y actualiza `NEXT_PUBLIC_BASE_URL` con la URL real, luego haz un nuevo deploy.

4. **Configuración del Proyecto**
   - Framework Preset: **Next.js** (auto-detectado)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

5. **Deploy**
   - Haz clic en "Deploy"
   - Espera a que termine el proceso (2-3 minutos)

6. **Post-Deployment**
   - Una vez completado, Vercel te dará una URL tipo: `https://wallet-charity-landing-xxxxx.vercel.app`
   - Ve a Settings → Environment Variables
   - Actualiza `NEXT_PUBLIC_BASE_URL` con la URL real de tu deployment
   - Haz un nuevo deploy para aplicar los cambios en OG images y metadata

### Opción B: Usando Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desde el directorio del proyecto
cd wallet-charity-landing

# Deploy
vercel

# Seguir las instrucciones en pantalla
# Cuando pregunte por variables de entorno, agrega:
# NEXT_PUBLIC_BASE_URL (se configurará automáticamente)
# DOMAIN_NAME=Wallet.charity
```

## Paso 4: Verificar el Deployment

1. Visita tu URL de Vercel
2. Verifica que todas las secciones se vean correctamente
3. Prueba el modo oscuro/claro
4. Verifica los enlaces de WhatsApp y Email
5. Prueba el formulario de contacto
6. Verifica que las imágenes OG se generen correctamente

## Paso 5: Domain Personalizado (Opcional)

Si quieres usar un dominio personalizado:

1. Ve a Project Settings → Domains
2. Agrega tu dominio personalizado
3. Sigue las instrucciones de DNS que Vercel te proporciona
4. Actualiza `NEXT_PUBLIC_BASE_URL` con tu dominio personalizado

## Troubleshooting

### Error: "Environment variable not found"
- Verifica que las variables estén configuradas en Vercel Dashboard
- Asegúrate de hacer redeploy después de agregar variables

### OG Images no aparecen
- Verifica que `NEXT_PUBLIC_BASE_URL` esté configurada correctamente
- Espera unos minutos para que se genere la imagen
- Verifica en [ogp.me](https://www.opengraph.xyz/) cómo se ve tu página

### Build fails
- Verifica que todas las dependencias estén en `package.json`
- Revisa los logs de build en Vercel Dashboard

## URLs Importantes

Después del deployment, tendrás acceso a:
- **Production URL**: `https://TU_PROYECTO.vercel.app`
- **OG Image**: `https://TU_PROYECTO.vercel.app/opengraph-image`
- **Sitemap**: `https://TU_PROYECTO.vercel.app/sitemap.xml`

## Actualizaciones Futuras

Para actualizar el sitio después de cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

Vercel detectará automáticamente los cambios y hará un nuevo deployment.

---

**¡Listo!** Tu landing page está en producción. 🎉

