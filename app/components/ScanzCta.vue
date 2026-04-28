<template>
  <section class="scanz-cta" :class="`scanz-cta-${variant}`">
    <p v-if="eyebrow" class="scanz-cta-eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p class="scanz-cta-body">{{ body }}</p>

    <div class="hero-actions" aria-label="Next steps">
      <a
        v-if="isExternal(primaryHref)"
        class="button button-primary"
        :href="primaryHref"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ primaryLabel }}
      </a>
      <NuxtLink v-else class="button button-primary" :to="primaryHref">
        {{ primaryLabel }}
      </NuxtLink>

      <template v-if="secondaryLabel && secondaryHref">
        <a
          v-if="isExternal(secondaryHref)"
          class="button button-secondary"
          :href="secondaryHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ secondaryLabel }}
        </a>
        <NuxtLink v-else class="button button-secondary" :to="secondaryHref">
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.875rem;
  margin-top: 1.5rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  min-height: 48px;
  padding: 0.85rem 1.25rem;
  border: 1px solid var(--color-accent);
  border-radius: 999px;
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    transform 160ms ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
}

.button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}

.button-primary {
  background: var(--color-accent);
}

.button-primary:hover,
.button-primary:focus-visible {
  background: #ff6a35;
  border-color: #ff6a35;
}

.button-secondary {
  background: rgb(0 0 0 / 12%);
}

.button-secondary:hover,
.button-secondary:focus-visible {
  background: var(--color-accent);
}

@media (max-width: 640px) {
  .hero-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .button {
    width: 100%;
  }
}
</style>
