<template>
  <main class="min-h-screen pt-32 pb-16 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
    <section ref="headerRef" class="mb-12 opacity-0 -translate-y-5">
      <div class="flex flex-col gap-2">
        <span class="text-[0.75rem] font-bold tracking-[0.2em] text-primary uppercase font-label">Core Technology</span>
        <h1 class="text-[3.5rem] font-extrabold text-on-surface font-headline leading-tight tracking-tighter">技术原理与产品优势</h1>
      </div>
    </section>
    <div class="grid grid-cols-12 gap-8">
      <div ref="leftCol" class="col-span-12 lg:col-span-4 flex flex-col gap-10 opacity-0 translate-x-[-20px]">
        <div @click="$router.push('/nucleation')" class="p-8 bg-surface-container-low rounded-xl border border-outline-variant/10 hover:shadow-lg transition-all cursor-pointer group">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <span class="w-2 h-8 bg-primary rounded-full"></span>
              <h2 class="text-xl font-bold font-headline group-hover:text-cyan-600 transition-colors">成核反应 (Nucleation)</h2>
            </div>
            <span class="material-symbols-outlined text-outline group-hover:text-cyan-600 transition-transform group-hover:translate-x-1">arrow_forward</span>
          </div>
          <p class="text-on-surface-variant leading-relaxed mb-6 text-sm">通过微观物理结构的精准引导，使气体分子在受控界面迅速聚集成核。这种物理反应替代了传统化学添加，实现了清洁且高效的能量转化过程。</p>
          <div class="flex gap-2">
            <span class="px-3 py-1 bg-secondary-container text-primary rounded-full text-[10px] font-bold tracking-wider uppercase">Physical Reaction</span>
            <span class="px-3 py-1 bg-primary-container/20 text-primary rounded-full text-[10px] font-bold tracking-wider uppercase">Eco-Friendly</span>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div v-for="adv in advantages" :key="adv.id" class="flex gap-4 items-start adv-item opacity-0 translate-y-5">
            <span class="text-3xl font-extrabold text-primary/20 font-headline">{{ adv.id }}</span>
            <div>
              <h3 class="text-md font-bold text-on-surface mb-1">{{ adv.title }}</h3>
              <p class="text-xs text-on-surface-variant leading-relaxed">{{ adv.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div ref="rightCol" class="col-span-12 lg:col-span-8 flex items-center justify-center relative min-h-[450px] bg-surface-container-low rounded-2xl overflow-hidden opacity-0 translate-x-[20px]">
        <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#006571 1px, transparent 1px); background-size: 40px 40px"></div>
        <div class="relative w-full h-full flex items-center justify-center p-12">
          <div class="absolute w-[2px] h-[70%] bg-gradient-to-b from-primary via-primary-container to-transparent z-10 shadow-[0_0_20px_rgba(0,227,253,0.5)]"></div>
          <div class="relative z-20 flex flex-wrap justify-center gap-12 max-w-xl">
            <div class="tech-node w-28 h-28 rounded-full bg-white/70 backdrop-blur-xl border border-primary/10 flex items-center justify-center shadow-2xl relative hover:-translate-y-2 transition-transform cursor-pointer">
              <span class="material-symbols-outlined text-primary text-3xl">bubble_chart</span>
              <div class="absolute -bottom-6 text-[10px] font-bold text-primary tracking-widest uppercase w-max text-center">Initial Stage</div>
            </div>
            <div class="tech-node w-40 h-40 rounded-full signature-gradient flex items-center justify-center shadow-xl transform scale-110 hover:scale-125 transition-transform cursor-pointer z-30">
              <div class="text-center text-white">
                <div class="text-[10px] font-bold tracking-widest mb-1 opacity-80">NUCLEUS</div>
                <div class="text-2xl font-black font-headline tracking-tighter">100%</div>
                <div class="text-[8px] font-medium tracking-tight mt-1 uppercase">Physical Reaction</div>
              </div>
            </div>
            <div class="tech-node w-28 h-28 rounded-full bg-white/70 backdrop-blur-xl border border-primary/10 flex items-center justify-center shadow-2xl relative hover:-translate-y-2 transition-transform cursor-pointer">
              <span class="material-symbols-outlined text-primary text-3xl">flare</span>
              <div class="absolute -bottom-6 text-[10px] font-bold text-primary tracking-widest uppercase w-max text-center">Activation</div>
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
const leftCol = ref(null)
const rightCol = ref(null)

const advantages = [
  { id: '01', title: '极速 (Speed)', desc: '毫秒级响应速度，即刻完成气泡生成，无需漫长等待。' },
  { id: '02', title: '无害 (Harmless)', desc: '纯物理过程，零化学残留。守护每一口纯净。' },
  { id: '03', title: '优雅 (Elegance)', desc: '极简工业设计语言，将复杂的原子级反应转化为美感。' }
]

onMounted(() => {
  gsap.to(headerRef.value, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" })
  gsap.to(leftCol.value, { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 })
  gsap.to('.adv-item', { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.4 })
  gsap.to(rightCol.value, { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.3 })
  
  // Float animation for tech nodes
  gsap.to('.tech-node', {
    y: -10,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    stagger: 0.2
  })
})
</script>