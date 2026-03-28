<template>
  <div class="flex flex-col w-full bg-white">
    <div id="overview" class="bg-surface-container-low"><Overview /></div>
    <div id="summary" class="bg-gradient-to-b from-surface-container-low to-white"><Summary /></div>
    <div id="inspiration" class="bg-white"><Inspiration /></div>
    <div id="technology" class="bg-gradient-to-b from-white to-surface-container-low"><Technology /></div>
    <div id="products" class="bg-surface-container-low"><Products /></div>
    <div id="artisan" class="bg-gradient-to-b from-surface-container-low to-white"><Artisan /></div>
    <div id="marketing" class="bg-white"><Marketing /></div>
    <div id="vision" class="bg-gradient-to-b from-white to-surface-container-low"><Vision /></div>
    <div id="thanks" class="bg-surface-container-low pb-20"><Thanks /></div>
  </div>
</template>

<script setup>
import Overview from './Overview.vue'
import Summary from './Summary.vue'
import Inspiration from './Inspiration.vue'
import Technology from './Technology.vue'
import Products from './Products.vue'
import Artisan from './Artisan.vue'
import Marketing from './Marketing.vue'
import Vision from './Vision.vue'
import Thanks from './Thanks.vue'
</script>
