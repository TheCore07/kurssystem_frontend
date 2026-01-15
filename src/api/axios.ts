import axios from "axios";

const VITE_BACKEND_URL = window.__ENV__?.VITE_BACKEND_URL

if (!VITE_BACKEND_URL) {
    console.warn("⚠️ VITE_BACKEND_URL ist nicht gesetzt!");
}

export const api = axios.create({
    baseURL: VITE_BACKEND_URL,
    // withCredentials: true, // uncomment when cookie tokens are being used
})