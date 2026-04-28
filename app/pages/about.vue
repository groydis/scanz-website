<template>
  <main class="about-page">
    <PageHero
      title-id="about-title"
      eyebrow="About SCANZ"
      title="People come first. The org comes second."
      section-class="about-hero container"
    >
      <p>
        <strong>Star Citizen Australia &amp; New Zealand (SCANZ)</strong> is a
        community-first organisation built around one simple idea.
      </p>
      <p>
        We're here to create a space where players can enjoy Star Citizen their
        way, without pressure, without ego, and without being told how to play.
      </p>
    </PageHero>

    <section class="about-content container" aria-label="About SCANZ details">
      <article class="about-card surface-card content-prose">
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

      <article class="about-card surface-card content-prose">
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

      <article class="about-card about-card-accent surface-card surface-card-accent content-prose">
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

      <article class="about-card surface-card content-prose">
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

      <article class="about-card surface-card content-prose">
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

      <article class="about-card surface-card content-prose">
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

      <article class="about-card surface-card content-prose">
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

useScanzSeo({
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
}
</style>
