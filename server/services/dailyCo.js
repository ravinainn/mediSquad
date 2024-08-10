import axios from "axios";

const dailyApiKey = process.env.DAILY_API_KEY;

export const createRoom = async () => {
  try {
    const response = await axios.post(
      "https://api.daily.co/v1/rooms/",
      {
        properties: {
          max_participants: 2,
          enable_chat: true,
          enable_knocking: true,
          exp: Math.round(Date.now() / 1000) + 60 * 10,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 256004953c5ae436c9d50ca0f190e744d875ebad451f7e74772b0a8f031cdc64`,
        },
      }
    );
    return response.data.url;
    // res.status(200).json({ roomUrl: response.data.url });
  } catch (error) {
    // console.error("Error creating room:", error.response.data);
    console.log(error.response.data, "daily");
  }
};
