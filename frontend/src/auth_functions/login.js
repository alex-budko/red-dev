import axios from "axios";
import jwt_decode from "jwt-decode";

export const login = async (username, password) => {
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
      .post(`http://localhost:8000/api/token/`, body, config)
      .then((res) => {
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);

        const user_data = jwt_decode(res.data.access);

        user = {
          username: user_data["username"]
        };
        localStorage.setItem("user", JSON.stringify(user));
      });

    return user
    
  } catch (err) {
    return { error: err };
  }
};
