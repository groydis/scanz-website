<template>
  <div class="site-shell">
    <SiteNav />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import SiteNav from "./components/SiteNav.vue";
</script>

<style scoped>
.site-shell {
  min-height: 100%;
  background: var(--color-bg);
}
</style>
