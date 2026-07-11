/**
 * ================================================================
 * INVITACIÓN DE BODA · Steven & Pame
 * main.js — Lógica principal
 * ================================================================
 *
 * ╔══════════════════════════════════════════════╗
 * ║          SECCIÓN DE CONFIGURACIÓN            ║
 * ║   Edita SOLO esta sección para personalizar  ║
 * ╚══════════════════════════════════════════════╝
 */

// ── DATOS DE LOS NOVIOS ──────────────────────────────────────────
const CONFIG = {

    /* NOMBRES */
    novio: "Steeven",
    novia: "Pame",

    /* FECHA DE LA BODA (ISO 8601, hora local) */
    fechaBoda: "2026-08-29T18:00:00",

    /* FECHA LÍMITE PARA CONFIRMAR ASISTENCIA — editar también en index.html id="fecha-limite-display" */
    fechaLimiteConfirmacion: "15 DE AGOSTO DE 2026",

    /* ── PADRES ─────────────────────────────────────────────────── */
    /* EDITAR: Padres del novio */
    padresNovio: "Luis Arias &amp; Wendy Tomlá",
    /* EDITAR: Padres de la novia */
    padresNovia: "Ricardo Díaz &amp; Bertha Murilla",

    /* ── ITINERARIO ─────────────────────────────────────────────── */
    ceremonia: {
        /* EDITAR: Hora de la ceremonia */
        hora: "17:00 hrs.",
        /* EDITAR: Nombre de la iglesia o lugar de la ceremonia */
        lugar: "Villa del Rey",
        /* EDITAR: Enlace de Google Maps para la ceremonia */
        maps: "https://maps.app.goo.gl/d6eGiS7QQ8taetg69?g_st=iw",
    },
    recepcion: {
        /* EDITAR: Hora de la recepción */
        hora: "18:30 hrs.",
        /* EDITAR: Lugar de la recepción */
        lugar: "Villa del Rey",
        /* EDITAR: Enlace de Google Maps para la recepción */
        maps: "https://maps.app.goo.gl/d6eGiS7QQ8taetg69?g_st=iw",
    },

    /* ── REGALOS ─────────────────────────────────────────────────── */
    /* EDITAR: URL de la lista de regalos */
    regalosUrl: "REEMPLAZAR_CON_URL_LISTA_REGALOS",
    /* EDITAR: Nombre de la tienda de la mesa de regalos */
    mesaTienda: "Tienda por confirmar",
    /* EDITAR: Número o código de la mesa de regalos */
    mesaNumero: "No. por confirmar",

    /* ── DRESS CODE ─────────────────────────────────────────────── */
    /* EDITAR: URL de Pinterest u otra inspiración de vestimenta */
    inspiracionUrl: "REEMPLAZAR_CON_URL_INSPIRACION",

    /* ── FORMULARIO DE ASISTENCIA ───────────────────────────────── */
    /* EDITAR: URL del Google Form de confirmación de asistencia */
    googleFormUrl: "REEMPLAZAR_CON_URL_GOOGLE_FORM",

    /* ── AUDIO ───────────────────────────────────────────────────── */
    /* EDITAR: Ruta del archivo de audio */
    audioSrc: "./assets/audio/nuestra-cancion.mp3",
};

/* ================================================================
   INICIALIZACIÓN AL CARGAR EL DOM
   ================================================================ */
document.addEventListener("DOMContentLoaded", () => {
    aplicarConfiguracion();
    iniciarReproductor();
    iniciarCuentaRegresiva();
    iniciarFormularioAsistencia();
    iniciarAnimacionesScroll();
});

/* ================================================================
   APLICAR CONFIGURACIÓN EN EL DOM
   ================================================================ */
function aplicarConfiguracion() {
    // Padres
    const elPadreNovio = document.getElementById("padre-novio");
    const elPadreNovia = document.getElementById("padre-novia");
    if (elPadreNovio) elPadreNovio.innerHTML = CONFIG.padresNovio;
    if (elPadreNovia) elPadreNovia.innerHTML = CONFIG.padresNovia;

    // Horarios y lugares — tarjeta de invitación
    const elHoraTarjeta = document.getElementById("tarjeta-hora-texto");
    const elLugarTarjeta = document.getElementById("tarjeta-lugar-texto");
    if (elHoraTarjeta) elHoraTarjeta.textContent = CONFIG.ceremonia.hora;
    if (elLugarTarjeta) elLugarTarjeta.textContent = CONFIG.ceremonia.lugar;

    // Itinerario — horas
    const elHoraCeremonia = document.getElementById("hora-ceremonia");
    const elHoraCoctel = document.getElementById("hora-coctel");
    const elHoraRecepcion = document.getElementById("hora-recepcion");
    if (elHoraCeremonia) elHoraCeremonia.textContent = CONFIG.ceremonia.hora;
    if (elHoraCoctel) elHoraCoctel.textContent = CONFIG.coctel.hora;
    if (elHoraRecepcion) elHoraRecepcion.textContent = CONFIG.recepcion.hora;

    // Itinerario — lugares
    const elLugarCeremonia = document.getElementById("lugar-ceremonia");
    const elLugarCoctel = document.getElementById("lugar-coctel");
    const elLugarRecepcion = document.getElementById("lugar-recepcion");
    if (elLugarCeremonia) elLugarCeremonia.textContent = CONFIG.ceremonia.lugar;
    if (elLugarCoctel) elLugarCoctel.textContent = CONFIG.coctel.lugar;
    if (elLugarRecepcion) elLugarRecepcion.textContent = CONFIG.recepcion.lugar;

    // Itinerario — botones de ubicación
    asignarEnlaceMaps("link-ceremonia", CONFIG.ceremonia.maps);
    asignarEnlaceMaps("link-recepcion", CONFIG.recepcion.maps);

    // Regalos
    const elLinkRegalos = document.getElementById("link-regalos");
    if (elLinkRegalos) {
        if (CONFIG.regalosUrl && !CONFIG.regalosUrl.startsWith("REEMPLAZAR")) {
            elLinkRegalos.href = CONFIG.regalosUrl;
        } else {
            elLinkRegalos.addEventListener("click", (e) => {
                e.preventDefault();
                // Enlace de regalos pendiente de configurar
            });
            elLinkRegalos.setAttribute("aria-disabled", "true");
            elLinkRegalos.style.opacity = "0.5";
            elLinkRegalos.style.cursor = "not-allowed";
            elLinkRegalos.title = "Próximamente disponible";
        }
    }

    const elMesaTienda = document.getElementById("mesa-tienda");
    const elMesaNumero = document.getElementById("mesa-numero");
    if (elMesaTienda) elMesaTienda.textContent = CONFIG.mesaTienda;
    if (elMesaNumero) elMesaNumero.textContent = CONFIG.mesaNumero;

    // Dress Code — inspiración
    const elLinkInspiacion = document.getElementById("link-inspiracion");
    if (elLinkInspiacion) {
        if (CONFIG.inspiracionUrl && !CONFIG.inspiracionUrl.startsWith("REEMPLAZAR")) {
            elLinkInspiacion.href = CONFIG.inspiracionUrl;
        } else {
            elLinkInspiacion.addEventListener("click", (e) => e.preventDefault());
            elLinkInspiacion.setAttribute("aria-disabled", "true");
            elLinkInspiacion.style.opacity = "0.5";
            elLinkInspiacion.style.cursor = "not-allowed";
            elLinkInspiacion.title = "Próximamente disponible";
        }
    }

    // Fecha límite de confirmación
    const elFechaLimite = document.getElementById("fecha-limite-display");
    if (elFechaLimite) elFechaLimite.textContent = CONFIG.fechaLimiteConfirmacion;
}

function asignarEnlaceMaps(idElemento, url) {
    const el = document.getElementById(idElemento);
    if (!el) return;
    if (url && !url.startsWith("REEMPLAZAR")) {
        el.href = url;
    } else {
        // Sin URL configurada: deshabilitar elegantemente
        el.addEventListener("click", (e) => e.preventDefault());
        el.setAttribute("aria-disabled", "true");
        el.style.opacity = "0.45";
        el.style.cursor = "not-allowed";
        el.title = "Ubicación próximamente disponible";
    }
}

/* ================================================================
   REPRODUCTOR DE MÚSICA
   ================================================================ */
function iniciarReproductor() {
    const audio = document.getElementById("audio-player");
    const btnPlay = document.getElementById("btn-play");
    const btnRewind = document.getElementById("btn-rewind");
    const btnForward = document.getElementById("btn-forward");
    const progress = document.getElementById("music-progress");
    const volume = document.getElementById("music-volume");
    const current = document.getElementById("music-current");
    const duration = document.getElementById("music-duration");
    const iconPlay = document.getElementById("icon-play");
    const iconPause = document.getElementById("icon-pause");

    if (!audio || !btnPlay) return;

    // Verificar si el audio existe
    let audioDisponible = false;

    // Configurar fuente y verificar disponibilidad
    const source = audio.querySelector("source");
    if (source) source.src = CONFIG.audioSrc;

    audio.addEventListener("error", () => {
        // Audio no disponible — desactivar controles elegantemente
        desactivarReproductor(btnPlay, btnRewind, btnForward, progress, volume);
    }, { once: true });

    audio.addEventListener("loadedmetadata", () => {
        audioDisponible = true;
        duration.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
        if (!audio.duration) return;
        const pct = (audio.currentTime / audio.duration) * 100;
        progress.value = pct;
        actualizarProgreso(progress, pct);
        current.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener("ended", () => {
        iconPlay.classList.remove("hidden");
        iconPause.classList.add("hidden");
        audio.currentTime = 0;
        progress.value = 0;
        actualizarProgreso(progress, 0);
    });

    // Botón play/pausa
    btnPlay.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(() => {
                // Reproducción bloqueada por política del navegador
            });
            iconPlay.classList.add("hidden");
            iconPause.classList.remove("hidden");
        } else {
            audio.pause();
            iconPlay.classList.remove("hidden");
            iconPause.classList.add("hidden");
        }
    });

    // Retroceder 10s
    btnRewind.addEventListener("click", () => {
        audio.currentTime = Math.max(0, audio.currentTime - 10);
    });

    // Adelantar 10s
    btnForward.addEventListener("click", () => {
        audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10);
    });

    // Barra de progreso
    progress.addEventListener("input", () => {
        if (!audio.duration) return;
        audio.currentTime = (progress.value / 100) * audio.duration;
        actualizarProgreso(progress, parseFloat(progress.value));
    });

    // Volumen
    if (volume) {
        audio.volume = parseFloat(volume.value);
        volume.addEventListener("input", () => {
            audio.volume = parseFloat(volume.value);
            actualizarProgreso(volume, parseFloat(volume.value) * 100);
        });
        actualizarProgreso(volume, parseFloat(volume.value) * 100);
    }

    actualizarProgreso(progress, 0);
}

function desactivarReproductor(btnPlay, btnRewind, btnForward, progress, volume) {
    [btnPlay, btnRewind, btnForward, progress, volume].forEach((el) => {
        if (el) {
            el.disabled = true;
            el.setAttribute("aria-disabled", "true");
        }
    });
    const info = document.querySelector(".music-song-title");
    if (info) info.textContent = "Audio no disponible";
}

function actualizarProgreso(rangeEl, pct) {
    if (!rangeEl) return;
    rangeEl.style.background = `linear-gradient(to right, #63A1F8 ${pct}%, #DCEBFF ${pct}%)`;
}

function formatTime(secs) {
    if (!isFinite(secs) || isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
}

/* ================================================================
   CUENTA REGRESIVA
   ================================================================ */
function iniciarCuentaRegresiva() {
    const elDias = document.getElementById("cuenta-dias");
    const elHoras = document.getElementById("cuenta-horas");
    const elMinutos = document.getElementById("cuenta-minutos");
    const elSegundos = document.getElementById("cuenta-segundos");
    const elMensaje = document.getElementById("cuenta-mensaje-especial");
    const elGrid = document.getElementById("cuenta-grid");

    if (!elDias || !elHoras || !elMinutos || !elSegundos) return;

    const fechaObjetivo = new Date(CONFIG.fechaBoda).getTime();

    function actualizar() {
        const ahora = Date.now();
        const diff = fechaObjetivo - ahora;

        if (diff <= 0) {
            elDias.textContent = "00";
            elHoras.textContent = "00";
            elMinutos.textContent = "00";
            elSegundos.textContent = "00";
            if (elMensaje) elMensaje.classList.remove("hidden");
            if (elGrid) elGrid.setAttribute("aria-hidden", "true");
            clearInterval(intervalo);
            return;
        }

        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diff % (1000 * 60)) / 1000);

        elDias.textContent = String(dias).padStart(3, "0");
        elHoras.textContent = String(horas).padStart(2, "0");
        elMinutos.textContent = String(minutos).padStart(2, "0");
        elSegundos.textContent = String(segundos).padStart(2, "0");
    }

    actualizar();
    const intervalo = setInterval(actualizar, 1000);
}

/* ================================================================
   FORMULARIO DE CONFIRMACIÓN DE ASISTENCIA
   ================================================================ */
function iniciarFormularioAsistencia() {
    const form = document.getElementById("form-confirmacion");
    const aviso = document.getElementById("confirmacion-aviso");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = form.querySelector("#input-nombre").value.trim();
        const asistencia = form.querySelector('input[name="asistencia"]:checked');

        // Validaciones
        if (!nombre) {
            mostrarAviso(aviso, "Por favor, escribe tu nombre antes de continuar.", true);
            form.querySelector("#input-nombre").focus();
            return;
        }

        if (!asistencia) {
            mostrarAviso(aviso, "Por favor, indica si podrás asistir.", true);
            return;
        }

        // Todo validado — abrir Google Form
        const formUrl = CONFIG.googleFormUrl;

        if (!formUrl || formUrl.startsWith("REEMPLAZAR")) {
            mostrarAviso(
                aviso,
                "El formulario de confirmación aún no está configurado. Contacta a los novios directamente.",
                false
            );
            return;
        }

        mostrarAviso(aviso, "¡Gracias! Se abrirá el formulario de confirmación en una nueva pestaña.", false);

        // Pequeño retardo para que el usuario lea el mensaje
        setTimeout(() => {
            window.open(formUrl, "_blank", "noopener,noreferrer");
        }, 800);
    });
}

function mostrarAviso(el, texto, esError) {
    if (!el) return;
    el.textContent = texto;
    el.classList.toggle("error", esError);
}

/* ================================================================
   ANIMACIONES DE SCROLL (IntersectionObserver)
   ================================================================ */
function iniciarAnimacionesScroll() {
    // Respetar prefers-reduced-motion
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducido) {
        document.querySelectorAll(".reveal").forEach((el) => {
            el.classList.add("visible");
        });
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px",
        }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
        observer.observe(el);
    });
}
