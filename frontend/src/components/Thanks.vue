<template>
  <main class="w-full min-h-screen flex items-center justify-center p-4 md:p-20 pt-24 pb-20 md:pt-24 md:pb-20 overflow-hidden">
    <div class="canvas-16-9 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] relative overflow-hidden flex flex-col justify-center items-center py-16 px-6 md:p-20 mx-auto rounded-3xl w-full max-w-[1400px] h-[85vh] md:h-auto min-h-[550px]">
      <div class="absolute top-[-20%] right-[-10%] w-[50%] h-[70%] bg-primary-container/20 rounded-full blur-[140px] animate-pulse-slow"></div>
      <div class="absolute bottom-[-20%] left-[-10%] w-[40%] h-[60%] bg-secondary-container/20 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s"></div>
      
      <div class="absolute top-6 left-6 md:top-16 md:left-16">
        <span class="text-primary font-headline font-bold text-xs md:text-sm tracking-[0.2em] uppercase opacity-60">Slide title: '致谢'</span>
      </div>
      
      <div class="relative z-10 text-center flex flex-col items-center gap-8 w-full">
        <h1 ref="titleRef" class="font-headline font-extrabold text-[3.5rem] leading-[1.1] md:text-8xl lg:text-9xl tracking-tighter mb-4 signature-gradient-text opacity-0 translate-y-10">
          谢谢观看
        </h1>
        <p ref="subtitleRef" class="font-headline text-lg md:text-3xl font-light text-on-surface-variant tracking-wide opacity-0 translate-y-10 mt-2">
          期待与您共同开启<span class="font-medium text-primary">碳酸自由</span>的魔法之旅
        </p>
        
        <div class="h-6 md:h-16"></div>
        
        <div ref="cardsRef" class="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center w-full opacity-0 translate-y-10">
          <div class="bg-surface-container-low px-6 py-4 md:px-8 md:py-5 rounded-2xl flex items-center gap-4 md:gap-5 w-full md:w-auto min-w-[280px] border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow group">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-container/20 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
              <span class="material-symbols-outlined text-primary text-xl md:text-2xl" style="font-variation-settings: 'FILL' 1">person</span>
            </div>
            <div class="text-left overflow-hidden">
              <span class="block text-[10px] uppercase tracking-widest text-outline mb-0.5 md:mb-1">创始人 / Founder</span>
              <span class="font-headline font-bold text-lg md:text-xl text-on-surface">太子瑞</span>
            </div>
          </div>
          <div class="bg-surface-container-low px-6 py-4 md:px-8 md:py-5 rounded-2xl flex items-center gap-4 md:gap-5 w-full md:w-auto min-w-[280px] border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow group">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary-container flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
              <span class="material-symbols-outlined text-primary text-xl md:text-2xl" style="font-variation-settings: 'FILL' 1">mail</span>
            </div>
            <div class="text-left overflow-hidden">
              <span class="block text-[10px] uppercase tracking-widest text-outline mb-0.5 md:mb-1">商业企划 / Contact</span>
              <span class="font-headline font-bold text-base md:text-xl text-on-surface truncate block">support@tea.college</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-6 right-6 md:bottom-16 md:right-16 flex items-center gap-4">
        <div class="w-16 h-[2px] bg-primary"></div>
        <span class="font-headline font-black text-2xl text-on-surface/10 tracking-tighter uppercase">FizzWand</span>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const titleRef = ref(null)
const subtitleRef = ref(null)
const cardsRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.2 })
  
  tl.to(titleRef.value, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  })
  .to(subtitleRef.value, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.6")
  .to(cardsRef.value, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.4")
})
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse-slow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}
</style>