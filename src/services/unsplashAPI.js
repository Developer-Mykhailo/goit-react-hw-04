//unsplashAPI.js

import axios from "axios";

export const fetchDataAPI = async (query = "", page = 1) => {
  try {
    const { data } = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID mByrnsyWzIU56FrsYJ5CK5nh9i8ZH7MNjz_FqZiYhYk",
      },
      params: {
        query,
        page,
        per_page: 10,
      },
    });

    return data;
  } catch (error) {
    console.error("Error fetching photos:", error.message);
  }
};
