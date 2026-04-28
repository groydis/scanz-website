<template>
  <a
    v-if="isExternalLink"
    class="text-link"
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
  <NuxtLink v-else class="text-link" :to="to">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to: string;
    external?: boolean;
  }>(),
  {
    external: undefined,
  },
);

const isExternalLink = computed(
  () => props.external ?? props.to.startsWith("http"),
);
</script>

<style scoped>
.text-link {
  color: var(--color-accent);
  font-weight: 800;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.2em;
}

.text-link:hover,
.text-link:focus-visible {
  color: #ff6a35;
}

.text-link:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}
</style>
