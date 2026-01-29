import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "ConnectaPre has transformed my approach to customer support. Their smart routing options have helped me grow my conversions, and their user-friendly platform makes managing my team a breeze. I've never felt more confident about my customer journey.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      "I can't express how grateful I am to ConnectaPre. Their multi-agent services have been a game-changer for my company's communication. The expert routing and personalized greetings have given us peace of mind, knowing that our visitors are in capable hands.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "ConnectaPre's smart triggers have been a lifeline for me. I always struggled with intrusive chat buttons, but their team crafted a tailored solution that addressed my goals and concerns. It's been a game-changer in achieving my business dreams.",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "I can't express how grateful I am to ConnectaPre. Their advanced routing services have been a game-changer for my team's efficiency. The expert guidance and personalized strategies have given us peace of mind.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "ConnectaPre has transformed my approach to leads. Their smart investing options have helped me grow my business, and their user-friendly platform makes managing my agents a breeze.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Ready to modernize', 'your customer chat?'];
export const subtextPhrase = ['Download ConnectaPre today and start connecting with your visitors like never before.'];
