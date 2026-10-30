# BambiBlush 🎀

Copia del código de BambiBlush para conservar en GitHub. Este repositorio no publica ni modifica la página existente.

## Contenido

- Página de inicio y catálogo de personalizaciones de YouTube.
- Cuatro colecciones: Napolitano, Cielito de algodón, Star Go! y Pixel Ribbon Diary.
- Miniaturas, galerías, estilos, logotipo y archivos ZIP originales.
- Código de comunidad, cuenta y suscripción; esquema y migraciones de base de datos.

Los ZIP mantienen su contenido original. Los botones contienen estos nombres de descarga:

1. YouTube Napolitano - by BambiBlush.zip
2. YouTube Cielito de algodón - by BambiBlush.zip
3. YouTube Star Go! - by BambiBlush.zip
4. YouTube Pixel Ribbon Diary - by BambiBlush.zip

## Qué conserva esta copia

Es código fuente, no un volcado de datos: no incluye usuarios, correos de suscriptores, contraseñas, tokens, historial Git, dependencias instaladas ni archivos de entorno locales. La identidad de publicación del sitio original se retiró de `.openai/hosting.json` para evitar despliegues accidentales sobre la página existente.

La autenticación de cuenta depende de ChatGPT Sites y la comunidad utiliza una base de datos D1. Guardar esta copia en GitHub no configura esas funciones en otro alojamiento ni publica el sitio mediante GitHub Pages.

## Estructura principal

- `site.html`: inicio.
- `catalog.html`: catálogo.
- `product.html`, `cielito.html`, `star-go.html`, `pixel-ribbon.html`: colecciones.
- `public/`: estilos, scripts, imágenes y ZIP de descarga.
- `app/`, `lib/`, `worker/`: rutas y lógica del servidor.
- `drizzle/`: esquema y migraciones.
- `docs/README-Sites-original.md`: documentación técnica del proyecto original.

## Subir a tu repositorio

Repositorio de destino: https://github.com/bambiblushkaw-rgb/Bambiblush

Si se sube manualmente por la web de GitHub, extrae el ZIP y sube los archivos y carpetas de esta copia; no subas únicamente el archivo ZIP. Para conservar todos los archivos, incluidos los de configuración que comienzan con punto, es preferible Git o GitHub Desktop.

Para Git, abre una terminal dentro de esta carpeta y ejecuta:

```bash
git init
git add .
git -c user.name="BambiBlush" -c user.email="bambiblushkaw-rgb@users.noreply.github.com" commit -m "Guardar copia del código de BambiBlush"
git branch -M main
git remote add origin https://github.com/bambiblushkaw-rgb/Bambiblush.git
git push -u origin main
```

GitHub solicitará autenticación. No pegues credenciales dentro de estos archivos. Estos comandos corresponden a esta carpeta de copia, no a la carpeta original del sitio.

## Desarrollo

El proyecto utiliza Node.js (versión indicada en `package.json`), pnpm y Vinext. La documentación original describe las dependencias y la configuración del entorno. El funcionamiento completo de cuentas y suscripciones requiere el entorno y la base de datos correspondientes.

## Autoría

Diseño y colecciones: BambiBlush. Uso personal solamente. No copiar, revender ni redistribuir los temas sin autorización. Las licencias de dependencias y recursos de terceros se conservan en sus archivos respectivos.
