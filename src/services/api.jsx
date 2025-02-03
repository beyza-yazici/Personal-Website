import axios from "axios";

const api = axios.create({
    baseURL: 'https://reqres.in/api'
})

export const sendData = async (data) => {
    try {
        const response = await api.post('/workintech', data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}