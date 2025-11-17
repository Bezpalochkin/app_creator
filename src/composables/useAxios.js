import axios from 'axios';
import { ref } from 'vue';

export default function useAxios() {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 15000
    })

    const data = ref(null);
    const error = ref(null);

    const request = async (config) => {
        error.value = null;

        try {
            const response = await instance(config);
            data.value = response.data;
            return response.data;
        } catch (err) {
            error.value = err;
            console.error('Axios error:', err);
            throw err;
        }
    };

    const get = (url, config) => 
        request ({ ...config, method: 'GET', url });

    const post = (url, payload, config) =>
        request ({ ...config, method: 'POST', url, data: payload });    

    return {
        instance,
        data,
        error,
        get,
        post
    }
}