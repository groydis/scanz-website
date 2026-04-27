<template>
  <main class="snip-page">
    <section class="snip-hero" aria-labelledby="snip-title">
      <h1 id="snip-title" class="sr-only">
        SCANZ News, Information &amp; Propaganda
      </h1>
      <img
        class="snip-image"
        src="/scan-news-information-propaganda.png"
        alt="SNIP - SCANZ News Information and Propaganda"
      />
      <p class="coming-soon">Coming Soon</p>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "SNIP",
  description:
    "SNIP is the home of SCANZ news, information, and propaganda for the Star Citizen Australia & New Zealand community.",
  ogTitle: "SNIP - SCANZ News, Information & Propaganda",
  ogDescription:
    "News, information, and propaganda from the SCANZ Star Citizen community.",
  ogImage: "/scan-news-information-propaganda.png",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.snip-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
  padding: 5rem 1.5rem 6rem;
  background: var(--color-bg);
}

.snip-hero {
  width: min(100%, 900px);
  margin: 0 auto;
  text-align: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.snip-image {
  display: block;
  width: min(100%, 960px);
  height: auto;
  margin: 0 auto;
  box-shadow: 0 24px 60px rgb(0 0 0 / 24%);
}

.coming-soon {
  margin-top: 2rem;
  color: var(--color-accent);
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 640px) {
  .snip-page {
    min-height: calc(100vh - 164px);
    padding: 3.5rem 1.25rem 5rem;
  }
}
</style>
