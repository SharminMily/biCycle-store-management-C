import React, { useState } from "react";
import { Star } from "lucide-react";
import { toast } from "sonner";

const AddReview = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || rating === 0 || review.trim().length < 10) {
      setError("Please provide your name, a rating, and a review (min 10 characters).");
      return;
    }

    // Simulate submission
    // console.log({ name, rating, review });
    toast.success("Thank you! Your review has been submitted.");

    // Reset form
    setName("");
    setRating(0);
    setHoveredRating(0);
    setReview("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12 border border-gray-100">
          <h2 className="text-4xl sm:text-5xl font- text-center text-gray-900 mb-4 tracking-wide">
            Share Your Experience
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">
            Help other riders by leaving an honest review
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-3 text-lg">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all text-lg"
              />
            </div>

            {/* Star Rating */}
            <div>
              <label className="block text-gray-700 font-medium mb-4 text-lg">
                Rate the Product
              </label>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform duration-200 hover:scale-110"
                  >
                    <Star
                      size={48}
                      className={`transition-colors duration-200 ${
                        star <= (hoveredRating || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-center sm:text-left text-gray-600 mt-3">
                {rating === 0 ? "Click a star to rate" : `${rating} out of 5 stars`}
              </p>
            </div>

            {/* Review Text */}
            <div>
              <label className="block text-gray-700 font-medium mb-3 text-lg">
                Your Review
              </label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                rows={6}
                placeholder="Tell us what you loved about the bicycle, its performance, comfort, or any suggestions..."
                className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all resize-none text-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-right">
                {review.length} / 500 characters
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-red-600 to-green-600 text-white font-bold text-xl rounded-xl shadow-2xl hover:shadow-red-600/30 hover:scale-[1.02] transition-all duration-300"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;