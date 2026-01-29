'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.article`
  margin-top: 6.25rem;
  padding: 4rem 1.5rem;
`;

export const Inner = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;

  span {
    color: var(--primary);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: block;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 2rem;
    color: var(--white);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const FeaturedImage = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  border-radius: 2rem;
  overflow: hidden;
  margin-bottom: 4rem;
  border: 1px solid var(--color-grey-2);

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 20rem;
  }
`;

export const Body = styled.div`
  color: var(--color-grey-6);
  font-size: 1.25rem;
  line-height: 1.8;

  p {
    margin-bottom: 2rem;
  }

  h2 {
    color: var(--white);
    font-size: 2rem;
    margin: 3rem 0 1.5rem;
  }

  ul {
    margin-bottom: 2rem;
    padding-left: 1.5rem;
    li {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const BackLink = styled.div`
  margin-bottom: 3rem;
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-grey-4);
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary);
    }
  }
`;
