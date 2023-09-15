import axios from "axios";
import {baseURL, token} from "../constants/urls";

const apiService = axios.create({baseURL})
apiService.interceptors.request.use(req => {
        req.headers.Authorization = `Bearer ${token}`;
    return req;
})


export {apiService}