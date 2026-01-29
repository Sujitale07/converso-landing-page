import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["Introducing ConnectaPre's", 'Smart Dashboard'];
export const desktopParagraphPhrase = [
  "Manage your agents, track conversations, and optimize your routing from one",
  "central place. The most advanced WhatsApp tool for WordPress.",
];

// For mobile
export const mobileHeaderPhrase = ["Introducing ConnectaPre's", 'Smart Dashboard'];
export const mobileParagraphPhrase = [
  "Manage your agents, track conversations, and",
  "optimize your routing from one central place.",
  "The most advanced WhatsApp tool for WordPress.",
];

export const edges = [
  {
    point: 'Live Tracking',
    details:
      'Monitor all incoming chats in real-time and see which agent is handling which conversation.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Team Profiles',
    details:
      'Create unlimited agent profiles with custom avatars and availability schedules.',
    icon: ic_identification,
  },
  {
    point: 'Encrypted Routing',
    details:
      'Securely route users to the right department without ever storing sensitive visitor data.',
    icon: ic_lock_closed,
  },
];
