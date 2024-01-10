import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
// import Home from "../pages/Home";
const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  if (!post) {
    // Handle the case where 'post' is undefined or null
    return <p>Error: Product information is missing or invalid.</p>;
  }

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  const addItemToCart = (drink) => {
    // Create the drink item
    const drinkItem = {
      id: drink.id + drink.temp,
      title: drink.title,
      price: drink.price,
      type: "Drink", // You can customize this property based on your needs
      mealId: post.id, // Track the meal ID for the selected drink
    };
  
    // Find the existing selected drink for this meal
    const existingSelectedDrink = cart.find(
      (item) => item.mealId === post.id && item.type === "Drink"
    );
  
    // If a drink is already selected for this meal, and it's not the currently selected drink, remove it
    if (existingSelectedDrink && existingSelectedDrink.id !== drinkItem.id) {
      dispatch(remove(existingSelectedDrink.id));
      toast.error(`${existingSelectedDrink.title} removed from cart`);
    }
  
    // Toggle selection for the current drink
    const isAlreadySelected = cart.some(
      (item) => item.id === drinkItem.id && item.mealId === post.id
    );
  
    // If the current drink is already selected, remove it; otherwise, add it to the cart
    if (isAlreadySelected) {
      dispatch(remove(drinkItem.id));
      toast.error(`${drink.title} removed from cart`);
    } else {
      dispatch(add(drinkItem));
      toast.success(`${drink.title} added to Cart`);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline bg-white">
      <div className="w-full">
        {post.img && (
          <img
            src={post.img}
            alt={post.id}
            className="w-full h-48 object-cover rounded-xl mb-3"
          />
        )}
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-semibold text-lg truncate">
            {post.title}
          </p>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        <p className="text-gray-500 text-sm">{post.description}</p>
      </div>

      <div className="flex flex-col gap-2">
        {post.drinks.map((drink) => (
          <button
            key={drink.id+drink.temp}
            className={`py-2 px-4 rounded-lg text-white font-semibold text-sm focus:outline-none ${
              cart.some(
                (p) =>
                  p.id === drink.id+drink.temp &&
                  p.type === "Drink" &&
                  p.mealId === post.id
              )
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
            onClick={() => addItemToCart(drink)}
          >
            {cart.some(
              (p) =>
                p.id === drink.id+drink.temp &&
                p.type === "Drink" &&
                p.mealId === post.id
            )
              ? `Remove ${drink.title}`
              : `Add ${drink.title}`}
          </button>
        ))}
      </div>

      <button
        className={`w-full py-2 px-4 mt-2 rounded-lg text-white font-semibold text-sm focus:outline-none ${
          cart.some((p) => p.id === post.id)
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        }`}
        onClick={cart.some((p) => p.id === post.id) ? removeFromCart : addToCart}
      >
        {cart.some((p) => p.id === post.id) ? "Remove Item" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Product;
