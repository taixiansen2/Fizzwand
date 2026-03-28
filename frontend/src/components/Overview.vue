<template>
  <main class="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-24 pb-12 w-full overflow-hidden">
    <div class="absolute inset-0 z-0 bg-transparent w-full h-full"></div>
    <div class="relative z-10 grid grid-cols-12 w-full max-w-screen-2xl mx-auto items-center gap-8">
      <div ref="textRef" class="col-span-12 lg:col-span-5 flex flex-col items-start opacity-0 translate-y-10">
        <div class="mb-4">
          <span class="inline-block px-3 py-1 bg-secondary-container/30 text-primary font-bold rounded-full text-[10px] tracking-widest uppercase font-label">
            Premium Editorial
          </span>
        </div>
        <h1 class="font-headline font-extrabold text-5xl md:text-[4rem] leading-[1.1] text-on-surface tracking-tighter mb-2 mt-4 md:mt-0">
          FizzWand<br/><span class="text-primary font-bold">菲兹旺德</span>
        </h1>
        <div class="h-1 w-24 bg-primary-fixed-dim mb-8"></div>
        <p class="text-2xl md:text-[1.75rem] font-headline font-medium text-on-surface-variant leading-tight max-w-md">
          理解您的小习惯
        </p>
        <p class="text-primary/60 font-label text-sm tracking-wider mt-2 uppercase">
          The Magic Wand for Carbonation Freedom
        </p>
        <div class="mt-8 md:mt-16 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button @click="$router.push({ path: '/', hash: '#summary' })" class="w-full sm:w-auto justify-center px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-primary/10 flex items-center gap-3 transition-transform hover:scale-105">
            了解更多 <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          <button @click="$router.push({ path: '/', hash: '#technology' })" class="w-full sm:w-auto justify-center px-8 py-4 bg-white border border-outline-variant/20 text-on-surface font-semibold rounded-xl hover:bg-surface-container-low transition-colors">
            技术规格
          </button>
        </div>
      </div>
      <div ref="imgRef" class="col-span-12 lg:col-span-7 relative h-[400px] md:h-[600px] flex items-center justify-center opacity-0 translate-x-10 mt-6 md:mt-0">
        <img alt="FizzWand Product" class="w-full h-auto max-h-[80%] object-contain soft-product-shadow" src="/fizzwand_basic.png" />
        <div class="absolute top-12 right-0 flex flex-col gap-2 opacity-40">
          <div class="w-32 h-[1px] bg-outline"></div>
          <div class="text-[10px] text-on-surface-variant font-label uppercase text-right tracking-widest">Editorial Series 2024</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const textRef = ref(null)
const imgRef = ref(null)

onMounted(() => {
  gsap.to(textRef.value, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    delay: 0.2
  })
  gsap.to(imgRef.value, {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    delay: 0.4
  })
})
</script>