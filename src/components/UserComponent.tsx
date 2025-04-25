import {FC, memo} from "react";


interface UserComponentProps {
    arr: number[]
}

export const UserComponent: FC<UserComponentProps> = memo((arr) => {
    console.log('UserComponent')
    console.log(arr);

    return (
        <div>
            UserComponent
        </div>
    );
})