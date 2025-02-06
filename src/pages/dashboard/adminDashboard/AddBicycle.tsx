/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppDispatch } from "../../../redux/hooks";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAddProductsMutation } from "../../../redux/features/admin/product/productApi";



const AddBicycle = () => {
  const dispatch = useAppDispatch();
  const [addProduct] = useAddProductsMutation();
  const { register, handleSubmit, reset } = useForm();

  // Form Submit Handler
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Raw Form Data:", data);
  
    const formattedData = {
      name: data.name,
      brand: data.brand,
      type: data.type,
      price: Number(data.price), // Ensure price is a number
      quantity: Number(data.quantity), // Ensure quantity is a number
      image: data.image,
      description: data.description,
      inStock: data.inStock ? true : false, // Convert checkbox value properly
    };
  
    console.log("Formatted Data:", formattedData);
  
    const toastId = toast.loading("Creating...");
  
    try {
      const response = await addProduct(formattedData).unwrap();  // Ensure .unwrap() is correctly used
      console.log("Server Response:", response);
      toast.success("Bicycle added successfully!", { id: toastId });
      reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.data?.message || "Failed to add bicycle", { id: toastId });
    }
  };
  

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Add a Bicycle</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        
      <div className="grid grid-cols-2 gap-4">
          {/* Brand */}
          <div>
            <label className="block text-gray-700 font-medium">Brand</label>
            <input
              type="text"
              {...register("brand", { required: true })}
              placeholder="Enter brand name"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Type - Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium">Type</label>
            <select {...register("type", { required: true })} className="w-full p-2 border rounded">
              <option value="" disabled>Select Bicycle Type</option>
              <option value="Mountain">Mountain</option>
              <option value="Road">Road</option>
              <option value="Hybrid">Hybrid</option>
              <option value="BMX">BMX</option>
              <option value="Electric">Electric</option>
            </select>
          </div>
        </div>
        

        <div className="grid grid-cols-2 gap-4">
          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium">Price ($)</label>
            <input
              type="number"
              {...register("price", { required: "Price is required", valueAsNumber: true })}
              placeholder="Enter price"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-gray-700 font-medium">Quantity</label>
            <input
              type="number"
              {...register("quantity", { required: true, valueAsNumber: true })}
              placeholder="Enter quantity"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium">Bicycle Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter bicycle name"
            className="w-full p-2 border rounded"
          />
        </div>
        <label className="block text-gray-700 font-medium">Bicycle image</label>
          <input
            type="text"
            {...register("image", { required: "Image is required" })}
            placeholder="Enter bicycle image Link"
            className="w-full p-2 border rounded"
          />

        

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Enter description"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* InStock Checkbox */}
        <div className="flex items-center">
          <input type="checkbox" {...register("inStock")} className="mr-2" />
          <label className="text-gray-700 font-medium">In Stock</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 text-white border border-gray-500 rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300"
        >
          Add Bicycle
        </button>
      </form>
    </div>
  );
};

export default AddBicycle;
