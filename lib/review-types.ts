export type ReviewStatus = "pending" | "approved" | "rejected";
export type ReviewTargetType = "app" | "server";

export type UserReview = {
  id: string;
  slug: string;
  type: ReviewTargetType;
  author: string;
  rating: number;
  comment: string;
  status: ReviewStatus;
  createdAt: string;
};
