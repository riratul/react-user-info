import axios from "axios";
const MAINURL = "https://jsonplaceholder.typicode.com";

// export const setUserSession = (user) => {
//   sessionStorage.setItem("user", JSON.stringify(user));
// };
// export const removeUserSession = () => {
//   sessionStorage.removeItem("user");
// };
export default {
  getAllPosts: () => axios.get(`${MAINURL}/posts`),
  getAllUsers: () => axios.get(`${MAINURL}/users`),
  addPost: (post) => axios.post(`${MAINURL}/posts`, post),
  editPost: (postId) => axios.get(`${MAINURL}/posts/${postId}`),
  deletePost: (postId) => axios.delete(`${MAINURL}/posts/${postId}`),
};
