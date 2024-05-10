import React, { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
//const cartItems=[];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = shippingCharges + tax + subtotal;
const discount = 400;

const Cart = () => {
  const [couponCode, setCounponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCounponCode] = useState<boolean>(false);
  
  useEffect(() => {
    const id = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCounponCode(true);
      }else{
        setIsValidCounponCode(false)
      }
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [couponCode]);
  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Subtotal: {subtotal}</p>
        <p>Shipping Charges: {shippingCharges}</p>
        <p>Tax: {tax}</p>
        <p>
          Discount: <em>- Rs.{discount}</em> {shippingCharges}
        </p>
        <p>
          <b>Total: {total}</b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCounponCode(e.target.value)}
        ></input>
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              Rs.{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid
              <VscError />
            </span>
          ))}
      </aside>
    </div>
  );
};

export default Cart;
