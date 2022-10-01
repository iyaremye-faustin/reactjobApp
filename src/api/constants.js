import axios from "axios";

const SERVER_URL="http://myhost.sihs.education/";
const api = axios.create({
  baseURL: `${SERVER_URL}`,
  headers: {},
});

export {api,SERVER_URL}