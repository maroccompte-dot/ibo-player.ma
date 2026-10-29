export type { AppItem, ServerItem, ReviewItem, FaqItem, ContentCategory } from "./types";
export type { BoxProduct } from "./boxes";
export type { BlogPost, BlogSection } from "./blog";
export { apps, getAppBySlug, getAllAppSlugs } from "./apps";
export { servers, getServerBySlug, getAllServerSlugs } from "./servers";
export { boxes, getBoxBySlug, getAllBoxSlugs } from "./boxes";
export { blogPosts, getPostBySlug, getAllPostSlugs } from "./blog";

import { apps } from "./apps";
import { servers } from "./servers";
import type { ReviewItem } from "./types";

export function getAllItems(): ReviewItem[] {
  return [...apps, ...servers];
}
