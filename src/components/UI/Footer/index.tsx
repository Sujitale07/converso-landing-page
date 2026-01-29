import Image from 'next/image';
import Link from 'next/link';
import raft_footer_logo from '../../../../public/svgs/raft_footer_logo.svg';
import qr_code from '../../../../public/svgs/qr_code.svg';
import ic_google_playstore from '../../../../public/svgs/ic_google_playstore.svg';
import ic_baseline_apple from '../../../../public/svgs/ic_baseline_apple.svg';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'Company',
    links: [
      { name: 'Our Company', url: '/' },
      { name: 'Features', url: '/#features' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'FAQ', url: '/#faq' },
      { name: 'Documentation', url: '/#documentation' },
    ],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <h1 className="text-7xl italic font-bold">ConnectaPre</h1>
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              {/* <QRImageCtn>
                <Image src={qr_code} alt="qr_code" />
              </QRImageCtn> */}
              <TextCtn>
                <p>Professional WhatsApp solutions for your WordPress site.</p>
                {/* <IconCtn>
                  <Image src={ic_google_playstore} alt="playstore icon" />
                  <Image src={ic_baseline_apple} alt="apple icon" />
                </IconCtn> */}
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>
                        <Link href={link.url}>{link.name}</Link>
                      </li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          {/* <FooterBottom>
            <Translator>
              <h3>English (United Kingdom)</h3>
              <Image src={ic_chevron_down} alt="chevron down" />
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              ConnectaPre Corp, LLC.
            </CopyRight>
          </FooterBottom> */}
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
