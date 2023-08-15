import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // 设置基本的 API URL
  timeout: 10000, // 请求超时时间
});

const api = {
  get: async (url, params) => {
    try {
      const response = await instance.get(url, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  post: async (url, data) => {
    try {
      const response = await instance.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  // 可以添加更多的请求方法，如 put、delete 等
};

export default api;
