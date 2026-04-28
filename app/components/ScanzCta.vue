<template>
  <section class="scanz-cta" :class="`scanz-cta-${variant}`">
    <p v-if="eyebrow" class="scanz-cta-eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p class="scanz-cta-body">{{ body }}</p>

    <div class="hero-actions btn-row" aria-label="Next steps">
      <a
        v-if="isExternal(primaryHref)"
        class="btn btn-primary"
        :href="primaryHref"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ primaryLabel }}
      </a>
      <NuxtLink v-else class="btn btn-primary" :to="primaryHref">
        {{ primaryLabel }}
      </NuxtLink>

      <template v-if="secondaryLabel && secondaryHref">
        <a
          v-if="isExternal(secondaryHref)"
          class="btn btn-secondary"
          :href="secondaryHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ secondaryLabel }}
        </a>
        <NuxtLink v-else class="btn btn-secondary" :to="secondaryHref">
          {{ secondaryLabel }}
        </NuxtLink>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    variant?: "default" | "compact";
  }>(),
  {
    eyebrow: undefined,
    secondaryLabel: undefined,
    secondaryHref: undefined,
    variant: "default",
  },
);

const isExternal = (href: string) => href.startsWith("http");
</script>

<style scoped>
.scanz-cta {
  width: min(100%, 900px);
  margin: 4rem auto 0;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: rgb(245 77 20 / 8%);
  border: 1px solid rgb(245 77 20 / 42%);
  box-shadow: 0 18px 45px rgb(0 0 0 / 14%);
  text-align: center;
}

.scanz-cta-compact {
  margin-top: 2rem;
}

.scanz-cta-eyebrow {
  margin-bottom: 0.75rem;
  color: var(--color-accent);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.scanz-cta h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1;
  letter-spacing: 0.035em;
}

.scanz-cta-body {
  max-width: 720px;
  margin: 1rem auto 0;
  color: var(--color-text);
  font-size: clamp(1.02rem, 2vw, 1.2rem);
  line-height: 1.7;
  opacity: 0.9;
}

.hero-actions {
  margin-top: 1.5rem;
}
</style>
