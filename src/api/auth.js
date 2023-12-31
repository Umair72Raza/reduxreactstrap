import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:4000" });
export const getUsers = (id) => API.get(`/loginSystem/getUserById/${id}`);
// export const loginUser = (email, password, role) =>
//   API.post("http://localhost:4000/loginSystem/Login/", {
//     email,
//     password,
//     role,
//   });

export const loginUser = async (cred) => {
  try {
    const { email, password, role } = cred;
    const response = await axios.post(
      "http://localhost:4000/loginSystem/Login/",
      {
        email,
        password,
        role,
      }
    );
    return response;
  } catch (error) {
    console.log("error", error.message);
  }
};
