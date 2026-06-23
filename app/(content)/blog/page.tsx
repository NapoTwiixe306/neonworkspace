import type { Metadata } from "next";
import Link from "next/link";
import { postList } from "@/src/content/posts";
import { breadcrumbSchema } from "@/src/lib/schema";

export const metadata: Metadata = {
  title: "Blog : développement web, Next.js & SEO à Liège",
  description:
    "Articles sur le développement web, Next.js, React, la performance et le référencement, par un développeur front-end freelance à Liège.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndex() {
  const posts = [...postList].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", path: "/" },
              { name: "Blog", path: "/blog" },
            ]),
          ),
        }}
      />

      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Le blog
        </h1>
        <p className="mt-3 text-white/60">
          Développement web, Next.js, performance et référencement, vu depuis
          Liège.
        </p>
      </header>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
          >
            <div className="flex items-center gap-3 text-xs text-white/40">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTime} de lecture</span>
            </div>
            <h2 className="mt-2 text-xl font-semibold text-white group-hover:text-sky-300">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {post.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
