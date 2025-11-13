import axios from "axios";

export const api = axios.create({
    baseURL: "BACKEND_URL",
    // withCredentials: true, // uncomment when cookie tokens are being used
})