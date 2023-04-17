import axios from "axios";

const BASE_URL = "https://girls4girls.herokuapp.com/api";

export default axios.create({
    baseURL: BASE_URL,

})