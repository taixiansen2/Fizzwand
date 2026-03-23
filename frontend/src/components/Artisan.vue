<template>
  <main class="w-full min-h-screen pt-32 pb-24 px-16 flex flex-col justify-start max-w-screen-2xl mx-auto overflow-hidden">
    <div ref="headerRef" class="mb-16 opacity-0 -translate-x-10">
      <p class="font-label text-xs uppercase tracking-[0.2em] text-primary mb-3">Product Line Strategy</p>
      <h1 class="font-headline text-[3.25rem] font-extrabold tracking-tight text-on-surface leading-tight">
        产品线: <span class="text-primary">雕塑版</span>与联名愿景
      </h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
      <section ref="leftCol" class="space-y-10 opacity-0 translate-y-10">
        <div class="flex items-center gap-4">
          <div class="h-px w-10 bg-primary"></div>
          <h2 class="font-headline text-2xl font-bold tracking-tight text-on-surface">雕塑版 (Artisan)</h2>
        </div>
        <div class="space-y-6 pl-14">
          <div class="aspect-video w-full overflow-hidden rounded-xl bg-surface-container-low mb-8 shadow-sm group">
            <img alt="Artisan" class="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida/ADBb0ugn7Vf5QaTcPMIYI3fx_Lt4kgAeLN1aD0Bz5bHbsxjhoJHazJdCojji0OdDnDCj_L5J_BKXLVkcNkYXZE2VqhIwG6D1ueg27BiDtUD3xSH0bQRmWrwZQaTjbl6e29F4UA4mrpn-y9_B-E6MspPUPFXU4OxPI2MQqONDnUz1hoL6QtYshBhMJpB9AnwlRBgfMeaBuLERhxN4bTw6OU4WIx8-ijnPUBd6q1NZ-wBRn99Tf4sANvVWuev_Fi7E16zqYzBB_cZjRXMsvg" />
          </div>
          <div class="space-y-3">
            <span class="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2.5 py-1 rounded-full inline-block mb-2">Materiality</span>
            <p class="text-on-surface text-lg font-medium leading-relaxed">手工雕刻 925 纯银与大叶紫檀木柄。融合顶级树脂雕花工艺。</p>
          </div>
          <div class="pt-6 flex gap-12 border-t border-outline-variant/15">
            <div class="flex flex-col">
              <span class="text-[10px] uppercase tracking-widest text-outline mb-1">Silver Content</span>
              <span class="text-2xl font-bold text-primary stat-counter" data-target="92.5">0</span><span class="text-2xl font-bold text-primary">%</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[10px] uppercase tracking-widest text-outline mb-1">Handcrafted</span>
              <span class="text-2xl font-bold text-primary stat-counter" data-target="48">0</span><span class="text-2xl font-bold text-primary">h+</span>
            </div>
          </div>
        </div>
      </section>
      <section ref="rightCol" class="space-y-10 opacity-0 translate-y-10">
        <div class="flex items-center gap-4">
          <div class="h-px w-10 bg-primary"></div>
          <h2 class="font-headline text-2xl font-bold tracking-tight text-on-surface">联名愿景 (Co-branding)</h2>
        </div>
        <div class="space-y-8 pl-14">
          <div class="space-y-3 p-6 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors">
            <span class="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2.5 py-1 rounded-full inline-block mb-2">Lifestyle Synergy</span>
            <p class="text-on-surface text-lg font-medium leading-relaxed">跨界联动全球顶尖生活方式品牌。将 FizzWand 融入高净值人群的日常美学空间。</p>
          </div>
          <div class="space-y-3 p-6 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors">
            <span class="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2.5 py-1 rounded-full inline-block mb-2">Limited Editions</span>
            <p class="text-on-surface-variant text-md leading-relaxed">季度性限量配色方案。结合当代艺术家灵感，打造具有时效性与稀缺性的限量款。</p>
          </div>
          <div class="mt-8 flex flex-wrap gap-3">
            <span class="tag px-5 py-1.5 rounded-full bg-surface-container-low text-[10px] font-bold text-on-surface-variant border border-outline-variant/20 tracking-wider uppercase opacity-0 translate-y-5">Lifestyle Collabs</span>
            <span class="tag px-5 py-1.5 rounded-full bg-surface-container-low text-[10px] font-bold text-on-surface-variant border border-outline-variant/20 tracking-wider uppercase opacity-0 translate-y-5">Electric Blue Limits</span>
            <span class="tag px-5 py-1.5 rounded-full bg-primary-container/10 text-[10px] font-bold text-primary tracking-wider uppercase opacity-0 translate-y-5">Global Vision 2024</span>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const headerRef = ref(null)
const leftCol = ref(null)
const rightCol = ref(null)

onMounted(() => {
  gsap.to(headerRef.value, { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" })
  gsap.to(leftCol.value, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 })
  gsap.to(rightCol.value, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.4 })
  gsap.to('.tag', { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)", delay: 0.8 })

  // Number counter animation
  const counters = document.querySelectorAll('.stat-counter')
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'))
    gsap.to(counter, {
      innerHTML: target,
      duration: 2,
      ease: "power2.out",
      delay: 0.5,
      snap: { innerHTML: target % 1 === 0 ? 1 : 0.1 },
      onUpdate: function() {
        if(target % 1 !== 0) {
            counter.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1)
        }
      }
    })
  })
})
</script>