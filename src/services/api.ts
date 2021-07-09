import axios from "axios";

const api = axios.create({
  baseURL: "https://api.desenvolvimento.prefeituravirtual.app.br/api/",
});

export default api;
