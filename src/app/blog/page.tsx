import type { Metadata } from 'next';
import Link from 'next/link';
import { BlogShell } from '@/components/BlogShell';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Blog - Unblocked 2 Player Guides',
  description:
    'Read practical guides about unblocked 2 player browser game strategy, school play tips, and the best games to play online with friends.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog - Unblocked 2 Player Guides',
    description:
      'Read practical guides about unblocked 2 player browser game strategy, school play tips, and the best games to play online with friends.',
    url: '/blog',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Unblocked 2 Player Guides',
    description:
      'Read practical guides about unblocked 2 player browser game strategy, school play tips, and the best games to play online with friends.'
  }
};

export default function BlogPage() {
  return (
    <BlogShell>
      <div className="detail-wrap">
        <section className="detail-section seo-content">
          <h1>Unblocked 2 Player Blog</h1>
          <p>
            Explore strategy write ups, school friendly play tips, and curated browser game recommendations to improve your
            2 player sessions.
          </p>
        </section>

        <section className="detail-section">
          <div className="similar-grid">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="similar-card">
                <img src={post.image} alt={post.title} loading="lazy" className="blog-card-image" />
                <span className="similar-title" style={{ fontSize: 14, fontWeight: 700 }}>
                  {post.title}
                </span>
                <span className="similar-title">{post.description}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </BlogShell>
  );
}
