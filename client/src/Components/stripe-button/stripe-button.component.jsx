import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51NQrwfIlXxtnNnAT28DBTBPxNFn2Cc034zhzV5q3kkz1lCOWlb1YUWiPuUDWeCJKgn6VGmWCNM0QIredOsannUcT00rZq0Op8Y";

  const onToken = (token) => {
    fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: priceForStripe,
        token: token,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Payment Error");
        }
        // Check if the response is empty before parsing it as JSON
        if (response.status === 204) {
          // Handle the empty response here, or simply return a success message
          console.log("Payment successful"); // You can log or handle the success here
          return;
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data here, if applicable
      })
      .catch((error) => {
        console.error("Payment Error: ", error);
        alert("There was an issue with your payment!");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
