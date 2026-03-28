<template>
  <main class="flex-grow flex items-center justify-center px-4 md:px-20 pt-28 pb-20 min-h-screen">
    <div ref="containerRef" class="w-full max-w-screen-2xl md:aspect-16-9 bg-white overflow-hidden flex flex-col relative shadow-2xl rounded-xl opacity-0 scale-95 origin-center">
      <div class="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-10 translate-x-12"></div>
      <div class="px-6 md:px-16 pt-8 md:pt-12">
        <div class="flex items-center gap-4 mb-4">
          <span class="h-[2px] w-12 bg-primary"></span>
          <span class="text-primary font-bold tracking-widest uppercase text-sm font-headline">Section 05</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-extrabold font-headline tracking-tighter text-on-surface mb-6">营销策略</h1>
      </div>
      <div class="grid grid-cols-12 gap-8 md:gap-12 px-6 md:px-16 flex-grow items-start z-10">
        <div class="col-span-12 lg:col-span-7 flex flex-col gap-6">
          <div ref="sloganRef" class="p-6 md:p-10 bg-surface-container-low rounded-lg relative overflow-hidden group hover:shadow-lg transition-shadow">
            <h2 class="text-primary font-headline font-bold text-xl mb-4 tracking-tight">核心Slogan</h2>
            <p class="text-2xl md:text-4xl font-extrabold font-headline leading-tight text-on-surface-variant">
              FizzWand, <br/><span class="text-primary">理解您的小习惯</span>
            </p>
            <div class="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity">
              <span class="material-symbols-outlined text-[120px] translate-x-4 translate-y-4">magic_button</span>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-4 strategy-item opacity-0 translate-y-5">
              <div class="flex items-center gap-3 text-primary">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">campaign</span>
                <h3 class="font-bold font-headline text-lg">内容营销</h3>
              </div>
              <div class="bg-secondary-container/20 p-6 rounded-lg border border-secondary-container hover:bg-secondary-container/30 transition-colors">
                <span class="font-bold text-primary text-sm block mb-2">感官叙事 ASMR</span>
                <p class="text-on-surface-variant text-sm leading-relaxed">捕捉FizzWand运作时的纯粹音效与视觉奇观，打造病毒式传播内容。</p>
              </div>
            </div>
            <div class="space-y-4 strategy-item opacity-0 translate-y-5">
              <div class="flex items-center gap-3 text-primary">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">groups</span>
                <h3 class="font-bold font-headline text-lg">社群建立</h3>
              </div>
              <div class="p-6 border-l-4 border-primary-container bg-surface-container-high rounded-sm hover:bg-surface-container transition-colors">
                <span class="font-bold text-on-surface text-sm block mb-2">圈层共鸣</span>
                <p class="text-on-surface-variant text-sm leading-relaxed">聚集“无气碳酸爱好者”，打造高粘性、高认同感的“智感生活家”专属社群。</p>
              </div>
            </div>
          </div>
        </div>
        <div ref="imgContainer" class="col-span-12 lg:col-span-5 relative h-[80%] min-h-[300px] opacity-0 translate-x-10">
          <div class="w-full h-full rounded-xl overflow-hidden shadow-xl group">
            <img class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-0HZBgzK8_m1uCnb2lOpd0ZNtg6L9nLCPcb7jG44YZsEF1Z599Q0IxxKQefhBjLRbHEaIs0yXM2_pR-RjrklsdYLPip56OQFbW26n8NBUTO8g5cMTLaFkMbnC7rys2wjtUSsxWhqNK62yxprA7wQs4sjld_8Y2yxYwLJtKsSA7UtGBxa2VY9PxftBMr7b-S6jpw8CfK-zEHdz0sPA3mfG_iapGTfKUB0iHb8nGNTzuU43d-5ChOvnCiCfD1hV83vSjsRiMnyww8A" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div class="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span class="text-xs font-bold tracking-widest uppercase mb-1 block">Visual Campaign</span>
              <p class="text-sm font-light">打造极致解压的视觉体验，触发社交网络自发裂变。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-6 md:pb-8 px-6 md:px-16 mt-8 md:mt-0 flex justify-between items-end">
        <div class="flex gap-4"><div class="w-3 h-3 rounded-full bg-primary animate-pulse"></div><div class="w-3 h-3 rounded-full bg-primary-container animate-pulse" style="animation-delay: 0.5s"></div></div>
        <p class="text-[10px] font-label tracking-widest text-outline uppercase">Marketing Framework 2024</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const containerRef = ref(null)
const sloganRef = ref(null)
const imgContainer = ref(null)

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.to(containerRef.value, {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out"
  })
  .fromTo(sloganRef.value, 
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    "-=0.4"
  )
  .to('.strategy-item', {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out"
  }, "-=0.2")
  .to(imgContainer.value, {
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6")
})
</script>