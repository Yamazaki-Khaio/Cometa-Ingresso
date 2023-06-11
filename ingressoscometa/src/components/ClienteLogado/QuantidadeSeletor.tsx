import React, { useState } from "react";

export default function QuantitySelector(props) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleDecrement}
        className="border border-gray-400 rounded-md p-2"
      >
        -
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="border w-16 border-gray-400 rounded-md p-2 text-center"
      />
      <button
        onClick={handleIncrement}
        className="border border-gray-400 rounded-md p-2"
      >
        +
      </button>
    </div>
  );
}
