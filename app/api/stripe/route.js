export const runtime = "edge";
import { NextResponse } from "next/server";
const stripe = require("stripe")(
  "sk_test_51PgrSiRslotwcTtqgXYpTw3izpN15A3nyLXEdxcrBnu6oBKz2WqkuMQ0Nhi6YJB7G7vLqSGPrbqA67WqHuqubqMm00ffIHZmYZ"
);
export async function POST(request) {
  const price = await request.json();

  console.log("price", price);
  // return req

  let session = 2;
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: price.title,
            },
            unit_amount: price.price * 100,
          },
          quantity: 1,
        },
      ],
      // success_url: `${process.env.NEXT_PUBLIC_URL}success`,
      // cancel_url: `${process.env.NEXT_PUBLIC_URL}cancel`,
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",

      // success_url: `${process.env.CLIENT_URL}/success.html`,
      // cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });
    // console.log({ session });
  } catch (e) {
    console.log({ error: e.message });
  }
  return NextResponse.json(session);
}
