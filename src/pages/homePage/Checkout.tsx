import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";

// const cartItems =useSelectorr((state: RootState) => state.cart.items);
// console.log("Redux state:", useSelector((state: RootState) => state));

// console.log(cartItems.length)
// // if (!cartItems || cartItems.length === 0) {
// //   return <p>No items in the cart.</p>;
// // }

const Checkout = () => {
  return (
    <div className="text-white text-center font-bold text-3xl">Checkout</div>
  )
}

export default Checkout