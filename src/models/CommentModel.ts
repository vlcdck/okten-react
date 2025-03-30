export interface CommentModel {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User;
}
interface User {
    id: number;
    username: string;
    fullName: string;
}
