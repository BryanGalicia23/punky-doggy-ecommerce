const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const stripe = new Stripe("sk_test");

const app = express();

//middleware

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  console.log(req.body);
  res.send("recibido");
  const { amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "MXN",
      description: "Basket of products",
      confirm: true,
    });
    console.log(payment);
    return res.status(200).json({ message: "Succesful payment" });
  } catch (error) {
    return res.json({ message: error.raw.message });
  }
});

app.listen(3005, () => console.log("Server listening port", 3005));
