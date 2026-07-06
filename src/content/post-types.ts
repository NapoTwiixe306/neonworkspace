import type { ComponentType } from "react";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO (date de publication)
  updated?: string; // ISO (dernière mise à jour)
  readingTime: string;
  tags: string[];
  faq?: { question: string; answer: string }[];
}

export interface Post extends PostMeta {
  Body: ComponentType;
}
