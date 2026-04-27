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
  </main>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem 5rem;
  background: var(--color-bg);
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  width: min(100%, 820px);
  text-align: center;
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

@media (max-width: 640px) {
  .home-page {
    padding-inline: 1.25rem;
  }

  .hero {
    gap: 1.5rem;
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
