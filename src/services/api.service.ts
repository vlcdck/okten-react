const baseJsonUrl = import.meta.env.VITE_BASE_JSONPLACEHODER_URL;
const baseDummyUrl = import.meta.env.VITE_BASE_DUMMYJSON_URL;

export const apiServices = {
    getAllJsonplaceholder: async <T, >(endpoint: string): Promise<T> => {
        return await fetch(`${baseJsonUrl}${endpoint}`)
            .then(res => res.json())
    },
    getAllDummy: async <T, >(endpoint: string): Promise<T> => {
        return await fetch(`${baseDummyUrl}${endpoint}`)
            .then(res => res.json())
    }
}