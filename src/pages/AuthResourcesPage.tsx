import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

export const AuthResourcesPage = () => {

    useEffect(() => {
        loadAuthProducts().then(products => {
            console.log(products);
        }).catch(() => {
            refresh()
                .then(() => loadAuthProducts())
                .then(value => console.log(value));
        })
    }, []);

    return (
        <>Auth resources</>
    );
};