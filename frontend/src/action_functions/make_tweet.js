import axios from "axios";

export const make_tweet = async (username, text) => {
  try {
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        user: username,
        text,
      });
    await axios
      .post(`http://localhost:8000/twitter/tweet/`, body, config)
    return true;
  } catch (err) {
    return { error: err };
  }
};
