import { useState, useEffect } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (packages) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (packages.length) {
      const savedCart = getStoredCart();

      const storedCart = [];
      for (const key in savedCart) {
        //console.log("add to product key", key);
        //console.log(packages);
        const addedProduct = packages.find((p) => p._id == key);
        //console.log("add to product", addedProduct);
        if (addedProduct) {
          // set quantity
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [packages]);

  return [cart, setCart];
};

export default useCart;
