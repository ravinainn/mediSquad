import { randomUUID } from "crypto";
import { Client } from "square";

const client = new Client({
  //   accessToken: process.env.SQUARE_ACCESS_TOKEN,
  accessToken:
    "EAAAl9gsBu5mVYEEVCqYHISLQOsvjoaAx9mnyrJZQrY2SqNMMGkimXZnBHcIOS6c",
  environment: "sandbox",
});

export const createPayment = async (amt, currency, sourceId) => {
  try {
    const response = await client.paymentsApi.createPayment({
      //   sourceId: sourceId,
      sourceId: sourceId,
      amountMoney: {
        amount: amt,
        currency: currency,
      },
      //   idempotencyKey: new Date().toISOString(),
      //   idempotencyKey: randomUUID(),
      idempotencyKey:
        new Date().toISOString() + Math.random().toString(36).substring(2, 15),
    });
    // return response.result;
    const serializedResult = JSON.parse(
      JSON.stringify(response.result, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );

    return serializedResult;
  } catch (error) {
    console.error("Error processing payment:", error);
    if (error.result && error.result.errors) {
      console.error("Square API errors:", error.result.errors);
    }
    throw error;
  }
};
