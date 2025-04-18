export const retriveLocalStorage = <T>(key: string): T => {
    const object = localStorage.getItem(key) || '';
    if (!object) {
        return {} as T;
    }
    return JSON.parse(object) as T;
}