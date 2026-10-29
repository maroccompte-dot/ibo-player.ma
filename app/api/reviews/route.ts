import { NextResponse } from "next/server";
import {
  getApprovedReviews,
  submitReview,
  type ReviewTargetType,
} from "@/lib/reviews";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") ?? "";
  const type = (searchParams.get("type") ?? "app") as ReviewTargetType;

  if (!slug) {
    return NextResponse.json({ error: "slug requis" }, { status: 400 });
  }

  const reviews = await getApprovedReviews(
    slug,
    type === "server" ? "server" : "app",
  );

  return NextResponse.json({ reviews });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const result = await submitReview({
    author: String(payload.author ?? ""),
    comment: String(payload.comment ?? ""),
    rating: Number(payload.rating ?? 0),
    slug: String(payload.slug ?? ""),
    type: String(payload.type ?? ""),
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message:
      "Merci. Votre avis a été envoyé et sera publié après validation.",
  });
}
