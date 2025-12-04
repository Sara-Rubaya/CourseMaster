// src/Hooks/useAxiosSecure.js
import axios from "axios";

const useAxiosSecure = () => {
  const token = localStorage.getItem("access-token"); // JWT must be stored after login

  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // use env variable
    headers: {
      Authorization: `Bearer ${token}`, // attach JWT
    },
  });

  // Optional: Intercept 401 errors
  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response && err.response.status === 401) {
        console.log("Unauthorized! Maybe token expired.");
      }
      return Promise.reject(err);
    }
  );

  return instance;
};

export default useAxiosSecure;
