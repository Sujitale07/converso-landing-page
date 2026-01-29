import { BlogSingle } from '@/components';
import { blogPosts } from '@/components/UI/Blog/BlogList/constants';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return {
    title: `${post?.title || 'Blog Post'} - Connectapre`,
    description: post?.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  return (
    <main>
      <BlogSingle slug={params.slug} />
    </main>
  );
}
