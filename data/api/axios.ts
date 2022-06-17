import axios from "axios";

export const api = axios.create({
    baseURL: 'https://alex-conder-portfolio-api.herokuapp.com/',
})
