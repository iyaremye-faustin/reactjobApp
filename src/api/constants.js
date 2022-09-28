import axios from "axios";

const SERVER_URL="http://127.0.0.1/scanweb/";
const api = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {},
});

export {api,SERVER_URL}