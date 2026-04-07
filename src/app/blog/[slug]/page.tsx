import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1B3D2A] to-primary">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 py-20 text-center lg:px-20">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-accent">
              {post.category}
            </span>
            <span className="text-xs text-white/50">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="max-w-3xl font-heading text-3xl font-bold text-white lg:text-[40px] lg:leading-[1.2]">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[1fr_320px] lg:px-20">
          {/* Article */}
          <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-neutral-dark prose-p:text-neutral-dark/70 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-dark prose-li:text-neutral-dark/70">
            <MDXRemote source={post.content} />
          </article>

          {/* Sidebar */}
          <aside className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 rounded-xl bg-primary p-6 text-white">
              <h3 className="font-heading text-xl font-bold">
                Need help with your yard?
              </h3>
              <p className="text-sm text-white/75">
                Our team is ready to help with a free, no-obligation estimate.
              </p>
              <Link
                href="/contact"
                className="btn-lift rounded-lg bg-accent py-3 text-center text-sm font-bold text-white transition-colors hover:bg-accent/90"
              >
                Get Free Estimate
              </Link>
            </div>

            <Link
              href="/blog"
              className="text-sm font-semibold text-primary hover:underline"
            >
              ← Back to all posts
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
