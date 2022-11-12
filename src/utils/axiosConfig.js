import axios from "axios";

console.log("REACT_APP_API ", process.env.REACT_APP_API_URL)
const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})


export default API;