import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Prose } from "@/src/components/Prose";
import { postList, getPost } from "@/src/content/posts";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/src/lib/schema";

export function generateStaticParams() {
  return postList.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { Body } = post;

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]),
          ),
        }}
      />
      {post.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(post.faq)),
          }}
        />
      )}

      <nav className="mb-8 text-sm text-white/40">
        <Link href="/blog" className="transition-colors hover:text-white">
          ← Tous les articles
        </Link>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 text-xs text-white/40">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime} de lecture</span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white/60">
          {post.description}
        </p>
      </header>

      <Prose>
        <Body />
      </Prose>

      {post.faq && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Questions fréquentes
          </h2>
          <div className="mt-6 space-y-4">
            {post.faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              >
                <summary className="cursor-pointer list-none font-medium text-white marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      <aside className="mt-16 rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-fuchsia-500/5 p-8 text-center">
        <h2 className="text-xl font-semibold">Un projet web à Liège ?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
          Discutons de votre site ou de votre application. Réponse rapide, devis
          clair.
        </p>
        <Link
          href="/developpeur-web-liege"
          className="mt-5 inline-block rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15"
        >
          Voir mes services
        </Link>
      </aside>
    </article>
  );
}
