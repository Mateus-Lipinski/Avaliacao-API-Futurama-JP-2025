import axios from "axios";

const api = axios.create({
    baseURL: 'https://futuramaapi.com/api'
})

export default api