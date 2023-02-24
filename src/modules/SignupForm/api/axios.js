import axios from "axios";

const BASE_URL = "https://girls4girls.herokuapp.com/api/auth";

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})