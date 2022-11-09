import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        ContentType: 'application/json',
        accept: 'application/json',

        'X-CSRFToken': 'pQyXb06V41cesfpcvOO3GFbW7aBgYTwPDS88P0F1k4ptXWEeMWQzE3wEPM0FdpQI'
    }
})

// Если нужен токе
// API.interceptors.request.use(
//     async req => {
//         req.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt-token')}`;
//         return req;
//     }
// )

export default API;