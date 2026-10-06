# 🏃 PacingQuest Landing Page

> Suivez vos symptômes à votre rythme — a daily symptom journal for iPhone

**Website:** [pacing.quest](https://pacing.quest)

Landing page for **Pacing Quest**, a free iPhone journal that helps people who practice pacing keep track of their days: fatigue, activities, symptoms, sleep and crashes.

---

## 🎯 About Pacing Quest

Pacing Quest is designed for people managing their energy day to day, for example with:
- 🦠 **Long COVID** (Covid long)
- 😴 **ME/CFS** (Myalgic Encephalomyelitis / Chronic Fatigue Syndrome)
- 🔋 **Post-Exertional Malaise** (PEM) and crashes
- 🧠 **Brain fog**, chronic pain and other energy-limiting conditions

It is a **personal tracking tool**: it does not diagnose anything and does not give medical advice.

---

## ✨ Features (available today)

Source of truth: the App Store listing, the [CGU](src/pages/cgu.md) and the app screenshots. Every product fact shown on the site lives in [`src/data/pacing-quest.js`](src/data/pacing-quest.js).

- **Daily check-in**: "weather of the day" (sunny / mixed / stormy), fatigue from 1 to 10
- **Activities**: intensity of mental, physical and emotional activities
- **Symptoms, sleep & crashes**
- **Personal journal** with sorting, search and mood analysis (v1.2)
- **Trends & charts** up to 12 months
- **Daily reminder** notification (v1.1)
- **CSV export**

### 🔒 Privacy
- No account needed
- Data stored on the iPhone, no remote server (see CGU)
- App Store privacy label: "Data Not Collected"

Not available today: Android, Apple Watch, Apple Health integration.

---

## 🛠️ Tech Stack

- **Astro** (static output) + **Tailwind CSS 4**
- Self-hosted fonts via **Fontsource** (Fraunces + Nunito), no third-party requests
- Minimal JavaScript (`public/scripts/animations.js`, progressive enhancement)

---

## 🚀 Development

```bash
npm install
npm run dev       # dev server
npm run build     # production build in dist/
npm run preview   # serve dist/
```

### Updating content
- Release notes, FAQ, links (App Store, Ko-fi, contact): `src/data/pacing-quest.js`
- Images: put the source PNG in `public/images/pacingquest/`, then run `node scripts/optimize-images.mjs`
- Social image: `scripts/og-image.html` (screenshot it at 1200×630 into `public/images/pacingquest/og-pacing-quest.jpg`)

### ⚠️ Deployment
`.github/workflows/main.yml` builds and publishes to Cloudflare Pages (`branch: main`) **only on pushes to `main`**: feature branches are never deployed.

---

## 💬 About the Creator

Built by **Anthony Da Cruz** ([anthony-dacruz.com](https://anthony-dacruz.com)), an independent developer who lives with Long COVID.

## 📧 Contact

Questions or feedback? [me@anthony-dacruz.com](mailto:me@anthony-dacruz.com)

---

*"La santé, c'est privé."*
