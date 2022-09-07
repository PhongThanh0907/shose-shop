import axios, { AxiosError } from "axios";
import { store } from "../app/store";

// Setup cấu hình mặc định cho axios
const axiosClient = axios.create({
  baseURL: "https://62566f2552d8738c692ee4a4.mockapi.io/api",
});

interface ErrorResponse {
  content: string;
}

// setup response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // request API thành công, ta có thể thay đổi response trước khi trả ra cho nơi gọi request
    // response.data: format của axios
    return response.data;
  },
  (error: AxiosError<ErrorResponse>) => {
    // request API thất bại, ta có thể thay đổi error trước khi trả ra cho nơi gọi request
    return Promise.reject(error.response?.data.content);
  }
);

export default axiosClient;
