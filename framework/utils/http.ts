import axios from "axios";

const http = axios.create({
    baseURL: "http://api.themoviedb.org/3/",
    timeout: 30000,
});

export default http;