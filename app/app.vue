<template>
  <div class="app-shell">
    <NuxtRouteAnnouncer />
    <main class="app-container">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  min-height: 100%;
  margin: 0;
}

body {
  background: #0f172a;
  color: #f8fafc;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
}

.app-shell {
  min-height: 100vh;
  background: #0f172a;
}

.app-container {
  width: min(100%, 1200px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 24px;
}
</style>
