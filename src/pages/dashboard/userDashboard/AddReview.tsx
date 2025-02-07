import React, { useState } from "react";

const AddReview = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(""); 
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || rating <= 0 || review.length < 5 ) {
      setError("Please fill in all fields correctly.");
      return;
    }

    // Here you would typically send the data to the backend or save it to your state
    console.log({ name, rating, review});

    // Reset the form after submitting
    setName("");
    setRating(0);
    setReview("");   
    setError("");
  };

  return (
   <div className="mt-16">
     <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl text-black font-semibold text-center mb-1">Add a Review</h2>
      
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Your Name"
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Rating (1-5)</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Rate the product"
          />
        </div>
      

        {/* Review */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Review</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows={4}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Write your review"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3  border border-gray-500 text-sm text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default AddReview;
