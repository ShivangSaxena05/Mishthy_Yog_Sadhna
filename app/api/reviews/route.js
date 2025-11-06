// /app/api/reviews/route.ts
import reviewsData from "@/lib/reviews.json";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const start = Number(searchParams.get("start") || 0);
  const limit = Number(searchParams.get("limit") || 3);
  const paginated = reviewsData.slice(start, start + limit);

  // Calculate overall average rating
  const totalRating = reviewsData.reduce((sum, review) => sum + (parseFloat(review.Rating) || 0), 0);
  const averageRating = reviewsData.length > 0 ? (totalRating / reviewsData.length).toFixed(1) : 0;

  return Response.json({ reviews: paginated, total: reviewsData.length, averageRating: parseFloat(averageRating) });
}
