const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js");

//Reviews
//post route
router.post(
  "/reviews",
  validateReview,
  isLoggedIn,
  wrapAsync(reviewController.createReview)
);

//Delete Review
router.delete(
  "/reviews/:reviewId",
  isLoggedIn,
  isAuthor,
  wrapAsync(reviewController.deleteReview)
);

module.exports = router;
