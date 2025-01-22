import http from "./axiosInstance";
import { apiPrompt } from "@app/types/chat";

class Api {
  async get(url: string) {
    const response = await http.get(url);
    return response.data;
  }

  async post(url: string, data: apiPrompt) {
    const response = await http.post(url, data);
    return response.data;
  }
}

const Services = new Api();
export default Services;
