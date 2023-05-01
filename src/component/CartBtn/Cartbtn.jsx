// Cart.jsx
import React, { useState } from "react";
import Cart from "../Cart/Cart";

function Cartbtn() {
  const [buttonText, setButtonText] = useState(null);

  const handleButtonClick = (buttonName) => {
    setButtonText(buttonName);
  };

  return (
    <div>
      <Handle handleButtonClick={handleButtonClick} />
      {buttonText && <p>Button Text: {buttonText}</p>}
    </div>
  );
}

export default Cart;
