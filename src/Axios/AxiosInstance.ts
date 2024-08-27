import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "",
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer `;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        case "401":
          console.error("Unauthorized access - Redirecting to login");
          break;
        case "404":
          console.error("not found");
          break;
        case "500":
          console.error("server error");
          break;
      }
    } else if (error.request) {
      console.error("No response from the server");
    } else {
      console.error("Error setting up the request:", error.message);
    }
    Promise.reject(error);
  }
);

export default axiosInstance;
