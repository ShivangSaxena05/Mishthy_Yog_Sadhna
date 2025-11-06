# TODO: Fix Testimonials and API Endpoint Issues

## Completed Tasks
- [x] Rename app/api/reviews/reviews.js to app/api/reviews/route.js (Next.js App Router requirement)
- [x] Move public/reviews.json to lib/reviews.json
- [x] Update import in API file (route.js) to import from "@/lib/reviews.json"
- [x] Fix app/Testimonials.tsx:
  - Remove nested fetchReviews function in useEffect
  - Fetch all reviews initially and set allReviews state
  - Set loading to false after initial fetch
  - Adjust load more logic to slice from allReviews

## Completed Tasks
- [x] Test API endpoint (e.g., curl http://localhost:3000/api/reviews) - Returns 3 reviews by default, 16 when limit=100

## Completed Tasks
- [x] Test Testimonials component rendering and load more functionality - API returns all reviews, import fixed

## Pending Tasks
- [ ] Verify component loads on homepage
