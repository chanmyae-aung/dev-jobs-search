import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: "http://159.223.80.82/api/v1/mail",
});