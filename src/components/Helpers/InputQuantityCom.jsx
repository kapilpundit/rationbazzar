import { useState } from "react";
export default function InputQuantityCom({
  calcTotalPrice,
  productId,
  incrementQty,
  cartId,
  decrementQty,
  qyt,
}) {
  const [quantity, setQuantity] = useState(qyt);
  const increment = () => {
    setQuantity((prev) => prev + 1);
    calcTotalPrice(cartId, quantity + 1);
    incrementQty(cartId);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      calcTotalPrice(cartId, quantity - 1);
      decrementQty(cartId);
    }
  };
  return (
    <div className="w-[120px] h-[40px] rounded px-[26px] flex items-center border border-qgray-border">
      <div className="flex justify-between items-center w-full">
        <button
          onClick={decrement}
          type="button"
          className="text-base text-qgray transform scale-100 hover:scale-110 hover:text-qgreen transition duration-300 ease-in-out"
        >
          -
        </button>
        <span className="text-qblack">{quantity}</span>
        <button
          onClick={increment}
          type="button"
          className="text-base text-qgray transform scale-100 hover:scale-110 hover:text-qgreen transition duration-300 ease-in-out"
        >
          +
        </button>
      </div>
    </div>
  );
}
