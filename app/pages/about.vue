<template>
  <main class="about-page">
    <section class="about-hero" aria-labelledby="about-title">
      <p class="eyebrow">About SCANZ</p>
      <h1 id="about-title">People come first. The org comes second.</h1>
      <p>
        <strong>Star Citizen Australia &amp; New Zealand (SCANZ)</strong> is a
        community-first organisation built around one simple idea.
      </p>
      <p>
        We're here to create a space where players can enjoy Star Citizen their
        way, without pressure, without ego, and without being told how to play.
      </p>
    </section>

    <section class="about-content" aria-label="About SCANZ details">
      <article class="about-card">
        <h2>Who We Are</h2>
        <p>
          SCANZ is a Star Citizen community built around one simple idea:
          community first, gameplay second.
        </p>
        <p>
          We're a group of Australian and New Zealand players who enjoy the game
          for what it is: chaotic, unpredictable, and better with other people.
        </p>
        <p>
          Some of us have been around for years. Others joined yesterday. What
          matters is that when you jump in, there's always someone to fly with.
        </p>
      </article>

      <article class="about-card">
        <h2>Our Values</h2>
        <div class="feature-grid">
          <div class="feature-item">
            <h3>No Ego</h3>
            <p>
              No one cares what ship you own or how long you've been playing.
              We're here to enjoy the game, not measure ourselves against each
              other.
            </p>
          </div>
          <div class="feature-item">
            <h3>All Gameplay Is Valid</h3>
            <p>
              Combat, hauling, mining, salvaging, exploring, or just figuring
              things out: it all counts. We don't force roles or tell you how to
              play Star Citizen.
            </p>
          </div>
          <div class="feature-item">
            <h3>Help First, Gatekeep Never</h3>
            <p>
              New players aren't a burden. They're future crew. If you're
              learning, we'll help you get comfortable, get set up, and actually
              enjoy the game.
            </p>
          </div>
          <div class="feature-item">
            <h3>Play Together, Not Alone</h3>
            <p>
              Star Citizen is at its best when things go wrong with other
              people. Whether it's planned operations or spontaneous chaos, we
              lean into playing as a group.
            </p>
          </div>
        </div>
      </article>

      <article class="about-card about-card-accent">
        <h2>Why Join an Australian Star Citizen Org</h2>
        <p>Playing in the right timezone changes everything.</p>
        <p>
          SCANZ is built around Australia and New Zealand evenings, which means
          you'll actually find people online when you are, events happen at times
          that make sense, and you're not trying to sync with EU or US schedules
          at 3am.
        </p>
        <p>
          If you've ever joined an org and found it empty when you log in, this
          fixes that. Start here to
          <ScanzTextLink to="/join"
            >join our Australian Star Citizen org</ScanzTextLink
          >.
        </p>
      </article>

      <article class="about-card">
        <h2>Benefits of a New Zealand &amp; Australian Star Citizen Guild</h2>
        <p>
          Being part of an ANZ-focused Star Citizen community like SCANZ means
          consistent group gameplay during AU/NZ peak hours, regular events and
          operations without strict attendance, access to experienced players
          across all game loops, and a social Discord where people are actually
          active.
        </p>
        <p>
          It's less about structure, more about having a reliable crew ready to
          jump in. You can also
          <ScanzTextLink to="/history"
            >learn how SCANZ grew into an ANZ Star Citizen
            community</ScanzTextLink
          >.
        </p>
      </article>

      <article class="about-card">
        <h2>Leadership &amp; Structure</h2>
        <p>
          SCANZ is run by a small group of officers and custodians who keep
          things moving behind the scenes.
        </p>
        <p>
          They organise events, help new members get started, and make sure the
          community stays active and welcoming.
        </p>
        <p>
          There's no rigid hierarchy or rank grind: just people putting in the
          effort to keep things running smoothly.
        </p>
      </article>

      <article class="about-card">
        <h2>What Makes SCANZ Different</h2>
        <p>A lot of Star Citizen orgs focus on structure, roles, and control.</p>
        <p>We don't.</p>
        <p>
          SCANZ works because people join because they want to be here, there's
          no pressure to play a certain way, and the focus is on the experience,
          not the outcome.
        </p>
        <p>
          We're not trying to be the biggest org. We're trying to be the one
          people actually stick around in.
        </p>
      </article>

      <article class="about-card">
        <h2>Who SCANZ Is For</h2>
        <p>
          You'll fit in here if you want people to play with consistently, enjoy
          group gameplay without strict rules, are new and want help getting
          started, or are experienced and just want a solid crew.
        </p>
        <p>
          You probably won't enjoy it if you're looking for rigid
          chain-of-command gameplay, want to min-max everything at all times, or
          prefer playing solo 100% of the time.
        </p>
      </article>

      <ScanzCta
        variant="compact"
        eyebrow="Your kind of crew?"
        title="Ready to Fly With Us?"
        body="If SCANZ sounds like your kind of crew, jump into Discord and come say hi. No pressure — just see if it feels right."
        primary-label="Join Discord"
        :primary-href="DISCORD_INVITE_URL"
        secondary-label="How to Join SCANZ"
        secondary-href="/join"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { DISCORD_INVITE_URL } from "../constants/links";

useSeoMeta({
  title: "About SCANZ – Australian & NZ Star Citizen Organisation",
  description:
    "Learn about SCANZ, a laid-back Star Citizen organisation for Australian & New Zealand players. Community-first, no ego, all playstyles welcome.",
  ogTitle: "About SCANZ",
  ogDescription:
    "SCANZ is a community-first Star Citizen organisation where players can enjoy the game their way.",
  ogImage: "/scanz-is-inclusive.png",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.about-page {
  min-height: 100%;
  padding: 5rem 1.5rem 6rem;
  background: var(--color-bg);
}

.about-hero,
.about-content {
  width: min(100%, 900px);
  margin: 0 auto;
}

.about-hero {
  text-align: center;
}

.eyebrow {
  margin-bottom: 0.75rem;
  color: var(--color-accent);
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.about-hero h1 {
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 0.95;
  letter-spacing: 0.035em;
  text-wrap: balance;
}

.about-hero p {
  max-width: 760px;
  margin: 1.25rem auto 0;
  color: var(--color-text);
  font-size: clamp(1.1rem, 2.2vw, 1.35rem);
  line-height: 1.65;
  opacity: 0.9;
}

.about-hero strong,
.accent-line,
.closing-line {
  color: var(--color-accent);
}

.about-content {
  display: grid;
  gap: 1.25rem;
  margin-top: 4rem;
}

.about-card {
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: rgb(255 255 255 / 4%);
  border: 1px solid rgb(255 255 255 / 10%);
  box-shadow: 0 18px 45px rgb(0 0 0 / 14%);
}

.about-card-accent,
.final-card {
  border-color: rgb(245 77 20 / 42%);
  background: rgb(245 77 20 / 8%);
}

.about-card h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1;
  letter-spacing: 0.035em;
}

.about-card p,
.about-card li {
  color: var(--color-text);
  font-size: clamp(1.02rem, 2vw, 1.2rem);
  line-height: 1.7;
  opacity: 0.9;
}

.about-card p {
  margin-top: 1rem;
}

.about-card ul {
  display: grid;
  gap: 0.6rem;
  margin: 1rem 0 0;
  padding-left: 1.3rem;
}

.about-card li::marker {
  color: var(--color-accent);
}

.text-link {
  color: var(--color-accent);
  font-weight: 800;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.2em;
}

.text-link:hover,
.text-link:focus-visible {
  color: #ff6a35;
}

.accent-line,
.closing-line {
  font-size: clamp(1.25rem, 3vw, 1.8rem);
  font-weight: 800;
  opacity: 1;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.feature-item {
  padding: 1.25rem;
  background: rgb(0 0 0 / 12%);
  border-left: 4px solid var(--color-accent);
}

.feature-item h3 {
  color: var(--color-accent);
  font-size: clamp(1.1rem, 2.4vw, 1.35rem);
  line-height: 1.2;
}

.feature-item p {
  margin-top: 0.75rem;
}

.cta-actions {
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
  color: var(--color-text);
}

.button-secondary:hover,
.button-secondary:focus-visible {
  background: var(--color-accent);
}

@media (max-width: 700px) {
  .about-page {
    padding: 3.5rem 1.25rem 5rem;
  }

  .about-content {
    margin-top: 3rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .cta-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .button {
    width: 100%;
  }
}
</style>
