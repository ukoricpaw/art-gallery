import axios from "axios";

export const api = axios.create({
  baseURL: "https://art-gallery-backend.herokuapp.com/api/v1",
});
