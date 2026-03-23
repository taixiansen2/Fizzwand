<template>
  <main class="min-h-screen pt-32 pb-24 px-8 md:px-20 max-w-screen-2xl mx-auto flex flex-col justify-center w-full">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
      <div ref="titleContainer" class="lg:col-span-5 opacity-0 -translate-x-10">
        <div class="mb-4">
          <span class="bg-secondary-container text-primary px-4 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase">Investment Phase</span>
        </div>
        <h1 class="text-6xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-none mb-6">融资愿景</h1>
        <p class="text-xl text-on-surface-variant max-w-md leading-relaxed">构建科技与生活的无缝联结，FizzWand 致力于重塑未来交互体验的每一个瞬间。</p>
      </div>
      <div ref="fundContainer" class="lg:col-span-7 flex flex-col items-end opacity-0 translate-x-10">
        <div class="bg-white p-8 rounded-xl w-full max-w-md border-b-4 border-primary shadow-lg hover:-translate-y-1 transition-transform">
          <div class="flex items-center justify-between mb-6">
            <span class="text-on-surface-variant font-label text-xs uppercase tracking-widest">融资需求 / Requirement</span>
            <span class="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full">rocket_launch</span>
          </div>
          <div class="flex items-baseline gap-2 border-b border-outline-variant/20 pb-6 mb-6">
            <span class="text-5xl font-headline font-black text-primary fund-amount" data-target="10">0</span>
            <span class="text-xl font-headline font-bold text-on-surface">万</span>
            <span class="ml-auto bg-primary-container/20 text-primary px-3 py-1 rounded text-xs font-bold uppercase">种子轮</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-on-surface-variant font-medium">出让股权</span>
            <span class="text-2xl font-bold font-headline text-on-surface">30%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="(card, i) in usageCards" :key="i" class="usage-card opacity-0 translate-y-10" :class="`${card.highlight ? 'signature-gradient text-white shadow-xl hover:shadow-2xl hover:scale-105' : 'bg-white text-on-surface shadow-sm hover:shadow-md hover:-translate-y-1'} p-8 rounded-xl flex flex-col justify-between transition-all duration-300`">
        <div>
          <div class="flex justify-between items-start mb-10">
            <div :class="`p-3 rounded-lg ${card.highlight ? 'bg-white/20' : 'bg-surface-container-high text-primary'}`">
              <span class="material-symbols-outlined text-3xl">{{ card.icon }}</span>
            </div>
            <span :class="`text-4xl font-headline font-black ${card.highlight ? 'text-white/30' : 'text-outline-variant opacity-40'}`">{{ card.perc }}</span>
          </div>
          <h3 class="text-2xl font-headline font-bold mb-4">{{ card.title }}</h3>
          <p :class="`${card.highlight ? 'text-white/90' : 'text-on-surface-variant'} leading-relaxed text-sm`">{{ card.desc }}</p>
        </div>
        <div :class="`mt-8 h-1.5 w-full rounded-full overflow-hidden ${card.highlight ? 'bg-white/20' : 'bg-surface-container'}`">
          <div :class="`h-full rounded-full ${card.highlight ? 'bg-white' : 'bg-primary'} bar-fill`" :data-width="card.perc" style="width: 0%"></div>
        </div>
      </div>
    </div>
    <div ref="visionBanner" class="mt-20 relative overflow-hidden rounded-2xl bg-surface-container-high p-12 flex flex-col md:flex-row items-center gap-12 opacity-0 translate-y-10">
      <div class="flex-1 z-10">
        <h2 class="text-3xl font-headline font-bold mb-6 flex items-center gap-3">
          <span class="material-symbols-outlined text-primary bg-white p-2 rounded-full shadow-sm" style="font-variation-settings: 'FILL' 1">visibility</span> 长期愿景
        </h2>
        <p class="text-2xl font-light text-on-surface leading-snug">
          让 FizzWand 成为全球数千万肠胃敏感者及无气饮料爱好者的口袋标配，<span class="font-medium text-primary">将一个“怪癖”变成一种全新的生活方式！</span>
        </p>
      </div>
      <div class="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl md:rotate-3 group cursor-pointer">
        <img alt="Future Vision" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5mjTGyrladpC3t0NKTKgbGYz8mBYafHC7Owvfny0_OHIAPNS7Gw5oFhcbf4MC-Yl_uLdQRPzUPUxH309eTfebUPMOgX8xmqjtr3b0aqSLuViH-FQsu4VVOkwXWszw5T3RghcP3Yi9dqyg8zR3nAeaKwK0v1jYvUKQgrmHqXWiJRTgrwSY8NW1mKadC2_e1txLyJY-qC4Uud3sQLVrwQB1M_uFGTAC-qbcjCOSlNT4YQywTISwg-ULBt6Bc2J73o4xdzVcpeNIrqk" />
        <div class="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const titleContainer = ref(null)
const fundContainer = ref(null)
const visionBanner = ref(null)

const usageCards = [
  { title: '模具开发与打样', icon: 'precision_manufacturing', perc: '30%', desc: '投入高精度模具研发与首批产品（包括管套）打样小批量验证。' },
  { title: '内容制作与营销', icon: 'movie_edit', perc: '40%', desc: '制作微距解压视频，通过初期社交媒体精准投放，打造病毒式传播。', highlight: true },
  { title: '团队与知产布局', icon: 'shield_locked', perc: '30%', desc: '构建全球化知识产权护城河（PCT准备），组建核心团队及补充流动资金。' }
]

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.to(titleContainer.value, { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" })
    .to(fundContainer.value, { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.6")
    .to('.usage-card', { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" }, "-=0.2")
    .to(visionBanner.value, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.2")

  // Number counter animation
  const amountObj = { val: 0 }
  const fundAmountEl = document.querySelector('.fund-amount')
  gsap.to(amountObj, {
    val: 10,
    duration: 2,
    ease: "power2.out",
    delay: 0.5,
    onUpdate: () => {
      if(fundAmountEl) fundAmountEl.innerHTML = Math.round(amountObj.val)
    }
  })

  // Bar fill animation
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(bar => {
      gsap.to(bar, {
        width: bar.getAttribute('data-width'),
        duration: 1.5,
        ease: "power2.out"
      })
    })
  }, 1000)
})
</script>