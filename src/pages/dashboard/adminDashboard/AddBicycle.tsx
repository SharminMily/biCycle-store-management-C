import { useState } from "react";

const AddBicycle = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    type: "",
    description: "",
    quantity: "",
    inStock: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Bicycle Data:", formData);
    
    // Reset Form
    setFormData({
      name: "",
      brand: "",
      price: "",
      type: "",
      description: "",
      quantity: "",
      inStock: false,
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Add a Bicycle</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium">Bicycle Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter bicycle name"
            className="w-full p-2 border rounded"
          />
        </div>

     <div className="grid grid-cols-2 justify-between gap-4">
         {/* Brand */}
         <div>
          <label className="block text-gray-700 font-medium">Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            placeholder="Enter brand name"
            className="w-full p-2 border rounded"
          />
        </div>
         {/* Type - Dropdown */}
         <div>
          <label className="block text-gray-700 font-medium">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="" disabled>Select Bicycle Type</option>
            <option value="Mountain">Mountain</option>
            <option value="Road">Road</option>
            <option value="Hybrid">Hybrid</option>
            <option value="BMX">BMX</option>
            <option value="Electric">Electric</option>
          </select>
        </div>
     </div>

       <div className="flex justify-between gap-4">
         {/* Price */}
         <div>
          <label className="block text-gray-700 font-medium">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            placeholder="Enter price"
            className="w-full p-2 border rounded"
          />
        </div>
             {/* Quantity */}
        <div>
          <label className="block text-gray-700 font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            placeholder="Enter quantity"
            className="w-full p-2 border rounded"
          />
        </div>

       </div>       

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Enter description"
            className="w-full p-2 border rounded"
          />
        </div>

      

        {/* InStock Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="inStock"
            checked={formData.inStock}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700 font-medium">In Stock</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 w-full border border-gray-500 py-3 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300"
        >
          Add Bicycle
        </button>
      </form>
    </div>
  );
};

export default AddBicycle;

