# Invitación de Boda — Steven & Pame

Sitio web estático para la invitación de boda de **Steven & Pame**, celebración el **29 de agosto de 2026**.

## Estructura

```
invitacion-boda/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── portada.jpg        ← Reemplazar con foto real
│   │   └── foto-pareja.jpg    ← Reemplazar con foto real
│   └── audio/
│       └── nuestra-cancion.mp3 ← Reemplazar con canción real
└── README.md
```

## Datos provisionales a reemplazar

Todos los datos editables están centralizados en `js/main.js` al inicio del archivo, en la sección **CONFIG**.

| Variable | Ubicación | Descripción |
|---|---|---|
| `GOOGLE_FORM_URL` | `js/main.js` | URL del Google Form de confirmación |
| `REGALO_URL` | `js/main.js` | URL de lista de regalos |
| `CEREMONIA_MAPS` | `js/main.js` | Enlace Google Maps iglesia |
| `COCTEL_MAPS` | `js/main.js` | Enlace Google Maps cóctel |
| `RECEPCION_MAPS` | `js/main.js` | Enlace Google Maps recepción |
| `INSPIRACION_URL` | `js/main.js` | URL de Pinterest dress code |
| `FECHA_LIMITE_CONFIRMACION` | `js/main.js` | Fecha límite para confirmar asistencia |

## Datos de lugares (editar en `js/main.js`)

- **Ceremonia:** Iglesia por confirmar, hora por confirmar
- **Cóctel:** Lugar por confirmar
- **Recepción:** Lugar por confirmar

## Imágenes

Colocar las fotos reales en `assets/images/`:
- `portada.jpg` — Foto vertical de portada
- `foto-pareja.jpg` — Foto vertical de la pareja

## Audio

Colocar el archivo MP3 en `assets/audio/nuestra-cancion.mp3`.

## Despliegue en GitHub Pages

1. Subir todos los archivos al repositorio.
2. Activar GitHub Pages desde la rama principal.
3. No se requiere ningún proceso de compilación ni backend.
