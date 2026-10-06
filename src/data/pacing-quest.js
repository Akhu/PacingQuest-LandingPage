// Single source of truth for the product facts shown on pacing.quest.
// Every claim here must stay verifiable: App Store listing (price, devices,
// privacy label, release notes), the CGU (no account, local storage, CSV export)
// or the app screenshots. Do not add features before they ship.

export const SITE_NAME = 'Pacing Quest';
export const TAGLINE = 'Suivez vos symptômes à votre rythme';

export const APP_STORE_URL = 'https://apps.apple.com/fr/app/pacing-quest/id6499503099';
export const KOFI_URL = 'https://ko-fi.com/anthonyswift';
export const CREATOR = { name: 'Anthony Da Cruz', url: 'https://anthony-dacruz.com' };
export const CONTACT_EMAIL = 'me@anthony-dacruz.com';
export const MIN_IOS_VERSION = '17';
export const PACING_TOOLKIT_PDF = '/images/pacingquest/Outil_PlanEvitementCrash_Stanford_FR.pdf';

export const LOGO_SRC = '/images/pacingquest/optimized/logo-128.webp';
export const OG_IMAGE = {
  src: '/images/pacingquest/og-pacing-quest.jpg',
  width: 1200,
  height: 630,
  alt: "Pacing Quest, journal de suivi des symptômes pour iPhone : écrans de tendances et de saisie de la journée",
};

export const MEDICAL_DISCLAIMER =
  "Pacing Quest est un outil de suivi personnel. Elle ne pose pas de diagnostic, ne donne pas de conseil médical et ne remplace pas l'avis d'un professionnel de santé.";

// Release notes as published on the App Store (newest first)
export const releases = [
  {
    version: '1.2',
    date: '2026-05-28',
    title: 'Accessibilité et journal',
    notes: [
      "Amélioration de l'accessibilité, notamment pour VoiceOver.",
      "Amélioration du journal : tri des notes, analyse de l'humeur et recherche.",
    ],
  },
  {
    version: '1.1',
    date: '2025-11-25',
    title: 'Les rappels journaliers sont là !',
    notes: [
      'Mettez en place une notification quotidienne pour vous rappeler de remplir votre état de la journée.',
    ],
  },
  {
    version: '1.0',
    date: '2025-07-29',
    title: 'Première version',
    notes: ["Pacing Quest est disponible sur l'App Store, pour iPhone."],
  },
];

export const latestRelease = releases[0];

const dateFormatter = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
export const formatDate = (isoDate) => dateFormatter.format(new Date(`${isoDate}T12:00:00Z`));

// FAQ — answers are HTML, rendered on the page and reused in the FAQPage JSON-LD
export const faq = [
  {
    id: 'faq-pacing-quest',
    question: "Qu'est-ce que Pacing Quest ?",
    answer: `<p>Un journal de suivi quotidien pour iPhone. En quelques gestes, vous notez votre état du jour, votre fatigue, vos activités et vos symptômes. L'app est pensée pour les personnes qui pratiquent le pacing, notamment avec une EM/SFC ou un Covid long.</p>`,
  },
  {
    id: 'faq-ce-que-fait-l-app',
    question: "Que fait l'app, concrètement ?",
    answer: `<ul>
      <li>Noter votre « météo du jour » (soleil, mitigé ou orage) et votre fatigue de 1 à 10.</li>
      <li>Indiquer l'intensité de vos activités mentales, physiques et émotionnelles.</li>
      <li>Garder une trace de vos symptômes, de votre sommeil et de vos crashs.</li>
      <li>Tenir un journal personnel, avec tri, recherche et analyse de l'humeur de vos notes.</li>
      <li>Consulter vos tendances et vos graphiques, jusqu'à 12 mois.</li>
      <li>Recevoir un rappel quotidien, si vous le souhaitez.</li>
      <li>Exporter vos données au format CSV.</li>
    </ul>`,
  },
  {
    id: 'faq-ce-qu-elle-ne-fait-pas',
    question: "Et qu'est-ce qu'elle ne fait pas ?",
    answer: `<ul>
      <li>Elle ne pose pas de diagnostic et ne donne ni conseil médical ni recommandation de traitement.</li>
      <li>Elle ne décide pas à votre place : c'est vous qui lisez vos données, idéalement avec un professionnel de santé.</li>
      <li>Elle n'envoie pas vos données sur un serveur et ne vous demande pas de créer de compte.</li>
      <li>Il n'existe pas aujourd'hui de version Android ni d'app Apple Watch, et l'app ne se connecte pas à Apple Santé.</li>
    </ul>`,
  },
  {
    id: 'faq-gratuite',
    question: "L'app est-elle vraiment gratuite ?",
    answer: `<p>Oui. Pacing Quest est gratuite et sans publicité. Si l'app vous est utile et que vous en avez la possibilité, vous pouvez soutenir son développement par un <a href="${KOFI_URL}">don sur Ko-fi</a>. Ce n'est jamais une obligation.</p>`,
  },
  {
    id: 'faq-compte',
    question: 'Faut-il créer un compte ?',
    answer: `<p>Non. Aucun compte, aucune inscription : vous ouvrez l'app et vous commencez.</p>`,
  },
  {
    id: 'faq-donnees',
    question: 'Où sont stockées mes données ?',
    answer: `<p>Sur votre iPhone. Vos saisies ne sont pas envoyées sur un serveur, et la fiche App Store indique « Données non collectées ».</p><p>Bon à savoir : si vous supprimez l'app, vos données sont supprimées avec elle. Pensez à les exporter avant.</p>`,
  },
  {
    id: 'faq-medecin',
    question: 'Puis-je montrer mes données à mon médecin ?',
    answer: `<p>Oui. Vous pouvez exporter vos données au format CSV, lisible dans un tableur, et les partager avec qui vous le souhaitez. Vous pouvez aussi simplement montrer vos graphiques depuis l'app.</p>`,
  },
  {
    id: 'faq-appareils',
    question: 'Sur quels appareils fonctionne Pacing Quest ?',
    answer: `<p>Sur iPhone, avec iOS ${MIN_IOS_VERSION} ou une version plus récente. Il n'y a pas de version Android aujourd'hui.</p>`,
  },
  {
    id: 'faq-accessibilite',
    question: "L'app est-elle accessible ?",
    answer: `<p>Elle a été pensée pour les personnes qui vivent avec une fatigue importante ou des troubles cognitifs : interface douce, couleurs apaisantes, texte lisible. La version 1.2 a amélioré la prise en charge de VoiceOver.</p>`,
  },
  {
    id: 'faq-pacing',
    question: "Qu'est-ce que le pacing ?",
    answer: `<p>Le pacing est une façon de gérer son énergie : répartir ses activités physiques, mentales et émotionnelles pour rester dans ses limites, plutôt que de les dépasser et d'en payer le prix ensuite. Pacing Quest vous aide à garder une trace de vos journées ; elle ne vous dit pas quoi faire.</p><p>Pour aller plus loin : la <a href="${PACING_TOOLKIT_PDF}">boîte à outils pour éviter les malaises post-effort</a> (PDF), traduite en français par des malades à partir d'un document de la Stanford ME/CFS Initiative.</p>`,
  },
  {
    id: 'faq-soutenir',
    question: 'Comment soutenir le projet ?',
    answer: `<p>Un <a href="${KOFI_URL}">don sur Ko-fi</a>, une note sur l'<a href="${APP_STORE_URL}">App Store</a> ou un partage à quelqu'un que l'app pourrait aider : tout compte, et rien n'est obligatoire.</p>`,
  },
  {
    id: 'faq-contact',
    question: 'Une question, une idée, un bug ?',
    answer: `<p>Écrivez à <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>`,
  },
];
