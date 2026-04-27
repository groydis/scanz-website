<template>
  <main class="join-page">
    <section class="join-hero" aria-labelledby="join-title">
      <p class="eyebrow">How to Join SCANZ</p>
      <h1 id="join-title">Joining SCANZ is simple.</h1>
      <p>
        If you're looking for a
        <strong>Star Citizen organisation in Australia &amp; New Zealand</strong>,
        you're in the right place.
      </p>
      <p>
        We recommend starting with our Discord. That's where everything happens.
      </p>
    </section>

    <section class="join-content" aria-label="Joining steps">
      <article class="join-card">
        <span class="step-label">Step 1</span>
        <h2>Join Discord</h2>
        <p>
          Jump into our
          <a
            class="text-link"
            href="https://discord.gg/3atj8pjhFH"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          and say hello.
        </p>
        <p>This is where we:</p>
        <ul>
          <li>Organise events</li>
          <li>Run operations</li>
          <li>Coordinate multi-crew gameplay</li>
          <li>Hang out as a community</li>
        </ul>
        <p>It also gives you a feel for the group before committing.</p>
      </article>

      <article class="join-card">
        <span class="step-label">Step 2</span>
        <h2>Apply via RSI</h2>
        <p>
          Once you're ready, submit an application through our
          <a
            class="text-link"
            href="https://robertsspaceindustries.com/en/orgs/scanz"
            target="_blank"
            rel="noopener noreferrer"
          >
            RSI organisation page</a
          >.
        </p>
        <p>
          Your application doesn't need to be anything fancy. Short and simple is
          perfectly fine.
        </p>
        <p>That said... if you feel like making it funny, we fully support that.</p>
      </article>

      <article class="join-card join-card-accent">
        <h2>A Quick Tip</h2>
        <p>
          If your Discord name is different from your in-game name, make sure you
          include it in your application.
        </p>
        <p>It helps us match everything up quickly.</p>
      </article>

      <article class="join-card">
        <h2>What Happens Next</h2>
        <p>We aim to process applications as quickly as possible.</p>
        <p>Once approved:</p>
        <ul>
          <li>You'll be granted full access in Discord</li>
          <li>We'll let you know you're good to go</li>
        </ul>
      </article>

      <article class="join-card">
        <h2>Before You Apply</h2>
        <p>Please take a moment to read through our rules.</p>
        <p>They're simple, and mostly boil down to:</p>
        <p class="rule-callout">don't be a dickhead.</p>
      </article>

      <article class="join-card">
        <h2>Questions?</h2>
        <p>If you're unsure about anything, just ask.</p>
        <p>
          Reach out to any of our officers in Discord. We're always happy to help.
        </p>
      </article>
    </section>

    <section class="ready-cta" aria-labelledby="ready-title">
      <h2 id="ready-title">Ready to Join?</h2>
      <div class="cta-actions" aria-label="Join SCANZ">
        <a
          class="button button-primary"
          href="https://discord.gg/3atj8pjhFH"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Discord
        </a>
        <a
          class="button button-secondary"
          href="https://robertsspaceindustries.com/en/orgs/scanz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply on RSI
        </a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "How to Join",
  description:
    "Join SCANZ by jumping into Discord and applying through the RSI organisation page. New and experienced Star Citizen players are welcome.",
  ogTitle: "How to Join SCANZ",
  ogDescription:
    "Start with the SCANZ Discord, then apply through RSI to join the Star Citizen Australia & New Zealand community.",
  ogImage: "/logo.png",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.join-page {
  min-height: 100%;
  padding: 5rem 1.5rem 6rem;
  background: var(--color-bg);
}

.join-hero,
.join-content,
.ready-cta {
  width: min(100%, 900px);
  margin: 0 auto;
}

.join-hero {
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

.join-hero h1 {
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 0.95;
  letter-spacing: 0.035em;
  text-wrap: balance;
}

.join-hero p {
  max-width: 760px;
  margin: 1.25rem auto 0;
  color: var(--color-text);
  font-size: clamp(1.1rem, 2.2vw, 1.35rem);
  line-height: 1.65;
  opacity: 0.9;
}

.join-hero strong,
.rule-callout {
  color: var(--color-accent);
}

.join-content {
  display: grid;
  gap: 1.25rem;
  margin-top: 4rem;
}

.join-card {
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: rgb(255 255 255 / 4%);
  border: 1px solid rgb(255 255 255 / 10%);
  box-shadow: 0 18px 45px rgb(0 0 0 / 14%);
}

.join-card-accent {
  border-color: rgb(245 77 20 / 42%);
  background: rgb(245 77 20 / 8%);
}

.step-label {
  display: inline-block;
  margin-bottom: 0.75rem;
  color: var(--color-accent);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.join-card h2,
.ready-cta h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1;
  letter-spacing: 0.035em;
}

.join-card p,
.join-card li {
  color: var(--color-text);
  font-size: clamp(1.02rem, 2vw, 1.2rem);
  line-height: 1.7;
  opacity: 0.9;
}

.join-card p {
  margin-top: 1rem;
}

.join-card ul {
  display: grid;
  gap: 0.6rem;
  margin: 1rem 0 0;
  padding-left: 1.3rem;
}

.join-card li::marker {
  color: var(--color-accent);
}

.text-link {
  color: var(--color-accent);
  font-weight: 800;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.2em;
}

.text-link:hover,
.text-link:focus-visible {
  color: #ff6a35;
}

.text-link:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}

.rule-callout {
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  font-weight: 800;
  opacity: 1;
}

.ready-cta {
  margin-top: 4rem;
  text-align: center;
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

@media (max-width: 640px) {
  .join-page {
    padding: 3.5rem 1.25rem 5rem;
  }

  .join-content,
  .ready-cta {
    margin-top: 3rem;
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
