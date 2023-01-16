import axios from "axios";

export const get_tweets = async () => {
  try {
    let tweets = null;
    await axios
      .get(`http://localhost:8000/twitter/tweets/`)
      .then((res) => {
        tweets = res;
      });
    return tweets.data;
  } catch (err) {
    return { error: err };
  }
};
