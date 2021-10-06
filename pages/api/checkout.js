// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from 'next-connect'
import onError from './../../middleware/onError';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const handler = nc({
  onError
});

export default handler
  .post(async (req, res, next) => {
    const { headcount, email, tokenId } = req.body;

    if (+headcount > 100 || +headcount < 1) {
      return next('BadRequest');
    }

    const totalCosts = +headcount <= 3 ? 600 : (+headcount * 200);

    return stripe.charges.create({
      amount: (totalCosts * 100),
      currency: 'usd',
      source: tokenId,
      description: 'Runner Beta Company Membership payment',
      statement_descriptor: 'Runner Beta Payment',
      metadata: {
        email,
        head_count: headcount,
        total_costs: totalCosts,
        starting_date: Date(),
      },
    }).then((stripeChargeResponse) => {
      if (stripeChargeResponse.paid) {
        // TODO: send out email confirmation via mailgun or mailchimp
        return res.json({
          success: true
         })
      }
      return next({
        name: 'ValidationError',
        message: "We could charge your card right now. Please try again in a few minutes."
      });
    })
    .catch((error) => {
      return next({
        name: 'ValidationError',
        message: "We could charge your card right now. Please try again in a few minutes."
      });
    })
  });