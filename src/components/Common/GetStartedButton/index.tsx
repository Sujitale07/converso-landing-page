import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({
  padding,
  title = 'Get Started',
  href = '/',
}: {
  padding: string;
  title?: string;
  href?: string;
}) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href={href}
    >
      {title}
    </LinkTo>
  );
};

export default GetStartedButton;
