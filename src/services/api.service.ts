const baseURL = 'https://jsonplaceholder.typicode.com';

// const userService = {}
// const postService = {}
// const commentService = {}

export const getAll = async <T, >(endpoint: string) => {
    const result = await fetch(`${baseURL}${endpoint}`)
        .then(response => response.json())
    return result as T;
}
