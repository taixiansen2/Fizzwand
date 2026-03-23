<template>
  <main class="min-h-screen relative bg-surface-container-low overflow-hidden pt-24 pb-16 px-6 md:px-12 w-full flex flex-col items-center">
    
    <!-- Bubble Animation Background -->
    <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden" ref="bubbleContainer">
      <img v-for="i in 40" :key="i" src="/bubble_transparent.png" class="bubble absolute object-contain drop-shadow-sm"
           :style="{
             left: `${Math.random() * 100}%`,
             bottom: '-100px',
             width: `${Math.random() * 60 + 20}px`,
             opacity: Math.random() * 0.7 + 0.3
           }" />
    </div>

    <div class="relative z-10 max-w-4xl w-full mx-auto mt-12 bg-white/60 backdrop-blur-xl p-8 md:p-16 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-white/80">
      
      <button @click="$router.back()" class="mb-8 flex items-center gap-2 text-primary hover:text-cyan-600 transition-colors font-bold tracking-widest uppercase text-xs">
        <span class="material-symbols-outlined text-sm">arrow_back</span>
        返回技术规格
      </button>

      <div class="text-center mb-12">
        <span class="text-[0.75rem] font-bold tracking-[0.2em] text-cyan-600 uppercase font-label mb-4 block">Deep Dive</span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-on-surface font-headline leading-tight tracking-tighter mb-6">
          成核反应 <span class="text-primary font-light">Nucleation</span>
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full"></div>
      </div>

      <div class="space-y-10 text-on-surface-variant leading-relaxed text-lg font-body">
        
        <section class="opacity-0 translate-y-5 content-section">
          <h2 class="text-2xl font-bold font-headline text-on-surface mb-4 flex items-center gap-3">
            <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1">science</span>
            什么是成核反应？
          </h2>
          <p>
            成核（Nucleation）是相变的第一步，通常指在一种均匀的相（如液体）中，局部区域由于微小的扰动或杂质的存在，自发形成另一个热力学更稳定的新相（如气体）的微小结构的过程。
          </p>
          <p class="mt-4">
            在碳酸饮料中，二氧化碳（CO₂）以过饱和的状态溶解在液体中。在没有外界干扰的情况下，它们会非常缓慢地析出。但当存在微小的不平整表面、杂质或气泡时，这些位置就成为了“成核位点（Nucleation sites）”。游离的二氧化碳分子会迅速向这些位点聚集，形成足够大的气泡，最终克服液体的表面张力，浮出水面。
          </p>
        </section>

        <section class="opacity-0 translate-y-5 content-section">
          <div class="p-8 bg-gradient-to-br from-primary/5 to-cyan-400/10 rounded-2xl border border-primary/10 my-8">
            <h2 class="text-2xl font-bold font-headline text-on-surface mb-4 flex items-center gap-3">
              <span class="material-symbols-outlined text-cyan-600" style="font-variation-settings: 'FILL' 1">hub</span>
              FizzWand 的微观魔法
            </h2>
            <p>
              传统的搅拌棒由于表面过于光滑，能提供的成核位点极少。而 FizzWand 的核心工作端采用了医疗级 316L 或食品级 304 不锈钢粉末烧结工艺。
            </p>
            <p class="mt-4">
              在这种材料表面，密布着孔径在 <strong class="text-primary">5μm - 20μm</strong> 之间的数以百万计的微孔。当 FizzWand 浸入汽水的那一刻，这百万个微孔瞬间激活，成为完美的成核引擎。二氧化碳如同被磁铁吸引一般，在孔洞内聚集成气泡并疯狂涌出。
            </p>
          </div>
        </section>

        <section class="opacity-0 translate-y-5 content-section">
          <h2 class="text-2xl font-bold font-headline text-on-surface mb-4 flex items-center gap-3">
            <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1">energy_savings_leaf</span>
            纯物理，零妥协
          </h2>
          <p>
            市面上的部分去气方法依赖于添加表面活性剂（如糖果），但这不仅改变了饮料原有的风味，还引入了额外的卡路里和化学物质。
          </p>
          <p class="mt-4">
            FizzWand 彻底颠覆了这一现状。它只利用纯粹的物理几何结构来加速自然过程，不发生任何化学反应，不释放任何杂质。它是安全、环保且保留100%原味的完美解决方案，为您带来前所未有的碳酸自由体验。
          </p>
        </section>

      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const bubbleContainer = ref(null)

onMounted(() => {
  // Reveal content sections
  gsap.to('.content-section', {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.1
  })

  // Animate bubbles
  const bubbles = gsap.utils.toArray('.bubble')
  
  bubbles.forEach((bubble) => {
    // Randomize initial properties
    gsap.set(bubble, {
      y: Math.random() * window.innerHeight,
      x: (Math.random() * 40) - 20,
    })

    // Continuous rising animation
    gsap.to(bubble, {
      y: -window.innerHeight - 100,
      duration: Math.random() * 10 + 5,
      ease: "none",
      repeat: -1,
      delay: Math.random() * -15 // Start at random progress
    })

    // Side-to-side wobble
    gsap.to(bubble, {
      x: `+=${(Math.random() * 60) - 30}`,
      duration: Math.random() * 3 + 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    })
  })
})
</script>

<style scoped>
/* Optional: Additional styling if needed */
</style>