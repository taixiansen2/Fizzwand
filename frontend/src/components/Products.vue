<template>
  <main class="flex-grow flex flex-col justify-center px-6 md:px-16 pt-28 pb-20 max-w-screen-2xl mx-auto w-full min-h-screen">
    <div ref="headerRef" class="mb-12 opacity-0 -translate-y-5">
      <span class="text-[0.75rem] font-bold tracking-wider text-primary uppercase block mb-2">Portfolio Overview</span>
      <h1 class="font-headline text-3xl md:text-[2.5rem] font-extrabold tracking-tight text-on-surface leading-tight">
        产品线: <span class="text-primary">基础版</span>与<span class="text-primary">魔法棒</span>
      </h1>
    </div>
    <div class="flex-grow grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="relative group product-card opacity-0 translate-y-10" ref="card1">
        <div class="bg-surface-container-low rounded-xl overflow-hidden h-[240px] md:h-[340px] flex items-center justify-center relative transition-all duration-500 group-hover:bg-surface-container group-hover:shadow-2xl">
          <img alt="Classic" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/fizzwand_basic.png" />
          <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute top-6 left-6">
            <span class="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">Classic Series</span>
          </div>
        </div>
        <div class="mt-8 transition-transform duration-300 group-hover:-translate-y-2">
          <h2 class="font-headline text-2xl font-bold text-on-surface mb-3">基础版 (Classic)</h2>
          <p class="text-on-surface-variant leading-relaxed max-w-md text-sm">稳健的技术底座，专注于核心功能的极致打磨。提供纯粹、可靠的交互体验，是开启 FizzWand 生态的理想起点。</p>
          <div class="mt-6 flex gap-4">
            <div class="flex items-center gap-2 text-primary">
              <span class="material-symbols-outlined text-sm">check_circle</span>
              <span class="text-[10px] font-bold uppercase tracking-wide">核心交互</span>
            </div>
            <div class="flex items-center gap-2 text-primary">
              <span class="material-symbols-outlined text-sm">check_circle</span>
              <span class="text-[10px] font-bold uppercase tracking-wide">稳定连接</span>
            </div>
          </div>
        </div>
      </div>
      <div class="relative group product-card opacity-0 translate-y-10" ref="card2">
        <div class="bg-surface-container-low rounded-xl overflow-hidden h-[240px] md:h-[340px] flex items-center justify-center relative transition-all duration-500 group-hover:bg-surface-container group-hover:shadow-2xl">
          <img alt="Magic Wand" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/fizzwand_magic.png" />
          <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute top-6 left-6">
            <span class="bg-primary/20 backdrop-blur border border-primary/30 px-3 py-1 rounded-full text-[10px] font-bold text-primary tracking-widest uppercase">Pro Edition</span>
          </div>
        </div>
        <div class="mt-8 transition-transform duration-300 group-hover:-translate-y-2">
          <h2 class="font-headline text-2xl font-bold text-on-surface mb-3">魔法棒 (Magic Wand)</h2>
          <p class="text-on-surface-variant leading-relaxed max-w-md text-sm">将枯燥的物理去气过程转化为一场充满仪式感的桌面魔法。创新的星型多孔工作端设计，配合修长优雅的手柄，让你在轻轻挥舞间，不仅带走气泡，更点亮平淡的日常。</p>
          <div class="mt-6 flex gap-4">
            <div class="flex items-center gap-2 text-primary">
              <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1">auto_awesome</span>
              <span class="text-[10px] font-bold uppercase tracking-wide">星型阵列</span>
            </div>
            <div class="flex items-center gap-2 text-primary">
              <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1">celebration</span>
              <span class="text-[10px] font-bold uppercase tracking-wide">奇幻美学</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const headerRef = ref(null)
const card1 = ref(null)
const card2 = ref(null)

onMounted(() => {
  gsap.to(headerRef.value, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" })
  gsap.to([card1.value, card2.value], {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.2
  })
})
</script>