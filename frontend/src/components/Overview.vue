<template>
  <main class="relative min-h-screen flex items-center px-12 lg:px-24 pt-20 pb-20 w-full overflow-hidden">
    <div class="absolute inset-0 z-0 bg-white w-full h-full"></div>
    <div class="relative z-10 grid grid-cols-12 w-full max-w-screen-2xl mx-auto items-center gap-8">
      <div ref="textRef" class="col-span-12 lg:col-span-5 flex flex-col items-start opacity-0 translate-y-10">
        <div class="mb-4">
          <span class="inline-block px-3 py-1 bg-secondary-container/30 text-primary font-bold rounded-full text-[10px] tracking-widest uppercase font-label">
            Premium Editorial
          </span>
        </div>
        <h1 class="font-headline font-extrabold text-[4rem] leading-[1.1] text-on-surface tracking-tighter mb-2">
          FizzWand<br/><span class="text-primary font-bold">菲兹旺德</span>
        </h1>
        <div class="h-1 w-24 bg-primary-fixed-dim mb-8"></div>
        <p class="text-[1.75rem] font-headline font-medium text-on-surface-variant leading-tight max-w-md">
          理解您的小习惯
        </p>
        <p class="text-primary/60 font-label text-sm tracking-wider mt-2 uppercase">
          The Magic Wand for Carbonation Freedom
        </p>
        <div class="mt-16 flex gap-4">
          <button @click="$router.push('/summary')" class="px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-primary/10 flex items-center gap-3 transition-transform hover:scale-105">
            了解更多 <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          <button @click="$router.push('/technology')" class="px-8 py-4 bg-white border border-outline-variant/20 text-on-surface font-semibold rounded-xl hover:bg-surface-container-low transition-colors">
            技术规格
          </button>
        </div>
      </div>
      <div ref="imgRef" class="col-span-12 lg:col-span-7 relative h-[600px] flex items-center justify-center opacity-0 translate-x-10">
        <img alt="FizzWand Product" class="w-full h-auto max-h-[80%] object-contain soft-product-shadow" src="https://lh3.googleusercontent.com/aida/ADBb0uilO8rJIEiLoW5BlimyCkN-ZxqVkZ0uH270GIH5o5oYOvb7ExJMg1nxWuIaCax8AnyShiLsx9wS5Rh1JdS7SIRkk6inmceHRxywjGRd4QC4J-LAyYF3iQuwFTx8qq3FqJ3nirBvCF2eCBzL2ipvRtwbYT65407o3rbpbatQUmOXmvoIGRn16LneJzizdMM-7eAXUuFgnQXMJBKTe4rnwueQjPfEgQC8qmpeQbVamOrKfWs2gF-Z6Wn3uKYvzume1_0KBoBLtk_oqw" />
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