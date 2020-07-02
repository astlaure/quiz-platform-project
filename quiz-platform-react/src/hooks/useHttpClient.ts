import axios, { AxiosError } from 'axios';

const useHttpClient = () => {
    const get = async (url: string) => {
        try {
            const response = await axios.get(url);

            return response.data;
        } catch (err) {
            if ((err as AxiosError).response?.status === 401) {
                // dispatch logout
            }
        }
    }

    const post = async (url: string, data: any) => {
        try {
            const response = await axios.post(url, data);

            return response.data;
        } catch (err) {
            if ((err as AxiosError).response?.status === 401) {
                // dispatch logout
            }
        }
    }

    return { get, post };
}

export default useHttpClient;