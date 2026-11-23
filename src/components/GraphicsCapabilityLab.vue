<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{ lang: string }>();
const isId = props.lang === "id";

const canvas = ref<HTMLCanvasElement | null>(null);
const section = ref<HTMLElement | null>(null);
const canvasEnabled = ref(false);
const animationRunning = ref(false);
const ready = ref(false);
const status = ref(isId
  ? "Ilustrasi SVG statis tersedia. Aktifkan Canvas untuk pratinjau opsional."
  : "The static SVG illustration is available. Activate Canvas for an optional preview.");

let frameId: number | null = null;
let lastFrame = 0;
let motionQuery: MediaQueryList | null = null;
let observer: IntersectionObserver | null = null;
let motionObserver: MutationObserver | null = null;

function reducedMotionIsActive() {
  return document.documentElement.dataset.motion === "reduce" || Boolean(motionQuery?.matches);
}

function drawFrame(time = 0) {
  const element = canvas.value;
  const context = element?.getContext("2d");
  if (!element || !context) return;

  const styles = getComputedStyle(document.documentElement);
  const accent = styles.getPropertyValue("--accent").trim() || "#135d78";
  const surface = styles.getPropertyValue("--surface").trim() || "#ffffff";
  const text = styles.getPropertyValue("--text").trim() || "#14232e";
  const width = element.width;
  const height = element.height;
  const pulse = reducedMotionIsActive() ? 0 : Math.sin(time * 0.0018) * 5;
  const angle = reducedMotionIsActive() ? 0 : time * 0.00035;
  const centerX = width / 2;
  const centerY = height / 2;

  context.clearRect(0, 0, width, height);
  context.fillStyle = surface;
  context.fillRect(0, 0, width, height);

  context.strokeStyle = accent;
  context.globalAlpha = 0.55;
  context.lineWidth = 2;
  context.beginPath();
  context.arc(centerX, centerY, 55 + pulse, 0, Math.PI * 2);
  context.stroke();

  context.globalAlpha = 1;
  context.fillStyle = accent;
  context.beginPath();
  context.arc(centerX, centerY, 25 + pulse * 0.25, 0, Math.PI * 2);
  context.fill();

  context.strokeStyle = text;
  context.lineWidth = 3;
  context.beginPath();
  context.ellipse(centerX, centerY, 125, 45, -0.2, 0, Math.PI * 2);
  context.stroke();

  const dotX = centerX + Math.cos(angle) * 125;
  const dotY = centerY + Math.sin(angle) * 45;
  context.fillStyle = text;
  context.beginPath();
  context.arc(dotX, dotY, 7, 0, Math.PI * 2);
  context.fill();
}

function stopAnimation() {
  animationRunning.value = false;
  if (frameId !== null) cancelAnimationFrame(frameId);
  frameId = null;
  lastFrame = 0;
  if (canvasEnabled.value) drawFrame(0);
}

function activateGraphics() {
  const element = canvas.value;
  if (!element) return;

  const context = element.getContext("2d");
  if (!context) {
    status.value = isId
      ? "Canvas 2D tidak tersedia. Fallback SVG tetap digunakan."
      : "Canvas 2D is unavailable. The SVG fallback remains available.";
    return;
  }

  canvasEnabled.value = true;
  drawFrame(0);

  const probe = document.createElement("canvas");
  const gl = probe.getContext("webgl2");
  const webglAvailable = Boolean(gl);
  gl?.getExtension("WEBGL_lose_context")?.loseContext();

  const webgpuAvailable = "gpu" in navigator;
  status.value = isId
    ? `Canvas 2D: aktif. WebGL2: ${webglAvailable ? "tersedia" : "tidak tersedia"}. API WebGPU: ${webgpuAvailable ? "terdeteksi (adapter tidak diminta)" : "tidak tersedia"}.`
    : `Canvas 2D: active. WebGL2: ${webglAvailable ? "available" : "unavailable"}. WebGPU API: ${webgpuAvailable ? "exposed (adapter not requested)" : "unavailable"}.`;
}

function startAnimation() {
  if (!canvasEnabled.value) activateGraphics();
  if (!canvasEnabled.value) return;

  if (reducedMotionIsActive()) {
    drawFrame(0);
    status.value = isId
      ? "Mode kurangi gerakan aktif. Pratinjau tetap statis."
      : "Reduced motion is active. The preview remains static.";
    return;
  }

  if (animationRunning.value) return;
  animationRunning.value = true;
  status.value = isId
    ? "Animasi Canvas berjalan pada 30 fps maksimum. Gunakan jeda untuk menghentikannya."
    : "Canvas animation is running at up to 30 fps. Use pause to stop it.";

  const animate = (time: number) => {
    if (!animationRunning.value || document.hidden) {
      stopAnimation();
      return;
    }
    if (time - lastFrame >= 33) {
      drawFrame(time);
      lastFrame = time;
    }
    frameId = requestAnimationFrame(animate);
  };
  frameId = requestAnimationFrame(animate);
}

function handleMotionChange() {
  if (reducedMotionIsActive()) {
    stopAnimation();
    status.value = isId
      ? "Preferensi kurangi gerakan aktif. Animasi dihentikan."
      : "Reduced-motion preference enabled. Animation stopped.";
  }
}

function handleVisibilityChange() {
  if (document.hidden) stopAnimation();
}

onMounted(() => {
  ready.value = true;
  motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  motionQuery.addEventListener("change", handleMotionChange);
  document.addEventListener("visibilitychange", handleVisibilityChange);

  motionObserver = new MutationObserver(handleMotionChange);
  motionObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });

  if ("IntersectionObserver" in window && section.value) {
    observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => !entry.isIntersecting)) stopAnimation();
    }, { threshold: 0.05 });
    observer.observe(section.value);
  }
});

onUnmounted(() => {
  stopAnimation();
  observer?.disconnect();
  motionObserver?.disconnect();
  motionQuery?.removeEventListener("change", handleMotionChange);
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<template>
  <section ref="section" class="content-card graphics-lab" aria-labelledby="graphics-lab-title">
    <p class="eyebrow">PROGRESSIVE ENHANCEMENT</p>
    <h2 id="graphics-lab-title">{{ lang === "id" ? "Lab grafis opsional" : "Optional graphics lab" }}</h2>
    <p>{{ lang === "id" ? "SVG menjadi tampilan dasar. Canvas hanya dijalankan setelah tombol diaktifkan. WebGL2 diuji lalu konteks dilepas; WebGPU hanya diperiksa keberadaan API-nya tanpa meminta adapter atau membuat perangkat GPU." : "SVG is the baseline. Canvas runs only after activation. WebGL2 is probed and its context released; WebGPU is checked for API exposure only, without requesting an adapter or creating a GPU device." }}</p>
    <div class="graphics-stage">
      <svg v-if="!canvasEnabled" viewBox="0 0 640 240" role="img" aria-labelledby="graphics-svg-title graphics-svg-desc">
        <title id="graphics-svg-title">{{ lang === "id" ? "Ilustrasi vektor statis" : "Static vector illustration" }}</title>
        <desc id="graphics-svg-desc">{{ lang === "id" ? "Lingkaran dan elips yang menunjukkan fallback SVG." : "A circle and ellipse showing the SVG fallback." }}</desc>
        <circle cx="320" cy="120" r="55" fill="var(--accent)" />
        <ellipse cx="320" cy="120" rx="125" ry="45" fill="none" stroke="var(--text)" stroke-width="3" />
      </svg>
      <canvas ref="canvas" v-show="canvasEnabled" class="graphics-canvas" width="640" height="240" aria-hidden="true"></canvas>
    </div>
    <div class="graphics-controls">
      <button v-if="!canvasEnabled" type="button" class="action-link" :disabled="!ready" @click="activateGraphics">
        {{ lang === "id" ? "Aktifkan pratinjau Canvas" : "Activate Canvas preview" }}
      </button>
      <button v-if="canvasEnabled && !animationRunning" type="button" class="action-link" :disabled="!ready" @click="startAnimation">
        {{ lang === "id" ? "Mulai animasi opsional" : "Start optional animation" }}
      </button>
      <button v-if="animationRunning" type="button" class="action-link secondary" @click="stopAnimation">
        {{ lang === "id" ? "Jeda animasi" : "Pause animation" }}
      </button>
    </div>
    <p class="graphics-status" role="status" aria-live="polite">{{ status }}</p>
    <p class="muted">{{ lang === "id" ? "Animasi hanya dimulai atas permintaan, dibatasi maksimal 30 fps, dihentikan saat halaman tersembunyi atau keluar dari layar, dan tidak berjalan saat preferensi kurangi gerakan aktif." : "Animation starts only on request, is capped at 30 fps, stops when the page is hidden or the lab leaves the viewport, and stays static when reduced motion is enabled." }}</p>
  </section>
</template>
