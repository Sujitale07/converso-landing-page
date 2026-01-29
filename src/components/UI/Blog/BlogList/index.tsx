'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wrapper,
  Inner,
  Header,
  BlogGrid,
  BlogCard,
  ImageContainer,
  Content,
  ReadMore,
} from './styles';
import { blogPosts } from './constants';
import { MaskText } from '@/components';

const BlogList = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={['Latest from our blog']} tag="h1" />
          <p>
            Insights, tutorials, and updates on how to improve your customer
            communication with ConnectaPre.
          </p>
        </Header>
        <BlogGrid>
          {blogPosts.map((post, i) => (
            <Link href={`/blog/${post.slug}`} key={i} passHref legacyBehavior>
              <BlogCard>
                <ImageContainer>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </ImageContainer>
                <Content>
                  <span>{post.date}</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <ReadMore>
                    Read full article
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
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </ReadMore>
                </Content>
              </BlogCard>
            </Link>
          ))}
        </BlogGrid>
      </Inner>
    </Wrapper>
  );
};

export default BlogList;
