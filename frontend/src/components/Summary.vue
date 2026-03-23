<template>
  <main class="flex-grow flex flex-col items-center justify-center px-6 md:px-20 py-24 pt-32 overflow-hidden w-full min-h-screen">
    <div class="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mx-auto">
      <div ref="leftCol" class="lg:col-span-5 flex flex-col space-y-12 opacity-0 -translate-x-10">
        <div class="space-y-4">
          <p class="text-primary font-headline font-bold text-sm tracking-[0.2em] uppercase">Executive Summary</p>
          <h1 class="text-on-surface font-headline font-extrabold text-5xl md:text-6xl tracking-tight leading-tight">项目摘要</h1>
          <p v-if="apiStatus" class="text-secondary font-medium mt-2 bg-secondary-container/20 p-2 rounded inline-block text-sm">
            Backend Status: {{ apiStatus }}
          </p>
        </div>
        <div class="space-y-8">
          <div v-for="(item, i) in items" :key="i" class="group flex gap-6 feature-item opacity-0 translate-y-5">
            <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <span class="material-symbols-outlined text-2xl">{{ item.icon }}</span>
            </div>
            <div class="space-y-1">
              <h3 class="text-xl font-headline font-bold text-on-surface">{{ item.title }}</h3>
              <p class="text-on-surface-variant leading-relaxed text-sm">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div ref="rightCol" class="lg:col-span-7 relative opacity-0 translate-x-10">
        <div class="bg-surface-container-low rounded-xl p-1 w-full aspect-[4/3] flex items-center justify-center relative overflow-hidden">
          <div class="absolute inset-0 opacity-10 pointer-events-none">
            <svg class="w-full h-full animate-spin-slow" viewBox="0 0 400 300">
              <circle class="text-primary" cx="200" cy="150" fill="none" r="100" stroke="currentColor" stroke-width="0.5"></circle>
              <circle class="text-primary" cx="200" cy="150" fill="none" r="140" stroke="currentColor" stroke-width="0.5"></circle>
              <line class="text-primary" stroke="currentColor" stroke-width="0.5" x1="0" x2="400" y1="150" y2="150"></line>
              <line class="text-primary" stroke="currentColor" stroke-width="0.5" x1="200" x2="200" y1="0" y2="300"></line>
            </svg>
          </div>
          <div class="relative z-10 w-full max-w-lg p-8">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-primary/5 p-6 rounded-xl border border-primary/10 flex flex-col items-center text-center space-y-3 hover:scale-105 transition-transform cursor-pointer">
                <span class="material-symbols-outlined text-4xl text-primary" style="font-variation-settings: 'FILL' 1">waves</span>
                <span class="text-[10px] font-bold tracking-widest text-primary uppercase">Core Force</span>
                <p class="text-on-surface font-bold text-xs">Sonic Purity</p>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center space-y-3 hover:scale-105 transition-transform cursor-pointer">
                <span class="material-symbols-outlined text-4xl text-primary" style="font-variation-settings: 'FILL' 1">air</span>
                <span class="text-[10px] font-bold tracking-widest text-primary uppercase">Process</span>
                <p class="text-on-surface font-bold text-xs">Rapid De-aeration</p>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center space-y-3 hover:scale-105 transition-transform cursor-pointer">
                <span class="material-symbols-outlined text-4xl text-primary" style="font-variation-settings: 'FILL' 1">bolt</span>
                <span class="text-[10px] font-bold tracking-widest text-primary uppercase">Efficiency</span>
                <p class="text-on-surface font-bold text-xs">Instant Result</p>
              </div>
              <div class="signature-gradient p-6 rounded-xl text-white flex flex-col items-center text-center space-y-3 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-primary/20">
                <span class="material-symbols-outlined text-4xl text-white" style="font-variation-settings: 'FILL' 1">auto_awesome</span>
                <span class="text-[10px] font-bold tracking-widest text-white/70 uppercase">Value</span>
                <p class="font-bold text-xs">Micro-Nucleation</p>
              </div>
            </div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-on-surface text-white px-6 py-2 rounded-full font-headline font-bold text-xs shadow-xl flex items-center gap-2 animate-pulse-slow">
              <span class="material-symbols-outlined text-lg">memory</span> FizzWand Core
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

const leftCol = ref(null)
const rightCol = ref(null)
const apiStatus = ref('')
const items = [
  { icon: 'science', title: '便携式物理去气', desc: '创新型手持设备，通过精准物理震荡实现液体快速去气，提升饮用口感与纯净度。' },
  { icon: 'hub', title: '微观成核技术', desc: '利用前沿微观成核原理，在分子层面优化流体结构，释放隐藏的醇厚风味。' },
  { icon: 'verified', title: '国家专利申请中', desc: '核心技术已进入国家专利审核阶段，构筑品牌高技术护城河与法律保障。' },
  { icon: 'style', title: '倡导全新生活方式', desc: '超越工具属性，FizzWand旨在定义一种追求极致、极简与科技感的现代生活美学。' }
]

onMounted(async () => {
  try {
    const res = await fetch('/api/status')
    const data = await res.json()
    apiStatus.value = data.message
  } catch (err) {
    apiStatus.value = 'Offline'
  }

  gsap.to(leftCol.value, {
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.1
  })
  
  gsap.to('.feature-item', {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    delay: 0.4
  })

  gsap.to(rightCol.value, {
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.3
  })
})
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 30s linear infinite;
}
.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: .9; transform: translate(-50%, -50%) scale(1.05); }
}
</style>
