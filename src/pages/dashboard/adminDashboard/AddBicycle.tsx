/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAddProductsMutation } from "../../../redux/features/admin/product/productApi";

type ApiError = { data?: { message?: string } };

const AddBicycle = () => {
  const [addProduct] = useAddProductsMutation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formattedData = {
      name: data.name,
      brand: data.brand,
      type: data.type,
      price: Number(data.price),
      quantity: Number(data.quantity),
      image: data.image,
      description: data.description,
      inStock: data.inStock === true,
    };

    const toastId = toast.loading("Adding bicycle...");
    try {
      await addProduct(formattedData).unwrap();
      toast.success("Bicycle added successfully!", { id: toastId });
      reset();
    } catch (error) {
      toast.error((error as ApiError)?.data?.message || "Failed to add bicycle", { id: toastId });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-4 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-100">
          <h2 className="text-3xl sm:text-4xl font-thin text-center text-gray-900 mb-8">
            Add New Bicycle
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Brand</label>
                <input
                  type="text"
                  {...register("brand", { required: "Brand is required" })}
                  placeholder="e.g., Trek"
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition"
                />
                {errors.brand && <p className="text-red-600 text-sm mt-1">{errors.brand.message as string}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Type</label>
                <select
                  {...register("type", { required: "Type is required" })}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition"
                >
                  <option value="">Select type...</option>
                  <option value="Mountain">Mountain</option>
                  <option value="Road">Road</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="BMX">BMX</option>
                  <option value="Electric">Electric</option>
                </select>
                {errors.type && <p className="text-red-600 text-sm mt-1">{errors.type.message as string}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Price ($)</label>
                <input
                  type="number"
                  step="0.01"
                  {...register("price", { required: "Price is required", valueAsNumber: true })}
                  placeholder="299.99"
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition"
                />
                {errors.price && <p className="text-red-600 text-sm mt-1">{errors.price.message as string}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Quantity</label>
                <input
                  type="number"
                  {...register("quantity", { required: "Quantity is required", valueAsNumber: true })}
                  placeholder="50"
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition"
                />
                {errors.quantity && <p className="text-red-600 text-sm mt-1">{errors.quantity.message as string}</p>}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Bicycle Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Trek Marlin 7"
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message as string}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Image URL</label>
              <input
                type="url"
                {...register("image", { required: "Image URL is required" })}
                placeholder="https://example.com/bike.jpg"
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition"
              />
              {errors.image && <p className="text-red-600 text-sm mt-1">{errors.image.message as string}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Description</label>
              <textarea
                rows={4}
                {...register("description", { required: "Description is required" })}
                placeholder="Write about features, specs..."
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition resize-none"
              />
              {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description.message as string}</p>}
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                {...register("inStock")}
                className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
              />
              <label className="text-gray-700 font-medium">In Stock</label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-red-600 to-green-600 text-white font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              Add Bicycle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBicycle;