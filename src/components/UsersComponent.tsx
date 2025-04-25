import {UserComponent} from "./UserComponent.tsx";
import {useEffect, useMemo, useState} from "react";

export const UsersComponent = () => {
        console.log('UsersComponent')

        const [users, setUsers] = useState<any[]>([])

        const arr: number[] = useMemo(() => {
            return [1, 2, 3]
        }, [])

        // const arr: number[] = [1, 2, 3];

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => setUsers(data))
        }, [])


        return (
            <div>
                UsersComponent
                <UserComponent arr={arr}/>
            </div>
        );
    }
;