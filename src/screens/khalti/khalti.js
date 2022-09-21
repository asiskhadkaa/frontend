import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";

export default function Khalti() {
  let checkout = new KhaltiCheckout(config);

  let buttonStyles = {
    backgroundColor: '#ED9F64',
    padding: '15px 12px',
    border : '0px solid white',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 'bold',
  '&:hover': {
    background: "#FE540B",
    color: 'white',
  }}
  return (
    <div>
      <button
        onClick={() => checkout.show({ amount: 1000})}
        style={buttonStyles}
      >
        Pay Via Khalti
      </button>
    </div>
  );
}