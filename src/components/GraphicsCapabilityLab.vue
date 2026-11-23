<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{ lang: string }>();
const isId = props.lang === "id";

const canvas = ref<HTMLCanvasElement | null>(null);
const canvasEnabled = ref(false);
const ready = ref(false);
onMounted(() => { ready.value = true; });
const status = ref(isId ? "Ilustrasi SVG statis tersedia. Aktifkan pratinjau Canvas opsional untuk memeriksa dukungan grafis browser." : "The static SVG illustration is available. Activate the optional Canvas preview to inspect browser graphics support.");

function activateGraphics() {
  const element = canvas.value;
  if (!element) return;

  const context = element.getContext("2d");
  if (!context) {
    status.value = isId ? "Canvas 2D tidak tersedia. Fallback SVG tetap digunakan." : "Canvas 2D is unavailable. The SVG fallback remains available.";
    return;
  }

  const styles = getComputedStyle(document.documentElement);
  const accent = styles.getPropertyValue("--accent").trim() || "#726550";
  const surface = styles.getPropertyValue("--surface").trim() || "#ffffff";
  context.clearRect(0, 0, element.width, element.height);
  context.fillStyle = surface;
  context.fillRect(0, 0, element.width, element.height);
  context.fillStyle = accent;
  context.beginPath();
  context.arc(150, 120, 64, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = styles.getPropertyValue("--text").trim() || "#222222";
  context.lineWidth = 5;
  context.beginPath();
  context.moveTo(265, 175);
  context.lineTo(365, 65);
  context.lineTo(465, 175);
  context.closePath();
  context.stroke();

  const probe = document.createElement("canvas");
  const gl = probe.getContext("webgl2");
  const webglAvailable = Boolean(gl);
  gl?.getExtension("WEBGL_lose_context")?.loseContext();

  const webgpuAvailable = "gpu" in navigator;
  canvasEnabled.value = true;
  status.value = isId
    ? `Canvas 2D: aktif. WebGL2: ${webglAvailable ? "tersedia" : "tidak tersedia"}. API WebGPU: ${webgpuAvailable ? "terdeteksi (adapter tidak diminta)" : "tidak tersedia"}.`
    : `Canvas 2D: active. WebGL2: ${webglAvailable ? "available" : "unavailable"}. WebGPU API: ${webgpuAvailable ? "exposed by this browser (adapter not requested)" : "unavailable"}.`;
}
</script>

<template>
  <section class="content-card graphics-lab" aria-labelledby="graphics-lab-title">
    <p class="eyebrow">PROGRESSIVE ENHANCEMENT</p>
    <h2 id="graphics-lab-title">{{ lang === "id" ? "Lab grafis opsional" : "Optional graphics lab" }}</h2>
    <p>{{ lang === "id" ? "SVG menjadi tampilan dasar. Canvas hanya dijalankan setelah tombol diaktifkan. WebGL2 diuji lalu konteks dilepas; WebGPU hanya diperiksa keberadaan API-nya tanpa meminta adapter atau membuat perangkat GPU." : "SVG is the baseline. Canvas runs only after activation. WebGL2 is probed and its context released; WebGPU is checked for API exposure only, without requesting an adapter or creating a GPU device." }}</p>
    <div class="graphics-stage">
      <svg v-if="!canvasEnabled" viewBox="0 0 640 240" role="img" aria-labelledby="graphics-svg-title graphics-svg-desc">
        <title id="graphics-svg-title">{{ lang === "id" ? "Ilustrasi vektor statis" : "Static vector illustration" }}</title>
        <desc id="graphics-svg-desc">{{ lang === "id" ? "Lingkaran dan segitiga yang menunjukkan fallback SVG." : "A circle and triangle showing the SVG fallback." }}</desc>
        <circle cx="150" cy="120" r="64" fill="var(--accent)" />
        <path d="M265 175 L365 65 L465 175 Z" fill="none" stroke="var(--text)" stroke-width="5" />
      </svg>
      <canvas ref="canvas" v-show="canvasEnabled" class="graphics-canvas" width="640" height="240" aria-hidden="true"></canvas>
    </div>
    <button type="button" class="rounded-lg px-4 py-3 font-semibold" :disabled="!ready" @click="activateGraphics">
      {{ lang === "id" ? "Aktifkan pratinjau Canvas" : "Activate Canvas preview" }}
    </button>
    <p class="graphics-status" role="status" aria-live="polite">{{ status }}</p>
    <p class="muted">{{ lang === "id" ? "Demo ini tidak menjalankan animasi, tidak membuat render loop, dan tidak diperlukan untuk membaca atau menavigasi situs." : "This demo runs no animation or render loop and is not required to read or navigate the site." }}</p>
  </section>
</template>
