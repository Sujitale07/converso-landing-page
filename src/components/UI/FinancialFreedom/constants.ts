
import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';
import ic_arrows_left_right from '../../../../public/svgs/ic_arrows_right_left.svg';

// For desktop
export const desktopHeaderPhrase = ['Seamless Communication,', 'Total Control'];
export const desktopParagraphPhrase = [
  'Managing customer interactions shouldn\'t be complicated.',
  "We built Connectapre to handle the logic so you can focus on the conversation.",
];
export const desktopBriefNotePhrase = [
  'Smart triggers,',
  'privacy-first routing, and',
  'full responsive control,',
  'all in one plugin.',
];

// For mobile
export const mobileHeaderPhrase = ['Seamless', 'Communication, Total Control'];
export const mobileParagraphPhrase = [
  'Managing customer interactions shouldn\'t be',
  "complicated. We built Connectapre to handle the",
  ' logic so you can focus on the conversation.',
];

export const mobileBriefNotePhrase = [
  'Smart',
  ' triggers,',
  'privacy-first',
  ' routing,',
  'and full',
  'responsive control,',
  'all in one plugin.',
];

export const edges = [
  {
    point: 'Smart Trigger Timing',
    details:
      'No intrusive Pop-ups. Set buttons to appear only after a specific time delay or scroll depth.',
    icon: ic_banknotes,
  },
  {
    point: 'Privacy-First Detection',
    details:
      'Uses secure, industry-standard geocoding APIs to route users without compromising their sensitive data.',
    icon: ic_circle_stack,
  },
  {
    point: 'Full Responsive Control',
    details:
      'Anchor your widget to any corner of the screen with pixel-perfect accuracy on both desktop and mobile.',
    icon: ic_arrows_left_right,
  },
];
