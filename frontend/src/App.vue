<template>
  <div class="min-h-screen flex flex-col bg-surface-container-low w-full relative">
    <header class="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shadow-sm">
      <div class="flex justify-between items-center w-full px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
        <router-link to="/" class="text-2xl font-black text-slate-900 dark:text-white tracking-tighter font-headline z-[60]">FizzWand</router-link>
        
        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-6">
          <router-link v-for="item in navItems" :key="item.hash" :to="{ path: '/', hash: item.hash }"
            :class="['font-manrope font-bold tracking-tight text-sm transition-colors',
              $route.hash === item.hash || ($route.hash === '' && item.hash === '#overview') ? 'text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-500 pb-1' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100']">
            {{ item.name }}
          </router-link>
        </nav>
        
        <!-- Mobile Nav Toggle -->
        <div class="flex items-center gap-4 md:hidden z-[60]">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-slate-900 dark:text-white focus:outline-none">
            <span class="material-symbols-outlined text-3xl">{{ isMobileMenuOpen ? 'close' : 'menu' }}</span>
          </button>
        </div>
      </div>
      
      <!-- Mobile Nav Menu Overlay -->
      <transition name="slide-down">
        <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl z-50 flex flex-col items-center justify-center h-screen w-screen md:hidden">
          <nav class="flex flex-col items-center gap-8 w-full px-8">
            <router-link v-for="item in navItems" :key="item.hash" :to="{ path: '/', hash: item.hash }" @click="isMobileMenuOpen = false"
              :class="['font-headline font-bold tracking-wider text-2xl transition-colors w-full text-center py-2',
                $route.hash === item.hash || ($route.hash === '' && item.hash === '#overview') ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-600 dark:text-slate-300 active:text-slate-900']">
              {{ item.name }}
            </router-link>
          </nav>
        </div>
      </transition>
    </header>

    <div class="flex-grow w-full relative pt-16">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    
    <footer class="fixed bottom-0 w-full py-2 md:py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-t border-slate-100 dark:border-slate-800/50 z-40">
      <div class="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 w-full gap-2 md:gap-4 max-w-screen-2xl mx-auto">
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
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Overview', hash: '#overview' },
  { name: 'Summary', hash: '#summary' },
  { name: 'Inspiration', hash: '#inspiration' },
  { name: 'Technology', hash: '#technology' },
  { name: 'Products', hash: '#products' },
  { name: 'Artisan', hash: '#artisan' },
  { name: 'Marketing', hash: '#marketing' },
  { name: 'Vision', hash: '#vision' },
  { name: 'Thanks', hash: '#thanks' }
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

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

#app {
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  border: none;
}
</style>
