import { BlogList } from '@/components';

export const metadata = {
  title: 'Blog - Connectapre',
  description: 'Insights and tutorials on improving your customer communication with Connectapre.',
};

export default function BlogPage() {
  return (
    <main>
      <BlogList />
    </main>
  );
}
