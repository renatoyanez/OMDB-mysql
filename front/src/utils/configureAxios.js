import axios from "axios";
import { API_URL } from "../config/default";

export default () => {
  axios.defaults.baseURL = `${API_URL}/api`;
};
