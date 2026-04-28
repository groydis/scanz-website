<template>
  <main class="join-page">
    <PageHero
      title-id="join-title"
      eyebrow="How to Join SCANZ"
      title="Joining SCANZ is simple."
      section-class="join-hero container"
    >
      <p>
        If you're looking for a
        <strong>Star Citizen organisation in Australia &amp; New Zealand</strong>,
        you're in the right place.
      </p>
      <p>
        We recommend starting with our Discord. That's where everything happens.
      </p>
    </PageHero>

    <section class="join-content container" aria-label="Joining steps">
      <article class="join-card surface-card content-prose">
        <span class="step-label">Step 1</span>
        <h2>Join Discord</h2>
        <p>
          Jump into our
          <ScanzTextLink :to="DISCORD_INVITE_URL">Discord</ScanzTextLink>
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

      <article class="join-card surface-card content-prose">
        <span class="step-label">Step 2</span>
        <h2>Apply via RSI</h2>
        <p>
          Once you're ready, submit an application through our
          <ScanzTextLink :to="RSI_ORG_URL"
            >RSI organisation page</ScanzTextLink
          >.
        </p>
        <p>
          Your application doesn't need to be anything fancy. Short and simple is
          perfectly fine.
        </p>
        <p>That said... if you feel like making it funny, we fully support that.</p>
      </article>

      <article class="join-card join-card-accent surface-card surface-card-accent content-prose">
        <h2>A Quick Tip</h2>
        <p>
          If your Discord name is different from your in-game name, make sure you
          include it in your application.
        </p>
        <p>It helps us match everything up quickly.</p>
      </article>

      <article class="join-card surface-card content-prose">
        <h2>What Happens Next</h2>
        <p>We aim to process applications as quickly as possible.</p>
        <p>Once approved:</p>
        <ul>
          <li>You'll be granted full access in Discord</li>
          <li>We'll let you know you're good to go</li>
        </ul>
      </article>

      <article class="join-card surface-card content-prose">
        <h2>Before You Apply</h2>
        <p>Please take a moment to read through our rules.</p>
        <p>They're simple, and mostly boil down to:</p>
        <p class="rule-callout">don't be a dickhead.</p>
      </article>

      <article class="join-card surface-card content-prose">
        <h2>Questions?</h2>
        <p>If you're unsure about anything, just ask.</p>
        <p>
          Reach out to any of our officers in Discord. We're always happy to help.
        </p>
      </article>
    </section>

    <section class="join-faq container" aria-labelledby="faq-title">
      <h2 id="faq-title">Frequently Asked Questions</h2>

      <div class="faq-list">
        <article
          v-for="item in faqItems"
          :key="item.question"
          class="faq-item"
        >
          <h3>{{ item.question }}</h3>
          <p>{{ item.answer }}</p>
        </article>
      </div>
    </section>

    <section class="join-link-card container" aria-label="Learn more about SCANZ">
      <p>
        Still deciding?
        <ScanzTextLink to="/about">Learn more about SCANZ</ScanzTextLink>
        or
        <ScanzTextLink to="/history">read the history</ScanzTextLink>
        of how the community grew.
      </p>
    </section>

    <ScanzCta
      eyebrow="Ready to join?"
      title="Start With Discord"
      body="Join the Discord first, then apply through RSI when you are ready. If your Discord and in-game names differ, include both in your application."
      primary-label="Join Discord"
      :primary-href="DISCORD_INVITE_URL"
      secondary-label="Apply via RSI"
      :secondary-href="RSI_ORG_URL"
    />
  </main>
</template>

<script setup lang="ts">
import { DISCORD_INVITE_URL, RSI_ORG_URL } from "../constants/links";

const faqItems = [
  {
    question: "Do I need to be experienced in Star Citizen to join?",
    answer:
      "Not at all. SCANZ welcomes new and experienced players. If you're still learning the basics, we'll help you get set up, find people to fly with, and join group activities from day one.",
  },
  {
    question: "Do I need to own a specific ship?",
    answer:
      "Nope. Fly what you've got. A lot of Star Citizen content works better with a crew, so you'll often be flying alongside others or joining multicrew ships anyway.",
  },
  {
    question: "What time do you usually play?",
    answer:
      "SCANZ is primarily an Australia and New Zealand community, so most activity happens during AU/NZ evenings and weekends, around AEST and NZST time zones.",
  },
  {
    question: "What kind of gameplay does SCANZ do?",
    answer:
      "Pretty much everything: combat, mining, hauling, salvage, exploration, events, rescue runs, and whatever chaos the latest Star Citizen patch allows.",
  },
  {
    question: "Is SCANZ casual or hardcore?",
    answer:
      "We're casual-first. We run organised events and operations, but there are no mandatory ops, strict roles, or pressure to play a certain way.",
  },
  {
    question: "Do I have to join the Discord?",
    answer:
      "You don't have to join Discord before applying, but we strongly recommend it. Discord is where we organise events, coordinate comms, help new players, and keep the community active.",
  },
  {
    question: "How does joining SCANZ work?",
    answer:
      "Join the Discord, then apply through the official SCANZ RSI organisation page. If your Discord name is different from your in-game name, include both so we can match things up quickly.",
  },
  {
    question: "Can I play with other groups too?",
    answer:
      "Yes. SCANZ does not control who you fly with or how you play. The simple rule is: don't knowingly attack SCANZ members. If mistakes happen, talk to an officer and sort it out.",
  },
  {
    question: "Is SCANZ only for Australia and New Zealand players?",
    answer:
      "No. SCANZ is based around Australian and New Zealand time zones, but players from anywhere are welcome if our community and play times work for them.",
  },
  {
    question: "What happens after I join?",
    answer:
      "Once approved, you'll get full Discord access, meet the crew, and can jump into events or casual gameplay. We also provide onboarding guidance so new members can get involved quickly.",
  },
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

useScanzSeo({
  title: "How to Join SCANZ – Star Citizen ANZ Community",
  description:
    "Looking for a Star Citizen org in Australia or New Zealand? Join our Discord, apply via RSI, and start flying with SCANZ today.",
  ogTitle: "How to Join SCANZ",
  ogDescription:
    "Start with the SCANZ Discord, then apply through RSI to join the Star Citizen Australia & New Zealand community.",
  ogImage: "/logo.png",
  twitterCard: "summary_large_image",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(faqSchema),
    },
  ],
});
</script>

<style scoped>
.join-page {
  min-height: 100%;
  padding: 5rem 1.5rem 6rem;
  background: var(--color-bg);
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

.join-card h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1;
  letter-spacing: 0.035em;
}

.join-faq {
  margin-top: 4rem;
}

.join-faq h2 {
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  line-height: 1;
  letter-spacing: 0.035em;
  text-align: center;
}

.faq-list {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.faq-item {
  padding: clamp(1.25rem, 3vw, 1.75rem);
  background: rgb(255 255 255 / 4%);
  border: 1px solid rgb(255 255 255 / 10%);
}

.faq-item h3 {
  color: var(--color-accent);
  font-size: clamp(1.15rem, 2.4vw, 1.4rem);
  line-height: 1.25;
}

.faq-item p {
  margin-top: 0.75rem;
  color: var(--color-text);
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.65;
  opacity: 0.9;
}

.join-link-card {
  margin-top: 1.25rem;
  padding: clamp(1.25rem, 3vw, 1.75rem);
  background: rgb(255 255 255 / 4%);
  border: 1px solid rgb(255 255 255 / 10%);
  text-align: center;
}

.join-link-card p {
  color: var(--color-text);
  font-size: clamp(1rem, 2vw, 1.12rem);
  line-height: 1.65;
  opacity: 0.9;
}

.rule-callout {
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  font-weight: 800;
  opacity: 1;
}

@media (max-width: 640px) {
  .join-page {
    padding: 3.5rem 1.25rem 5rem;
  }

  .join-content,
  .join-faq,
  .join-link-card {
    margin-top: 3rem;
  }
}
</style>
