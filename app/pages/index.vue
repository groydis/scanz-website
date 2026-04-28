<template>
  <main class="home-page">
    <section class="hero" aria-labelledby="home-title">
      <img class="hero-logo" src="/logo.png" alt="SCANZ" />
      <div class="hero-copy">
        <h1 id="home-title">Star Citizen Australia &amp; New Zealand</h1>
        <div class="hero-actions" aria-label="Community links">
          <a
            class="button button-primary"
            href="https://robertsspaceindustries.com/en/orgs/scanz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the RSI Org
          </a>
          <a
            class="button button-secondary"
            href="https://discord.gg/3atj8pjhFH"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Discord
          </a>
        </div>
        <p>Community. Crew. Chaos.</p>
      </div>
    </section>
    <section class="about" aria-labelledby="about-title">
      <div class="section-content">
        <h2 id="about-title">Who are SCANZ?</h2>
        <p>
          <span class="accent-text">SCANZ</span> is a mature, casual Star
          Citizen community based in Australia and New Zealand, but open to
          players everywhere. We're all about creating a friendly, inclusive
          space where everyone can enjoy the game, no matter their experience
          level.
        </p>
        <img
          class="section-image section-image-right"
          src="/scanz-is-wow.png"
          alt="SCANZ is wow"
        />
      </div>
    </section>
    <section class="play" aria-labelledby="play-title">
      <div class="section-content">
        <h2 id="play-title">Play Your Way!</h2>
        <p>
          Whether you're into intense PvP or laid-back exploration,
          <span class="accent-text">SCANZ</span> offers a place to connect with
          like-minded players and have a great time in the 'verse. Join us and
          be part of a community that values camaraderie and fun above all else!
        </p>
        <img
          class="section-image section-image-full"
          src="/scanz-is-inclusive.png"
          alt="SCANZ is inclusive"
        />
      </div>
    </section>
    <section class="why-join" aria-labelledby="why-join-title">
      <div class="section-content">
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
          fewer briefings, more good times.
        </p>
        <img
          class="section-image section-image-center"
          src="/scanz-is-freedom.png"
          alt="SCANZ is freedom"
        />
        <p>
          With <span class="accent-text">SCANZ</span>, you get all the
          adventure without the admin.
        </p>
      </div>
    </section>
    <section class="final-cta" aria-labelledby="final-cta-title">
      <div class="section-content">
        <h2 id="final-cta-title">This Sounds Mint!</h2>
        <p>What are you waiting for then?</p>
        <div class="hero-actions" aria-label="Join SCANZ">
          <a
            class="button button-primary"
            href="https://robertsspaceindustries.com/en/orgs/scanz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the RSI Org
          </a>
          <a
            class="button button-secondary"
            href="https://discord.gg/3atj8pjhFH"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Discord
          </a>
        </div>
      </div>
    </section>
    <img
      class="bottom-image"
      src="/who-is-scanz.png"
      alt="Who is SCANZ"
    />
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "SCANZ – Star Citizen Australia & New Zealand Community",
  description:
    "Join SCANZ, a mature and casual Star Citizen community for Australia and New Zealand players. Find crew, join events, and play your way.",
  ogTitle: "SCANZ - Star Citizen Australia & New Zealand",
  ogDescription:
    "A mature, casual Star Citizen community for ANZ players, open to every experience level and playstyle.",
  ogImage: "/who-is-scanz.png",
  twitterCard: "summary_large_image",
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.875rem;
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
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1;
  color: var(--color-text);
  text-decoration: none;
  transition:
    background-color 160ms ease,
    color 160ms ease,
    transform 160ms ease,
    border-color 160ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button-primary {
  background: var(--color-accent);
}

.button-primary:hover {
  background: #ff6a35;
  border-color: #ff6a35;
}

.button-secondary {
  background: rgb(0 0 0 / 12%);
}

.button-secondary:hover {
  background: var(--color-accent);
}

.hero-copy p {
  font-size: clamp(1.1rem, 2.4vw, 1.5rem);
  line-height: 1.5;
  color: var(--color-text);
  letter-spacing: 0.08em;
  opacity: 0.9;
}

.about,
.play,
.why-join,
.final-cta {
  padding: 0 1.5rem 6rem;
}

.section-content {
  width: min(100%, 780px);
  margin: 0 auto;
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

.section-content .hero-actions {
  margin-top: 1.75rem;
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
  .final-cta {
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
    flex-direction: column;
    align-items: stretch;
  }

  .button {
    width: 100%;
  }
}
</style>
