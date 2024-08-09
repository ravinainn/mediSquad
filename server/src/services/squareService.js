import { Client, Environment } from "square";

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox, // Use Environment.Production for live payments
});

export const createPayment = async (amount, currency, sourceId) => {
  try {
    const response = await client.paymentsApi.createPayment({
      sourceId: sourceId,
      amountMoney: {
        amount: amount,
        currency: currency,
      },
      idempotencyKey: new Date().toISOString(),
    });
    return response.result.payment;
  } catch (error) {
    console.error("Error processing payment:", error);
    throw error;
  }
};
