import axios from "axios";

export const axiosInstance = axios.create({ 
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api", // now while using axios you don't need to write always the entire base url as we have set that here
    withCredentials: true, // to send the cookies in every single request
})