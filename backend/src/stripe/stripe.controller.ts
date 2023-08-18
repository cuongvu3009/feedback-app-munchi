import { Request, Response } from "express";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-08-16",
});
export class StripeController {
  public static async charge(req: Request, res: Response): Promise<void> {
    const { amount, token } = req.body;

    try {
      const paymentMethod = await stripe.paymentMethods.create({
        type: "card",
        card: { token },
      });

      const paymentIntent = await stripe.paymentIntents.create({
        amount, // amount in cents
        currency: "eur",
        payment_method: paymentMethod.id,
        confirm: true,
        automatic_payment_methods: {
          enabled: true,
        },
        return_url: "http://localhost:3000/end-feedback",
      });

      res.send({ success: true, clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Charge failed" });
    }
  }
}
