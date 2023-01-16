import axios from "axios";

export const signup = async (username, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    username,
    password,
  });

  let user = null;

  try {
    await axios
      .post(`http://localhost:8000/market/users/`, body, config)
      .then((res) => {
        const user_data = res.data

        user = {
          username: user_data["username"],
        };
        localStorage.setItem("user", JSON.stringify(user));
      });

    return user
    
  } catch (err) {
    return { error: err };
  }
};
