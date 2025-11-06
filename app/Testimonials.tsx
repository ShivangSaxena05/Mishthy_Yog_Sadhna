"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";

interface Review {
  "Reviewer Name": string;
  Rating: number | string;
  Date: string;
  "Review Text": string;
}

const BATCH_SIZE = 3;

export default function Testimonials() {
  const [visibleReviews, setVisibleReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [totalReviews, setTotalReviews] = useState(0);
  const [overallAverageRating, setOverallAverageRating] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`/api/reviews?start=0&limit=${BATCH_SIZE}`); // Fetch initial batch
        if (!res.ok) {
          console.error('Failed to fetch reviews:', res.status);
          setLoading(false);
          return;
        }
        const { reviews, total, averageRating } = await res.json();
        setVisibleReviews(reviews);
        setTotalReviews(total);
        setOverallAverageRating(averageRating);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const loadMoreReviews = async () => {
    setIsLoadingMore(true);
    const nextPage = page + 1;
    const res = await fetch(
      `/api/reviews?start=${page * BATCH_SIZE}&limit=${BATCH_SIZE}`
    );
    const { reviews: newReviews } = await res.json();
    setVisibleReviews((prevReviews) => [...prevReviews, ...newReviews]);
    setPage(nextPage);
    setIsLoadingMore(false);
  };

  // ⭐ Average rating (overall from API)
  const averageRating = overallAverageRating;

  return (
    <section className="py-20 bg-gradient-to-b from-soft-gray to-muted-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="font-sans text-4xl font-bold text-center text-deep-green mb-8">
          Success Stories
        </h2>

        {/* Rating Summary */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-muted-green/20 to-muted-green/10 px-6 py-3 rounded-full border border-muted-green/30">
            <div className="flex">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i < Math.floor(averageRating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ⭐
                </span>
              ))}
            </div>
            <span className="font-sans font-bold text-deep-green text-lg">
              {averageRating.toFixed(1)} out of 5
            </span>
            <span className="text-foreground/60 text-sm">
              ({loading ? "..." : totalReviews} reviews)
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 z-10 gap-8">
          {loading ? (
            [...Array(3)].map((_, i) => (
              <div
                key={i}
                className="p-8 rounded-lg bg-gradient-to-br from-muted-green/20 to-muted-green/10 border border-muted-green/20 animate-pulse"
              >
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-6"></div>
                <div className="border-t border-muted-green/20 pt-4 flex justify-between items-center">
                  <div>
                    <div className="h-5 bg-gray-300 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-20"></div>
                  </div>
                </div>
              </div>
            ))
          ) : visibleReviews.length > 0 ? (
            visibleReviews.map((review) => (
              <div
                key={`${review["Reviewer Name"]}-${review.Date}`}
                className="p-8 rounded-lg bg-gradient-to-br from-muted-green/30 to-muted-green/20 border border-muted-green/30"
              >
                <p className="text-foreground/80 mb-4 italic">
                  "{review["Review Text"]}"
                </p>
                <div className="border-t border-muted-green/30 pt-4 flex justify-between items-center">
                  <div>
                    <div className="font-sans font-bold text-deep-green capitalize">
                      {review["Reviewer Name"] || "Anonymous"}
                    </div>
                    <div className="text-sm text-foreground/60">
                      {new Date(review.Date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < Math.floor(Number(review.Rating))
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-8">
              <p className="text-foreground/60">No reviews available</p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {!loading && visibleReviews.length < totalReviews && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreReviews}
              disabled={isLoadingMore}
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-green-200 to-green-400 text-green-900 font-semibold hover:from-green-300 hover:to-green-500 hover:shadow-lg hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoadingMore ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-900 mr-3"></div>
                  Loading...
                </>
              ) : (
                "Load More Reviews"
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
