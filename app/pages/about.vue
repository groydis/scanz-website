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
        <h2>A Community for Everyone</h2>
        <p>
          SCANZ is open to players of all skill levels, backgrounds, and
          playstyles.
        </p>
        <p>
          Whether you're brand new to the 'verse or a seasoned pilot, you'll find
          people willing to:
        </p>
        <ul>
          <li>Help you learn</li>
          <li>Fly with you</li>
          <li>Or just jump into something chaotic for the fun of it</li>
        </ul>
        <p>
          We value positive interactions, teamwork, and creating an environment
          where people actually want to stick around.
        </p>
      </article>

      <article class="about-card">
        <h2>All Playstyles Welcome</h2>
        <p>Star Citizen is a big game, and we treat it that way.</p>
        <p>Our members take part in everything from:</p>
        <ul>
          <li>Bounty hunting and mercenary work</li>
          <li>Salvaging and mining</li>
          <li>Hauling and trading</li>
          <li>Piracy and PVP</li>
        </ul>
        <p>Some people focus on one path. Others bounce between everything.</p>
        <p>Both are part of SCANZ.</p>
        <p>
          We support all gameplay styles, as long as they respect RSI's Terms of
          Service and the people around them.
        </p>
      </article>

      <article class="about-card about-card-accent">
        <h2>Where PVP and Industry Work Together</h2>
        <p>We don't split the community into "combat" and "non-combat."</p>
        <p>In SCANZ, those roles support each other.</p>
        <p>
          Combat pilots protect industrial operations. Industrial players create
          opportunities for combat.
        </p>
        <p>
          This balance creates more engaging gameplay, and more reasons to work
          together.
        </p>
      </article>

      <article class="about-card">
        <h2>Structured, Not Rigid</h2>
        <p>
          We run organised events, maintain clear communication, and have
          dedicated organisers and custodians.
        </p>
        <p>But we're not here to control how you play.</p>
        <p>Some members are highly active. Some drop in during patch cycles.</p>
        <p>Both are equally welcome.</p>
        <p>You don't need the biggest ship. You don't need to be the best pilot.</p>
        <p class="accent-line">You just need a good attitude.</p>
      </article>

      <article class="about-card">
        <h2>Built on Respect</h2>
        <p>
          Whether we're flying together or competing in the 'verse, respect comes
          first.
        </p>
        <p>We focus on:</p>
        <ul>
          <li>Supporting each other</li>
          <li>Creating content together</li>
          <li>Building shared experiences</li>
        </ul>
        <p>
          SCANZ is at its best when people are contributing to something bigger
          than themselves.
        </p>
      </article>

      <article class="about-card">
        <h2>What We're Building</h2>
        <div class="feature-grid">
          <div class="feature-item">
            <h3>Creating memorable moments</h3>
            <p>
              From smooth operations to complete chaos, the stories are what
              matter.
            </p>
          </div>
          <div class="feature-item">
            <h3>Bringing playstyles together</h3>
            <p>Combat, industry, piracy, all working in balance.</p>
          </div>
          <div class="feature-item">
            <h3>Growing the ANZ community</h3>
            <p>
              Building one of the most active Star Citizen communities in
              Australia &amp; New Zealand.
            </p>
          </div>
          <div class="feature-item">
            <h3>Supporting new players</h3>
            <p>
              Helping people learn the game, find their place, and enjoy the
              'verse from day one.
            </p>
          </div>
        </div>
      </article>

      <article class="about-card final-card">
        <h2>More Than an Org</h2>
        <p>SCANZ isn't just an organisation.</p>
        <p>
          It's a group of people who enjoy playing together, whether that's for
          an hour after work, or a full night of operations that don't go to plan.
        </p>
        <p>The ships are part of it.</p>
        <p class="closing-line">The community is the reason people stay.</p>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "About",
  description:
    "Learn about SCANZ, a community-first Star Citizen organisation for Australia and New Zealand players built around respect, teamwork, and all playstyles.",
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
