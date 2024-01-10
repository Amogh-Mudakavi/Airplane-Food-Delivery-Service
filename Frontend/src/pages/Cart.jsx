import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const handleCheckOut = () => {
    // Perform any additional checkout logic here
    // ...

    // Show success toast
    toast.success("Order Completed Successfully");

    // Clear the cart in Redux store
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {cart.length > 0 ? (
        <div className="flex flex-col items-center gap-5 p-5 bg-white rounded-lg shadow-md mt-10">
          <div className="w-full">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col items-center justify-between bg-gray-100 p-5 rounded-md">
              <div className="text-lg font-semibold">Your Cart</div>
              <div className="text-lg font-semibold">Summary</div>
              <p className="text-sm">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-between bg-gray-100 p-5 rounded-md">
              <p className="text-lg font-semibold">Total Amount: ${parseFloat(totalAmount).toFixed(2)}</p>
              <button
                className="w-full py-2 px-4 mt-2 rounded-lg text-white font-semibold text-sm focus:outline-none bg-green-600 hover:bg-green-700"
                onClick={handleCheckOut}
              >
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-2xl font-semibold">Cart Empty</h1>
          <Link to={"/product"}>
            <button className="w-full py-2 px-4 mt-5 rounded-lg text-white font-semibold text-sm focus:outline-none bg-green-600 hover:bg-green-700">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;