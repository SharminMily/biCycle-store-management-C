import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useCreateOrderMutation } from "../../redux/features/order/orderApi";
import {
  removeFromCart,
  updateQuantity,
} from "../../redux/features/cart/cartSlice";
import { Button } from "primereact/button";
import { useEffect } from "react";
import { toast } from "sonner";

const Checkout = () => {
  const dispatch = useAppDispatch();

  const cartData = useAppSelector((state) => state.cart);

  console.log("Cart data in Checkout:", cartData);
  const [createOrder, { isLoading, isSuccess, data, isError, error }] =
    useCreateOrderMutation();
    // console.log(createOrder)
  

  const handlePlaceOrder = async () => {
    try {
      const response = await createOrder({ products: cartData.items }).unwrap();
      
      console.log("🟢 Full Order Response:", response); 
  
      // Extract checkout URL properly
      const checkoutUrl = response?.data?.checkout_url || response?.checkout_url;
      
      console.log("🔵 Extracted Checkout URL:", checkoutUrl); // Print extracted URL
  
      if (typeof checkoutUrl === "string" && checkoutUrl.startsWith("http")) {
        console.log("✅ Redirecting to:", checkoutUrl);
        window.location.href = checkoutUrl;
      } else {
        console.error("❌ Invalid checkout URL received:", checkoutUrl);
        toast.error("Invalid checkout URL! Check console for details.");
      }
    } catch (err) {
      console.error("❌ Order creation error:", err);
      toast.error("Order creation failed!");
    }
  };
  const toastId = "cart";
  useEffect(() => {
    if (isLoading) toast.loading("loading ...", { id: toastId });

    if (data?.data?.checkout_url) {
      console.log("Redirecting to:", data.data.checkout_url); // Log URL
      setTimeout(() => {
          window.location.href = data.data.checkout_url;
      }, 1000);
  } else {
      console.error("checkout_url is missing in API response");
      toast.error("Payment URL not found. Try again.");
  }
   

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);
  

  return (
    <div className="max-w-5xl mx-auto mt-20">
    
      <div className="flex-1 p-12 rounded-b-md text-white bg-[#020227] overflow-y-auto">
        {cartData.items.length > 0 ? (
          <ul className="space-y-4">
            {cartData.items.map((item) => (
              <li key={item.product} className="flex  justify-between items-center gap-4">

              <div className="flex justify-between items-center gap-40">
              <div className="">
               <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded object-cover"
                />           

               </div>

                <div className="flex-1">
                  <h4 className="text-sm font-medium">{item.name}</h4>
                  
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.product,
                            quantity: Math.max(item.quantity - 1, 1),
                          })
                        )
                      }
                      className="w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.product,
                            quantity: Math.min(item.quantity + 1, item.stock),
                          })
                        )
                      }
                      className="w-6 h-6 bg-gray-200 text-black rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>


                </div>
              </div>



                <div className="">
                <p className="text-sm font-semibold text-white">
                  ${(item.quantity * item.price).toFixed(2)}
                </p>
                <button
                  onClick={() => dispatch(removeFromCart(item.product))}
                  className="text-red-600 text-sm hover:underline"
                >
                  Remove
                </button>
                </div>
                
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}

        <div className="border-b my-3"></div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-white">
            Total Quantity:
          </span>
          <span className="text-lg font-bold">{cartData.totalQuantity}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-white">
            Total Price:
          </span>
          <span className="text-lg font-bold">
            ${cartData.totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
      <Button className="w-full"  onClick={() => { 
  console.log("Button Clicked!"); // ✅ Debug Click
  handlePlaceOrder(); 
}}>
        Place Order
      </Button>
    </div>
  );
};

export default Checkout;

// import { useState, useEffect } from "react";

// const Checkout = () => {
//   const [cart, setCart] = useState([]);
//   const [error, setError] = useState(null);

//   // ✅ Cart Load from Local Storage
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   }, []);

//   // ✅ Quantity Update Function
//   const updateQuantity = (id, newQuantity, stock) => {
//     if (newQuantity < 1) return; // Negative quantity prevent

//     if (newQuantity > stock) {
//       setError(`❌ Stock Limit Reached! Only ${stock} Available.`);
//       return;
//     }

//     setError(null); // ✅ Clear Error

//     const updatedCart = cart.map((item) =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     );

//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Update Local Storage
//   };

//   // ✅ Total Price Calculation
//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="p-6 mx-20 bg-gray-900 text-white min-h-screen">
//       <h1 className="text-3xl font-bold mb-4">Checkout</h1>

//       {/* ✅ Show Error if Stock is Exceeded */}
//       {error && <p className="text-red-500 font-bold">{error}</p>}

//       {cart.length === 0 ? (
//         <p className="text-gray-300">No items in cart</p>
//       ) : (
//         <div>
//           {cart.map((item) => (
//             <div key={item.id} className="border-b pb-4 mb-4 flex justify-between items-center">
//               <div>
//                 <h2 className="text-xl">{item.name}</h2>
//                 <p>Price: ${item.price}</p>
//                 <p className="text-yellow-400">Stock: {item.stock}</p> {/* ✅ Show Stock */}
//               </div>

//               {/* ✅ Quantity Control */}
//               <div className="flex items-center">
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity - 1, item.stock)}
//                   className="bg-red-500 px-3 py-1 rounded-l"
//                 >
//                   -
//                 </button>
//                 <span className="px-4 py-2 bg-gray-700">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity + 1, item.stock)}
//                   className={`px-3 py-1 rounded-r ${
//                     item.quantity >= item.stock ? "bg-gray-600 cursor-not-allowed" : "bg-green-500"
//                   }`}
//                   disabled={item.quantity >= item.stock} // ✅ Disable Button if Stock Exceeded
//                 >
//                   +
//                 </button>
//               </div>

//               {/* ✅ Dynamic Total Price per Item */}
//               <p>Total: ${item.price * item.quantity}</p>
//             </div>
//           ))}

//           {/* ✅ Overall Total Price */}
//           <h2 className="text-2xl font-bold mt-4">Total Price: ${totalPrice}</h2>
//           <button className="bg-blue-500 px-6 py-2 mt-4 rounded" onClick={() => alert("Proceed to Payment")}>
//             Proceed to Payment
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Checkout;
