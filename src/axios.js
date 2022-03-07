import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-27e2f/us-central1/api/"
});

export default instance;
