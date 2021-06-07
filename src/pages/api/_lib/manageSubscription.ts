import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
  subsciptionId: string,
  customerId: string,
  createAction = false
) {
  console.log(subsciptionId, customerId);
  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(q.Match(q.Index("user_by_stripe_customer_id"), customerId))
    )
  );
  const subsciption = await stripe.subscriptions.retrieve(subsciptionId);
  const subsciptionData = {
    id: subsciption.id,
    userId: userRef,
    status: subsciption.status,
    price_id: subsciption.items.data[0].price.id,
  };
  if (createAction)
    await fauna.query(
      q.Create(q.Collection("subscriptions"), { data: subsciptionData })
    );
  else {
    await fauna.query(
      q.Replace(
        q.Select(
          "ref",
          q.Get(q.Match(q.Index("subscription_by_id"), subsciptionId))
        ),
        {
          data: subsciptionData,
        }
      )
    );
  }
}
