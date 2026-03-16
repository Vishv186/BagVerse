// This will connect React Frontend to SpringBoot Backend.

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

export default API;
