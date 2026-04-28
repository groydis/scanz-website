<template>
  <main class="snip-page">
    <section class="snip-hero" aria-labelledby="snip-title">
      <h1 id="snip-title" class="sr-only">
        SCANZ News, Information &amp; Propaganda
      </h1>
      <img
        class="snip-image"
        src="/scan-news-information-propaganda.png"
        alt="SNIP broadcast graphic for SCANZ news updates"
      />
      <p class="coming-soon">Coming Soon</p>
    </section>

    <ScanzCta
      eyebrow="While SNIP spins up"
      title="Come Fly With Us"
      body="News and recaps are coming. For now, join the Discord and see what SCANZ is doing in the verse."
      primary-label="Join Discord"
      :primary-href="DISCORD_INVITE_URL"
      secondary-label="How to Join SCANZ"
      secondary-href="/join"
    />
  </main>
</template>

<script setup lang="ts">
import { DISCORD_INVITE_URL } from "../constants/links";

useSeoMeta({
  title: "SCANZ News & Updates – Star Citizen ANZ Insights",
  description:
    "Stay updated with SCANZ news, events, and Star Citizen updates for Australia & New Zealand players. See what the crew’s been up to.",
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
  flex-direction: column;
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
