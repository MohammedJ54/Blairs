import { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/cart.jsx";
import Cart from "./Cart.jsx";
import { BsHeart } from "react-icons/bs";
import data from "../components/data/highlyTrending";

function HomePage() {
  const [showModal, setshowModal] = useState(false);
  const [items, setItems] = useState(data);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const toggle = () => {
    setshowModal(!showModal);
  };

  useEffect(() => {
    setItems(data);
  }, []);
  const notifyAddedToCart = (item) =>
    toast.success(`${item.title} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#fff",
        color: "#000",
      },
    });

  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.title} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  return (
    <div>
      <h1 className="pt-10 text-center font-bold text-4xl">Highly Trending</h1>
      <section className="p-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:px-20">
        {items.map((item) => {
          const { id, image, title, desc, category, type, price } = item;

          return (
            <div key={id} className="bg-gray-200 rounded-lg ">
              <img
                src={image}
                alt={title}
                className="rounded-t-lg pl-16 pt-5"
              />
              <div className="flex items-center justify-between">
                <div className="px-5">
                  <h2 className="font-bold mt-5">{title}</h2>
                  <p>{desc}</p>
                </div>

                <div className="px-5">
                  <BsHeart title="Add to Wishlist" className="cursor-pointer" />
                </div>
              </div>
              <div className="my-2 px-5">
                <small className="bg-zinc-500 rounded-full px-2 text-white tracking-widest mr-3">
                  {type}
                </small>
                <small className="bg-zinc-500 rounded-full px-2 text-white tracking-widest mr-3">
                  {category}
                </small>
                <div className="mt-6 flex justify-between items-center">
                  {!cartItems.find((item) => item.id === product.id) ? (
                    <button
                      className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        addToCart(product);
                        notifyAddedToCart(product);
                      }}
                    >
                      Add to cart
                    </button>
                  ) : (
                    <div className="flex gap-4">
                      <button
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={() => {
                          addToCart(product);
                        }}
                      >
                        +
                      </button>
                      <p className="text-gray-600">
                        {
                          cartItems.find((item) => item.id === product.id)
                            .quantity
                        }
                      </p>
                      <button
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={() => {
                          const cartItem = cartItems.find(
                            (item) => item.id === product.id
                          );
                          if (cartItem.quantity === 1) {
                            handleRemoveFromCart(product);
                          } else {
                            removeFromCart(product);
                          }
                        }}
                      >
                        -
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-2xl px-5 pb-6">$ {price}</p>
            </div>
          );
        })}
        <div>
          <Cart showModal={showModal} toggle={toggle} />
        </div>
      </section>
    </div>
  );
}
export default HomePage;
