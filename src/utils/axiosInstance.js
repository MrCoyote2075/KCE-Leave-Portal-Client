import axios from "axios";

const {VITE_NETWORK_IP, VITE_SERVER_PORT, VITE_SERVER_URL} = import.meta.env

export const axiosInstence = axios.create({
    baseURL: VITE_NETWORK_IP ? `http://${VITE_NETWORK_IP}:${VITE_SERVER_PORT}` : VITE_SERVER_URL,
    withCredentials: true
})
