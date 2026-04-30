<template>
  <main class="home-page">
    <section class="hero" aria-labelledby="home-title">
      <img
        class="hero-logo"
        src="/logo.png"
        alt="SCANZ logo – Star Citizen Australia & New Zealand community"
      />
      <div class="hero-copy">
        <h1 id="home-title">Star Citizen Australia &amp; New Zealand</h1>
        <div class="hero-actions btn-row" aria-label="Community links">
          <a
            class="btn btn-primary"
            :href="RSI_ORG_URL"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the RSI Org
          </a>
          <a
            class="btn btn-secondary"
            :href="DISCORD_INVITE_URL"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Discord
          </a>
        </div>
        <p class="hero-tagline">Community. Crew. Chaos.</p>
        <a href="#about-title" class="hero-learn-more">
          <span class="hero-learn-more-label">Want to learn more?</span>
          <span class="hero-learn-more-arrow" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m8 15 4 4 4-4" />
            </svg>
          </span>
        </a>
      </div>
    </section>
    <section class="about" aria-labelledby="about-title">
      <div class="section-content container-narrow">
        <h2 id="about-title" class="home-scroll-target">Who are SCANZ?</h2>
        <p>
          <span class="accent-text">SCANZ</span> is a mature, casual Star
          Citizen community based in Australia and New Zealand, but open to
          players everywhere. We're all about creating a friendly, inclusive
          space where everyone can enjoy the game, no matter their experience
          level. You can
          <ScanzTextLink to="/about">learn more about SCANZ</ScanzTextLink>
          before jumping in.
        </p>
        <img
          class="section-image section-image-right"
          src="/scanz-is-wow.png"
          alt="Person pointing to wow text for SCANZ community"
        />
      </div>
    </section>
    <section class="play" aria-labelledby="play-title">
      <div class="section-content container-narrow">
        <h2 id="play-title">Play Your Way!</h2>
        <p>
          Whether you're into intense PvP or laid-back exploration,
          <span class="accent-text">SCANZ</span> offers a place to connect with
          like-minded players and have a great time in the 'verse. You can
          <ScanzTextLink to="/join"
            >join our Star Citizen Australia &amp; New Zealand
            community</ScanzTextLink
          >
          and be part of a community that values camaraderie and fun above all
          else!
        </p>
        <img
          class="section-image section-image-full"
          src="/scanz-is-inclusive.png"
          alt="Diverse group representing SCANZ's inclusive community"
        />
      </div>
    </section>
    <section class="why-join" aria-labelledby="why-join-title">
      <div class="section-content container-narrow">
        <h2 id="why-join-title">Why Join?</h2>
        <p>
          Other orgs might run on the old "Command and Control" model, better
          known as the "Red Tape Model." This means lots of rules, hierarchy,
          and meetings that could've been emails.
        </p>
        <p>
          But at <span class="accent-text">SCANZ</span>, we're all about the
          "Chilli Bin and Conquer" model.
        </p>
        <p>
          The benefits are seriously amazing: less paperwork, more action;
          fewer briefings, more good times. If you want the longer version,
          <ScanzTextLink to="/history"
            >read the history of SCANZ</ScanzTextLink
          >.
        </p>
        <img
          class="section-image section-image-center"
          src="/scanz-is-freedom.png"
          alt="Player freedom contrasted with command and control"
        />
        <p>
          With <span class="accent-text">SCANZ</span>, you get all the
          adventure without the admin.
        </p>
      </div>
    </section>
    <section
      v-if="latestSnipPosts?.length"
      class="snip-latest"
      aria-labelledby="snip-latest-title"
    >
      <div class="section-content container-narrow">
        <h2 id="snip-latest-title">Latest from SNIP</h2>
        <ul class="snip-latest-list">
          <li
            v-for="post in latestSnipPosts"
            :key="snipPostPath(post)"
            class="snip-latest-card surface-card"
          >
            <h3 class="snip-latest-card-title">{{ post.title }}</h3>
            <p class="snip-latest-card-desc">{{ post.description }}</p>
            <NuxtLink class="snip-latest-read" :to="snipPostPath(post)">
              Read post
            </NuxtLink>
          </li>
        </ul>
        <p class="snip-latest-more">
          <ScanzTextLink to="/snip">More on SNIP</ScanzTextLink>
        </p>
      </div>
    </section>
    <ScanzCta
      class="home-cta"
      eyebrow="Ready to fly?"
      title="Join SCANZ"
      body="Looking for a Star Citizen community in Australia or New Zealand? Join the Discord, meet the crew, and start flying with us."
      primary-label="Join Discord"
      :primary-href="DISCORD_INVITE_URL"
      secondary-label="How to Join SCANZ"
      secondary-href="/join"
    />
    <img
      class="bottom-image"
      src="/who-is-scanz.png"
      alt="Person greeting sheep in playful SCANZ illustration"
    />
  </main>
</template>

<script setup lang="ts">
import { DISCORD_INVITE_URL, RSI_ORG_URL } from "../constants/links";

const { data: latestSnipPosts } = await useAsyncData("home-snip-latest", () =>
  queryCollection("snip").order("date", "DESC").limit(3).all(),
);

useScanzSeo({
  title: "SCANZ – Star Citizen Australia & New Zealand Community",
  description:
    "Join SCANZ, the Star Citizen community for Australia & New Zealand players. Fly with a relaxed, social crew—new and experienced pilots welcome.",
  ogTitle: "SCANZ - Star Citizen Australia & New Zealand",
  ogDescription:
    "A mature, casual Star Citizen community for ANZ players, open to every experience level and playstyle.",
  ogImage: "/who-is-scanz.png",
  twitterCard: "summary_large_image",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SCANZ – Star Citizen Australia & New Zealand",
  alternateName: "SCANZ",
  url: "https://wescanz.com",
  logo: "https://wescanz.com/logo.png",
  description:
    "SCANZ is a mature, casual Star Citizen community for players in Australia and New Zealand. Join our Discord and RSI org to explore the verse together.",
  areaServed: [
    {
      "@type": "Country",
      name: "Australia",
    },
    {
      "@type": "Country",
      name: "New Zealand",
    },
  ],
  sameAs: [
    RSI_ORG_URL,
    DISCORD_INVITE_URL,
  ],
};

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(organizationSchema),
    },
  ],
});
</script>

<style scoped>
.home-page {
  min-height: 100%;
  background: var(--color-bg);
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem 5rem;
  flex-direction: column;
  gap: 1.75rem;
  text-align: center;
}

.hero > * {
  width: min(100%, 820px);
  transform: translateY(-4vh);
}

.hero-logo {
  width: min(260px, 72vw);
  height: auto;
  opacity: 0.96;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.hero-copy h1 {
  font-size: clamp(2.25rem, 7vw, 5rem);
  line-height: 0.95;
  letter-spacing: 0.035em;
  text-wrap: balance;
}

.hero-actions {
  margin-top: 1.75rem;
}

.hero-tagline {
  font-size: clamp(1.1rem, 2.4vw, 1.5rem);
  line-height: 1.5;
  color: var(--color-text);
  letter-spacing: 0.08em;
  opacity: 0.9;
}

.hero-learn-more {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.25rem;
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--color-accent);
  text-decoration: none;
  opacity: 0.92;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.hero-learn-more:hover,
.hero-learn-more:focus-visible {
  opacity: 1;
  transform: translateY(2px);
}

.hero-learn-more:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
  border-radius: 4px;
}

.hero-learn-more-arrow {
  display: flex;
  color: var(--color-accent);
  animation: hero-learn-more-bob 2.2s ease-in-out infinite;
}

@keyframes hero-learn-more-bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-learn-more-arrow {
    animation: none;
  }
}

.home-scroll-target {
  scroll-margin-top: 5.5rem;
}

.about,
.play,
.why-join {
  padding: 0 1.5rem 6rem;
}

.snip-latest {
  padding: 0 1.5rem 5rem;
}

.snip-latest h2 {
  margin-bottom: 1.5rem;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1;
  letter-spacing: 0.035em;
  text-align: center;
}

.snip-latest-list {
  display: grid;
  gap: 1.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.snip-latest-card {
  text-align: left;
}

.snip-latest-card-title {
  margin: 0;
  font-size: clamp(1.15rem, 2.5vw, 1.45rem);
  color: var(--color-accent);
  line-height: 1.2;
}

.snip-latest-card-desc {
  margin-top: 0.65rem;
  font-size: clamp(0.98rem, 1.8vw, 1.1rem);
  line-height: 1.6;
  opacity: 0.9;
}

.snip-latest-read {
  display: inline-block;
  margin-top: 1rem;
  color: var(--color-accent);
  font-weight: 800;
  letter-spacing: 0.04em;
  text-decoration: none;
}

.snip-latest-read:hover,
.snip-latest-read:focus-visible {
  text-decoration: underline;
}

.snip-latest-more {
  margin-top: 1.75rem;
  text-align: center;
  font-size: clamp(1.05rem, 2vw, 1.25rem);
}

.home-cta {
  margin-bottom: 6rem;
}

.section-content {
  text-align: center;
}

.section-content h2 {
  margin-bottom: 1.25rem;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1;
  letter-spacing: 0.035em;
}

.section-content p {
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.7;
  color: var(--color-text);
  opacity: 0.9;
}

.section-content p + p {
  margin-top: 1.25rem;
}

.section-image {
  display: block;
  width: min(100%, 420px);
  height: auto;
  margin-top: 2rem;
}

.section-image-center {
  margin-right: auto;
  margin-left: auto;
}

.section-image-full {
  width: 100vw;
  max-width: none;
  margin-right: calc(50% - 50vw);
  margin-left: calc(50% - 50vw);
}

.section-image-right {
  margin-left: auto;
}

.bottom-image {
  display: block;
  width: 100%;
  height: auto;
}

.accent-text {
  color: var(--color-accent);
}

@media (max-width: 640px) {
  .hero,
  .about,
  .play,
  .why-join,
  .snip-latest {
    padding-inline: 1.25rem;
  }

  .hero {
    gap: 1.5rem;
  }

  .hero > * {
    transform: translateY(-2vh);
  }

  .hero-actions {
    width: 100%;
  }
}
</style>
