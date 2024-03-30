import axios from "axios";
// import { getStorage } from "../helpers/apihelper";
const axiosInstance = axios.create({
  baseURL:'http://localhost:8080',
});
axiosInstance.defaults.withCredentials = true;
axiosInstance.interceptors.request.use(
  function (config) {
    // const token = getStorage("token");
    // if (token !== null) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    config.headers["CSRF-TOKEN"]=sessionStorage.getItem("csrf")
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
export default axiosInstance;