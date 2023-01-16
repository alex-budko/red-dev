import axios from "axios";

export const get_users = async () => {
  try {
    let users = null;
    await axios
      .get(`http://localhost:8000/twitter/users/`)
      .then((res) => {
        users = res;
      });
    return users.data;
  } catch (err) {
    return { error: err };
  }
};
