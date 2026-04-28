<template>
  <main class="snip-page">
    <section class="snip-hero container" aria-labelledby="snip-title">
      <img
        class="snip-image"
        src="/scan-news-information-propaganda.png"
        alt="SNIP broadcast graphic for SCANZ news updates"
      />
      <h1 id="snip-title" class="snip-h1">SNIP</h1>
      <p class="snip-intro">
        SCANZ News, Information &amp; Propaganda — updates, guides, event
        recaps, and community stories from our Star Citizen Australia &amp; New
        Zealand crew.
      </p>
    </section>

    <section class="snip-list-wrap container" aria-label="SNIP articles">
      <ul class="snip-cards">
        <li
          v-for="item in posts ?? []"
          :key="snipPostPath(item)"
          class="snip-card surface-card"
        >
          <h2 class="card-title">{{ item.title }}</h2>
          <p class="card-desc">{{ item.description }}</p>
          <dl class="card-meta">
            <div class="meta-row">
              <dt>Author</dt>
              <dd>{{ item.author }}</dd>
            </div>
            <div class="meta-row">
              <dt>Published</dt>
              <dd>
                <time :datetime="item.date">{{
                  formatSnipPostDate(item.date)
                }}</time>
              </dd>
            </div>
            <div class="meta-row">
              <dt>Category</dt>
              <dd>{{ item.category }}</dd>
            </div>
          </dl>
          <ul
            v-if="item.tags && item.tags.length"
            class="card-tags"
            aria-label="Tags"
          >
            <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
          </ul>
          <NuxtLink class="read-post" :to="snipPostPath(item)">
            Read post
          </NuxtLink>
        </li>
      </ul>
    </section>

    <ScanzCta
      eyebrow="Want more?"
      title="Come Fly With Us"
      body="Join the Discord, meet the crew, and see what SCANZ is doing in the verse."
      primary-label="Join Discord"
      :primary-href="DISCORD_INVITE_URL"
      secondary-label="How to Join SCANZ"
      secondary-href="/join"
    />
  </main>
</template>

<script setup lang="ts">
import { DISCORD_INVITE_URL } from "../../constants/links";

const { data: posts } = await useAsyncData("snip-index", () =>
  queryCollection("snip").order("date", "DESC").all(),
);

useScanzSeo({
  title: "SCANZ News & Updates – Star Citizen ANZ Insights",
  description:
    "Read SCANZ news, event recaps, Star Citizen guides, and updates for Australia and New Zealand players.",
  ogTitle: "SNIP - SCANZ News, Information & Propaganda",
  ogDescription:
    "News, guides, event recaps, and community stories from SCANZ.",
  ogImage: "/scan-news-information-propaganda.png",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.snip-page {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  min-height: calc(100vh - 72px);
  padding: 5rem 1.5rem 6rem;
  background: var(--color-bg);
}

.snip-hero {
  width: min(100%, 900px);
  margin: 0 auto;
  text-align: center;
}

.snip-image {
  display: block;
  width: min(100%, 960px);
  height: auto;
  margin: 0 auto;
  box-shadow: 0 24px 60px rgb(0 0 0 / 24%);
}

.snip-h1 {
  margin-top: 2rem;
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 0.95;
  letter-spacing: 0.035em;
}

.snip-intro {
  max-width: 760px;
  margin: 1.25rem auto 0;
  color: var(--color-text);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.65;
  opacity: 0.9;
}

.snip-list-wrap {
  margin-top: 3.5rem;
}

.snip-cards {
  display: grid;
  gap: 1.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.snip-card {
  text-align: left;
}

.card-title {
  margin: 0;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: var(--color-accent);
  line-height: 1.15;
}

.card-desc {
  margin-top: 0.75rem;
  font-size: clamp(1.02rem, 2vw, 1.15rem);
  line-height: 1.65;
  opacity: 0.9;
}

.card-meta {
  margin: 1.25rem 0 0;
  display: grid;
  gap: 0.35rem;
  font-size: 0.95rem;
}

.meta-row {
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: 0.75rem;
}

.meta-row dt {
  margin: 0;
  font-weight: 700;
  opacity: 0.75;
}

.meta-row dd {
  margin: 0;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.card-tags li {
  padding: 0.2rem 0.55rem;
  border: 1px solid rgb(255 255 255 / 15%);
  border-radius: 999px;
  font-size: 0.78rem;
  opacity: 0.88;
}

.read-post {
  display: inline-flex;
  margin-top: 1.25rem;
  color: var(--color-accent);
  font-weight: 800;
  text-decoration: none;
  letter-spacing: 0.04em;
}

.read-post:hover,
.read-post:focus-visible {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .snip-page {
    min-height: calc(100vh - 164px);
    padding: 3.5rem 1.25rem 5rem;
  }

  .meta-row {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }

  .meta-row dt {
    font-size: 0.82rem;
  }
}
</style>
