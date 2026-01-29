'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wrapper,
  Inner,
  Header,
  FeaturedImage,
  Body,
  BackLink,
} from './styles';
import { blogPosts } from '../BlogList/constants';
import { notFound } from 'next/navigation';

const BlogSingle = ({ slug }: { slug: string }) => {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Wrapper>
      <Inner>
        <BackLink>
          <Link href="/blog">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to blog
          </Link>
        </BackLink>
        <Header>
          <span>{post.date}</span>
          <h1>{post.title}</h1>
        </Header>
        <FeaturedImage>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 1200px) 100vw, 800px"
            priority
          />
        </FeaturedImage>
        <Body>
          <p>
            WhatsApp has emerged as the most popular messaging platform
            globally, and for businesses, it represents an unparalleled
            opportunity to connect with customers where they already spend their
            time. With the rise of conversational commerce, users expect
            instant, personal, and efficient responses.
          </p>
          <h2>Instantly Route to the Right Person</h2>
          <p>
            One of the biggest challenges businesses face is managing the volume
            of incoming chats. ConnectaPre solves this by providing intelligent
            routing. Instead of a single number where everyone waits, our
            plugin detects the visitor's location and availability, sending them
            directly to the agent who can help them best.
          </p>
          <ul>
            <li>Automatic location detection (IP & GPS)</li>
            <li>Multi-agent profile support with custom avatars</li>
            <li>Smart availability toggles for your team</li>
            <li>Context-aware messaging with dynamic fields</li>
          </ul>
          <p>
            By reducing the time it takes to connect a customer with an agent,
            you not only improve the user experience but also significantly
            increase your chances of conversion. A customer who gets a quick
            response is far more likely to buy than one who waits hours for an
            email.
          </p>
          <h2>Conclusion</h2>
          <p>
            As we move further into 2026, the businesses that thrive will be
            the ones that master instant communication. ConnectaPre is built to
            give your WordPress site the tools it needs to lead this change.
          </p>
        </Body>
      </Inner>
    </Wrapper>
  );
};

export default BlogSingle;
