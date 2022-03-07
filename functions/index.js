// check you are in the function directory!!!!!!!!!!!!!!!!!!!!!

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51KSQEdBvMfkwbqSEo1gRwByR7EBP3TyskVvxYu9WYhRWSFfQ6QOprwCmjX9duX27kvTurS9ZKLbe6NLmgEII5HGA002VO3iwTZ"
);

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request received for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunit for currrency
    currency: "usd", // currency
  });
  // 200 means it is all good!
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/challenge-27e2f/us-central1/api
