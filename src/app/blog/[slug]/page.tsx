import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlogShell } from '@/components/BlogShell';
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts';
import { getGameBySlug } from '@/data/games';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post was not found.'
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      images: [post.image],
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedGames = post.relatedGameSlugs
    .map((gameSlug) => getGameBySlug(gameSlug))
    .filter((game): game is NonNullable<typeof game> => Boolean(game));

  return (
    <BlogShell>
      <div className="detail-wrap">
        <section className="detail-section seo-content">
          <img src={post.image} alt={post.title} loading="lazy" className="blog-hero-image" />
          <h1>{post.title}</h1>
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}

          <h2>Play Related Games</h2>
          <ul className="modal-list">
            {relatedGames.map((game) => (
              <li key={game.slug}>
                <Link href={`/games/${game.slug}`}>{game.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </BlogShell>
  );
}
