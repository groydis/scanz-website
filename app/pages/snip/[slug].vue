<template>
  <main v-if="post" class="snip-post-page">
    <div class="container">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <NuxtLink to="/">Home</NuxtLink>
        <span class="bc-sep" aria-hidden="true">/</span>
        <NuxtLink to="/snip">SNIP</NuxtLink>
        <span class="bc-sep" aria-hidden="true">/</span>
        <span class="bc-current">{{ post.title }}</span>
      </nav>

      <article class="snip-article surface-card content-prose">
        <header class="post-header">
          <h1 id="post-title">{{ post.title }}</h1>
          <p class="post-meta">
            <span>{{ post.author }}</span>
            <span class="meta-sep" aria-hidden="true">·</span>
            <time :datetime="post.date">{{
              formatSnipPostDate(post.date)
            }}</time>
            <span class="meta-sep" aria-hidden="true">·</span>
            <span>{{ post.category }}</span>
          </p>
          <ul
            v-if="post.tags && post.tags.length"
            class="post-tags"
            aria-label="Tags"
          >
            <li v-for="tag in post.tags" :key="tag" class="post-tag">
              {{ tag }}
            </li>
          </ul>
        </header>

        <div class="post-body content-renderer-wrap">
          <ContentRenderer v-if="post" :value="post" />
        </div>
      </article>

      <ScanzCta
        class="post-cta"
        variant="compact"
        eyebrow="Looking for a crew?"
        title="Join the SCANZ Community"
        body="SCANZ is an active Star Citizen community for Australia and New Zealand players. Jump into Discord, meet the crew, and start flying with us."
        primary-label="Join Discord"
        :primary-href="DISCORD_INVITE_URL"
        secondary-label="How to Join SCANZ"
        secondary-href="/join"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { DISCORD_INVITE_URL } from "../../constants/links";

const route = useRoute();
const slug = computed(() => {
  const p = route.params.slug;
  return Array.isArray(p) ? p[0]! : String(p ?? "");
});

const postPath = computed(() => `/snip/${slug.value}`);

const { data: post } = await useAsyncData(
  () => `snip-post-${slug.value}`,
  () => queryCollection("snip").path(postPath.value).first(),
  { watch: [slug] },
);

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
  });
}

const p = post.value;
const pageTitle = `${p.title} | SCANZ`;

useScanzSeo({
  title: pageTitle,
  description: p.description,
  ogTitle: pageTitle,
  ogDescription: p.description,
  ogImage: "/logo.png",
  twitterCard: "summary_large_image",
});

const site = "https://wescanz.com";
const canonicalPath = postPath.value;

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${site}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "SNIP",
      item: `${site}/snip`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: p.title,
      item: `${site}${canonicalPath}`,
    },
  ],
};

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(breadcrumbJsonLd),
    },
  ],
});
</script>

<style scoped>
.snip-post-page {
  padding: 5rem 1.5rem 6rem;
  background: var(--color-bg);
  min-height: calc(100vh - 72px);
}

.breadcrumbs {
  margin-bottom: 1.75rem;
  font-size: 0.92rem;
  opacity: 0.88;
}

.breadcrumbs a {
  color: var(--color-accent);
  text-decoration: none;
}

.breadcrumbs a:hover,
.breadcrumbs a:focus-visible {
  text-decoration: underline;
}

.bc-sep {
  margin: 0 0.5rem;
  opacity: 0.55;
}

.bc-current {
  opacity: 0.95;
}

.snip-article {
  padding: clamp(1.5rem, 4vw, 2.25rem);
}

.post-header {
  margin-bottom: 1.5rem;
  text-align: center;
}

.post-header h1 {
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.08;
  letter-spacing: 0.03em;
  text-wrap: balance;
}

.post-meta {
  margin-top: 1rem;
  font-size: clamp(1rem, 2vw, 1.15rem);
  opacity: 0.9;
}

.meta-sep {
  margin: 0 0.35rem;
  opacity: 0.65;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.post-tag {
  padding: 0.25rem 0.65rem;
  border: 1px solid rgb(255 255 255 / 18%);
  border-radius: 999px;
  font-size: 0.82rem;
  opacity: 0.92;
}

.post-body {
  margin-top: 2rem;
  text-align: left;
}

.content-renderer-wrap :deep(h2) {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  font-size: clamp(1.35rem, 3vw, 1.85rem);
}

.content-renderer-wrap :deep(h2:first-of-type) {
  margin-top: 0;
}

.content-renderer-wrap :deep(p),
.content-renderer-wrap :deep(li) {
  color: var(--color-text);
  font-size: clamp(1.02rem, 2vw, 1.2rem);
  line-height: 1.7;
  opacity: 0.9;
}

.content-renderer-wrap :deep(p) {
  margin-top: 1rem;
}

.content-renderer-wrap :deep(ul) {
  margin: 1rem 0 0;
  padding-left: 1.3rem;
}

.content-renderer-wrap :deep(li)::marker {
  color: var(--color-accent);
}

.content-renderer-wrap :deep(a) {
  color: var(--color-accent);
  font-weight: 700;
}

.post-cta {
  margin-top: 3rem;
}

@media (max-width: 640px) {
  .snip-post-page {
    min-height: calc(100vh - 164px);
    padding: 3.5rem 1.25rem 5rem;
  }
}
</style>
