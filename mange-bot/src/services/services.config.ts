import axios, { type AxiosResponse } from "axios";
export const BASE_URL = import.meta.env.VITE_BACKEND_URL

export const getAxios = ()=> {
    const createdAxios = axios.create({
        baseURL: BASE_URL + "/api", //"/proxy-api/api",
        timeout: 40000, //40segundos
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
            Authorization: `Bearer meu token....`
        }
    });
    //createdAxios.interceptors.request ---> executa ANTES de chamar o back
    //createdAxios.interceptors.response ---> executa DEPOIS de chamar o back

    createdAxios.interceptors.response.use(getAxiosResponse);
    return createdAxios;
}

const getAxiosResponse = (response: AxiosResponse)=>{
    return response.data;
}