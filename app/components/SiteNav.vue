<template>
  <header class="site-header">
    <NuxtLink class="brand-link" to="/" aria-label="SCANZ home">
      <img
        class="brand-mark"
        src="/logo.png"
        alt="SCANZ logo – Star Citizen Australia & New Zealand community"
      />
      <span class="brand-text">SCANZ</span>
    </NuxtLink>

    <nav class="site-nav" aria-label="Primary navigation">
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        class="nav-link"
        :to="item.to"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { label: "How to Join", to: "/join" },
  { label: "About SCANZ", to: "/about" },
  { label: "History", to: "/history" },
  { label: "SNIP", to: "/snip" },
];
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  min-height: 72px;
  padding: 0.75rem 1.5rem;
  background: var(--color-bg);
  box-shadow: 0 4px 18px rgb(0 0 0 / 18%);
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 44px;
  padding: 0.35rem 0;
  color: var(--color-text);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-decoration: none;
}

.brand-mark {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.brand-text {
  line-height: 1;
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1.25rem;
}

.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0.5rem 0;
  color: rgb(255 255 255 / 88%);
  font-size: 0.9rem;
  font-weight: 800;
  line-height: 1;
  text-decoration: none;
  transition:
    color 160ms ease,
    transform 160ms ease;
}

.nav-link::after {
  position: absolute;
  right: 0;
  bottom: 0.25rem;
  left: 0;
  height: 3px;
  background: var(--color-accent);
  content: "";
  opacity: 0;
  transform: scaleX(0.35);
  transform-origin: center;
  transition:
    opacity 160ms ease,
    transform 160ms ease;
}

.nav-link:hover,
.nav-link:focus-visible,
.nav-link.router-link-active {
  color: var(--color-accent);
  transform: translateY(-1px);
}

.nav-link:hover::after,
.nav-link:focus-visible::after,
.nav-link.router-link-active::after {
  opacity: 1;
  transform: scaleX(1);
}

.nav-link:focus-visible,
.brand-link:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}

@media (max-width: 760px) {
  .site-header {
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem 1rem 1rem;
  }

  .brand-link {
    justify-content: center;
  }

  .site-nav {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.35rem 1rem;
    width: 100%;
  }

  .nav-link {
    padding: 0.65rem 0;
  }
}
</style>
