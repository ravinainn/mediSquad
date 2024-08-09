import axios from "axios";

const DAILY_API_KEY = process.env.DAILY_API_KEY;
const DAILY_API_URL = "https://api.daily.co/v1";

export const createDailyRoom = async () => {
  try {
    const response = await axios.post(
      `${DAILY_API_URL}/rooms`,
      {
        properties: {
          max_participants: 2,
          enable_chat: true,
          enable_knocking: true,
        },
      },
      {
        headers: { Authorization: `Bearer ${DAILY_API_KEY}` },
      }
    );
    return response.data.name;
  } catch (error) {
    console.error("Error creating Daily room:", error);
    throw error;
  }
};

export const getDailyRoomToken = async (roomName, isOwner = false) => {
  try {
    const response = await axios.post(
      `${DAILY_API_URL}/meeting-tokens`,
      {
        properties: {
          room_name: roomName,
          is_owner: isOwner,
        },
      },
      {
        headers: { Authorization: `Bearer ${DAILY_API_KEY}` },
      }
    );
    return response.data.token;
  } catch (error) {
    console.error("Error getting Daily room token:", error);
    throw error;
  }
};
