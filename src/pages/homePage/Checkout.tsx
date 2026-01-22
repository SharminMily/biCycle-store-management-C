import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useCreateOrderMutation } from "../../redux/features/order/orderApi";
import {
  removeFromCart,
  updateQuantity,
} from "../../redux/features/cart/cartSlice";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Toast } from "primereact/toast";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const toastRef = useRef<Toast>(null);

  const cartData = useAppSelector((state) => state.cart);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [createOrder, { isLoading, isError, error }] =
    useCreateOrderMutation();

  const handlePlaceOrder = async () => {
    if (cartData.items.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

  try {
  const response = await createOrder({ products: cartData.items }).unwrap();
  const checkoutUrl = response?.checkout_url ?? response?.data?.checkout_url;

  if (!checkoutUrl?.startsWith("http")) {
    throw new Error("No valid checkout URL received");
  }

  toast.success("Order created! Redirecting...");
  setTimeout(() => window.location.href = checkoutUrl, 1200);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (err: any) {
  console.error(err);
  let msg = "Failed to create order";
  if (err.status === 'PARSING_ERROR' && err.originalStatus === 404) {
    msg = "Backend route not found (404) — wrong URL?";
  } else if (err.data?.message) {
    msg = err.data.message;
  }
  toast.error(msg);
}



  };

  // Handle loading and error toasts
  useEffect(() => {
    if (isLoading) {
      toast.loading("Processing your order...", { id: "order" });
    } else {
      toast.dismiss("order");
    }

    if (isError && error) {
      toast.error("Something went wrong. Please try again.");
    }
  }, [isLoading, isError, error]);

  const subtotal = cartData.totalPrice.toFixed(2);
  const shipping = cartData.totalPrice > 100 ? 0 : 10; // Example: Free shipping over $100
  const total = (parseFloat(subtotal) + shipping).toFixed(2);

  return (
    <>
      <Toast ref={toastRef} />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Checkout
          </h1>

          {cartData.items.length === 0 ? (
            <Card className="text-center py-16">
              <i className="pi pi-shopping-cart text-6xl text-gray-300 mb-4" />
              <p className="text-xl text-gray-600">Your cart is empty</p>
              <Button
                label="Continue Shopping"
                icon="pi pi-arrow-left"
                className="mt-6"
                link
                onClick={() => window.history.back()}
              />
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card className="shadow-xl">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Your Items ({cartData.totalQuantity})
                  </h2>

                  <div className="space-y-6">
                    {cartData.items.map((item) => (
                      <div
                        key={item.product}
                        className="flex items-center gap-6 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                      >
                        <img
                          src={item.image || "/placeholder.jpg"}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg shadow-md"
                        />

                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-800">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            In stock: {item.stock}
                          </p>

                          <div className="flex items-center gap-3 mt-3">
                            <Button
                              icon="pi pi-minus"
                              className="p-button-rounded p-button-outlined p-button-sm"
                              onClick={() =>
                                dispatch(
                                  updateQuantity({
                                    id: item.product,
                                    quantity: Math.max(item.quantity - 1, 1),
                                  })
                                )
                              }
                              disabled={item.quantity <= 1}
                            />
                            <span className="font-medium text-lg w-12 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              icon="pi pi-plus"
                              className="p-button-rounded p-button-outlined p-button-sm"
                              onClick={() =>
                                dispatch(
                                  updateQuantity({
                                    id: item.product,
                                    quantity: Math.min(item.quantity + 1, item.stock),
                                  })
                                )
                              }
                              disabled={item.quantity >= item.stock}
                            />
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-xl font-bold text-gray-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => dispatch(removeFromCart(item.product))}
                            className="text-red-600 text-sm hover:underline mt-2 inline-block"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="shadow-xl sticky top-6">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                    Order Summary
                  </h2>

                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span className="font-medium">${subtotal}</span>
                    </div>

                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span className={shipping === 0 ? "text-green-600" : ""}>
                        {shipping === 0 ? "Free" : `$${shipping}`}
                      </span>
                    </div>

                    <Divider />

                    <div className="flex justify-between text-xl font-bold text-gray-800">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>

                    {shipping === 0 && (
                      <p className="text-sm text-green-600 text-center mt-2">
                        🎉 Free shipping applied!
                      </p>
                    )}
                  </div>

                  <Button
                    label={isLoading ? "Processing..." : "Place Order"}
                    icon={isLoading ? "pi pi-spin pi-spinner" : "pi pi-lock"}
                    className="w-full mt-8 p-button-lg p-button-success"
                    onClick={handlePlaceOrder}
                    disabled={isLoading || cartData.items.length === 0}
                  />
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;