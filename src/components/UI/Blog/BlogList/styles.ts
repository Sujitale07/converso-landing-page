'use client';
import { styled } from 'styled-components';
import hero_background from '../../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  margin-top: 6.25rem;
  padding: 4rem 1.5rem;
`;

export const Inner = styled.div`
  max-width: 75rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  background: url(${hero_background.src}) no-repeat;
  background-position: top center;
  background-size: contain;
  padding-top: 4rem;

  h1 {
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  p {
    color: var(--color-grey-4);
    font-size: 1.25rem;
    max-width: 40rem;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCard = styled.div`
  background: var(--color-dark-bg2);
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid var(--color-grey-2);
  transition: transform 0.3s ease, border-color 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 15rem;
  width: 100%;

  img {
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 2rem;

  span {
    color: var(--primary);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: block;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: var(--white);
  }

  p {
    color: var(--color-grey-5);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

export const ReadMore = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--white);
  font-weight: 600;
  font-size: 1rem;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;
