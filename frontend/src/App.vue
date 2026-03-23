<template>
  <div class="min-h-screen flex flex-col bg-surface-container-low w-full relative">
    <header class="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shadow-sm">
      <div class="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <router-link to="/" class="text-2xl font-black text-slate-900 dark:text-white tracking-tighter font-headline">FizzWand</router-link>
        <nav class="hidden md:flex items-center gap-6">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path"
            :class="['font-manrope font-bold tracking-tight text-sm transition-colors',
              $route.path === item.path ? 'text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-500 pb-1' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100']">
            {{ item.name }}
          </router-link>
        </nav>
        <div class="flex items-center gap-4">
          <span class="material-symbols-outlined cursor-pointer hover:bg-slate-50/50 p-2 rounded-full transition-all">more_vert</span>
        </div>
      </div>
    </header>
    <div class="flex-grow w-full relative">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <footer class="fixed bottom-0 w-full py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-t border-slate-100 dark:border-slate-800/50 z-50">
      <div class="flex flex-col md:flex-row justify-between items-center px-12 w-full gap-4 max-w-screen-2xl mx-auto">
        <div class="text-[10px] font-bold text-slate-400">FizzWand Tech-Lifestyle</div>
        <div class="font-inter text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">
          © 2024 FizzWand. All rights reserved.
        </div>
        <div class="flex gap-6">
          <a class="font-inter text-[10px] uppercase tracking-widest text-slate-400 hover:text-cyan-500 transition-colors" href="#">Privacy</a>
          <a class="font-inter text-[10px] uppercase tracking-widest text-slate-400 hover:text-cyan-500 transition-colors" href="#">Terms</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const navItems = [
  { name: 'Overview', path: '/' },
  { name: 'Summary', path: '/summary' },
  { name: 'Inspiration', path: '/inspiration' },
  { name: 'Technology', path: '/technology' },
  { name: 'Products', path: '/products' },
  { name: 'Artisan', path: '/artisan' },
  { name: 'Marketing', path: '/marketing' },
  { name: 'Vision', path: '/vision' },
  { name: 'Thanks', path: '/thanks' }
];
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
#app {
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  border: none;
}
</style>
