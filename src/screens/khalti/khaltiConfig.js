import myKey from "./khaltiKey";
let config = {
  publicKey: myKey.publicTestKey,
  productIdentity: "123766",
  productName: "Kalij Farm",
  productUrl: "https://kalij.netlify.app/kalijs",
  eventHandler: {
    onSuccess(payload) { 
      console.log(payload);
      alert("Payment Successful");
    },
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
  ],
};

export default config;