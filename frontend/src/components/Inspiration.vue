<template>
  <main class="min-h-screen flex items-center justify-center bg-transparent w-full">
    <div class="w-full h-full max-w-none grid grid-cols-1 md:grid-cols-2 bg-transparent relative pt-24 md:pt-0">
      <div ref="textRef" class="flex flex-col justify-center px-8 md:px-24 py-12 z-10 opacity-0 translate-y-10 max-w-screen-xl mx-auto md:mx-0 w-full">
        <div class="mb-6">
          <span class="text-primary font-headline text-sm font-bold tracking-[0.2em] uppercase">Inspiration</span>
          <div class="h-1 w-12 bg-primary-container mt-2"></div>
        </div>
        <h1 class="font-headline text-4xl md:text-[3.5rem] leading-tight font-extrabold text-on-surface mb-6 md:mb-8 tracking-tighter">灵感与背景</h1>
        <div class="mb-12">
          <p class="text-2xl font-light text-on-surface-variant italic border-l-4 border-primary-container pl-6 leading-relaxed">“理解您的小习惯”</p>
        </div>
        <div class="max-w-md space-y-6">
          <p class="text-lg leading-relaxed text-on-surface-variant font-body">对于<span class="text-primary font-semibold px-1">肠胃敏感</span>的饮者而言，气泡水带来的不仅仅是清爽，往往还伴随着胀气与不适。市面上极少有产品关注到碳酸口感与生理舒适之间的微妙平衡。</p>
          <p class="text-lg leading-relaxed text-on-surface-variant font-body">FizzWand 的诞生，旨在让您的饮用体验更加轻盈。通过创新的除气技术，我们让每一口饮品都回归纯净，将繁琐的化学过程简化为一次指尖的“魔法”。</p>
        </div>
      </div>
      <div ref="imgRef" class="relative overflow-hidden h-full min-h-[400px] md:min-h-screen opacity-0 w-full flex-grow flex items-stretch">
        <img alt="FizzWand Close Up" class="w-full h-full object-cover min-h-[400px] md:min-h-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_bRArX9d9SFpU1GS0cFODORlPxbsa6oEmRGtrJ9MaQy4AfWahFjNm_xd6_LjCWvAWSDW9IaBaIVFVZcnAsy6qAVNDXkjDvkHHsLc5R6AjmPfenVAL0vRS_fkWPYxTqrWQwzUvCgNpI0ie_ererMOPDI5SS6ad6lQ7WGuHJf7k2SzwUxIiM-p_6KsmSZIP8KWYHPs0UYD3Z-riVoiLeW9fycwdnh2GBuUqDNuPHSDXh6cVwZuVifncoOsLtIpFFhXq92CCKx_o2oI" />
        <div class="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
        <div class="absolute top-12 right-12 mix-blend-overlay opacity-30 select-none pointer-events-none">
          <span class="font-headline text-8xl font-extrabold tracking-tighter">FIZZ</span>
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
    opacity: 1,
    duration: 1.5,
    ease: "power2.inOut",
    delay: 0.4
  })
  
  // Parallax effect on image
  gsap.fromTo(imgRef.value.querySelector('img'), 
    { scale: 1.1, transformOrigin: 'center center' },
    { scale: 1, duration: 2, ease: "power2.out", delay: 0.4 }
  )
})
</script>