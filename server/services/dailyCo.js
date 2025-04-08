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
          //   enable_pip_join: true,
          exp: Math.round(Date.now() / 1000) + 60 * 60,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer d38441ab16bc5895e931a41647debdb882369454d5b22c3dc1e7f503a987ba16`,
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
