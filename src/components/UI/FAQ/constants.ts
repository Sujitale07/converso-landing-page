type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How does the location routing work?',
    answer:
      'It first attempts to use GPS (with user permission) for pinpoint accuracy, falling back to a high-speed IP-based lookup to determine the visitor\'s city or country.',
  },
  {
    question: 'Does it support offline status for agents?',
    answer:
      'Yes! You can toggle agents as "Offline" manually, ensuring visitors are only routed to team members who are available to respond.',
  },
  {
    question: 'Can I use this on a high-traffic site?',
    answer:
      'Absolutely. Connectapre is built for performance and uses lightweight scripts that won\'t impact your WordPress load times or SEO.',
  },
  {
    question: 'Do I need a WhatsApp API account?',
    answer:
      'No. Connectapre works with standard WhatsApp and WhatsApp Business numbers via direct wa.me links, making it free and easy to set up.',
  },
];
