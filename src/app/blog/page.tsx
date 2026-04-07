import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Tips & Insights",
  description: "Lawn care advice, seasonal tips, and landscaping ideas for East Bay homeowners from the AL Gardening team.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1B3D2A] to-primary">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-6 py-20 text-center lg:px-20">
          <h1 className="font-heading text-3xl font-bold text-white lg:text-[44px]">
            Tips & Insights
          </h1>
          <p className="max-w-xl text-base text-white/75 lg:text-lg">
            Lawn care advice, seasonal tips, and landscaping ideas for East Bay
            homeowners.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            {/* Post Cards */}
            <div className="grid gap-8 sm:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                >
                  <div className="h-[180px] bg-primary-light transition-transform group-hover:scale-105" />
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-neutral-dark/40">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="font-heading text-xl font-bold text-neutral-dark">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-neutral-dark/60">
                      {post.excerpt}
                    </p>
                    <span className="mt-auto pt-2 text-sm font-semibold text-primary">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-8">
              {/* CTA Card */}
              <div className="flex flex-col gap-4 rounded-xl bg-primary p-6 text-white">
                <h3 className="font-heading text-xl font-bold">
                  Ready to get started?
                </h3>
                <p className="text-sm text-white/75">
                  Get a free estimate for your lawn care, landscape design, or
                  tree care needs.
                </p>
                <Link
                  href="/contact"
                  className="btn-lift rounded-lg bg-accent py-3 text-center text-sm font-bold text-white transition-colors hover:bg-accent/90"
                >
                  Get Free Estimate
                </Link>
              </div>

              {/* Categories */}
              <div className="flex flex-col gap-4 rounded-xl border border-neutral-mid bg-white p-6">
                <h3 className="font-heading text-lg font-bold text-neutral-dark">
                  Categories
                </h3>
                <div className="flex flex-col gap-2.5">
                  {["Lawn Care Tips", "Landscape Ideas", "Tree Care", "Seasonal Guides"].map(
                    (cat) => (
                      <span
                        key={cat}
                        className="text-sm text-neutral-dark/60 transition-colors hover:text-primary"
                      >
                        {cat}
                      </span>
                    )
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
