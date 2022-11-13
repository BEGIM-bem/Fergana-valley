import axios from "axios";
import {getCookie} from "./Cookies";

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        // 'Content-Type': 'application/json',
        'accept': 'application/json',
    }
})

API.interceptors.request.use(
    async req => {
        req.headers['Authorization'] = `Bearer ${getCookie('refresh-jwt-token')}`;
        return req;
    }
)



export default API;