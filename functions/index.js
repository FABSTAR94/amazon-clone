const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPx7bHNiM4igthifSAEhraEwPPOosxmBxHGsPTBsgtViBTew5AR8SRQKihWN9srI9bngIptdhJTF7oeHMVHqrNF00v9O56BxW"
);
//To set up an API we need:

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log(
    "Payment Request Received BOOOOMA!!!, for this amount >>> ",
    total
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd", //usd
  });
  //ok -created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/clone-7d06c/us-central1/api
