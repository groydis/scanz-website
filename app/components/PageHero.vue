<template>
  <section class="page-hero" :class="sectionClass" :aria-labelledby="titleId">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h1 :id="titleId">{{ title }}</h1>
    <slot />
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    titleId: string;
    title: string;
    eyebrow?: string;
    sectionClass?: string;
  }>(),
  {
    eyebrow: undefined,
    sectionClass: "",
  },
);
</script>
