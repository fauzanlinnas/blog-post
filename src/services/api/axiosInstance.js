import Axios from "axios";

// @create an instance
const Api = Axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
});

// @default export
export default Api;
