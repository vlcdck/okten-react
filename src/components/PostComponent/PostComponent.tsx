import {IPostDummyjson} from "../../models/IPostDummyjson.ts";
import {IPostJsonplaceholder} from "../../models/IPostJsonplaceholder.ts";

type PostProp = {
    item: IPostDummyjson | IPostJsonplaceholder;
}

export const PostComponent = ({item}: PostProp) => {
    return (
        <div className={'border-2 rounded-2xl p-2 w-xs h-60 overflow-hidden'}>
            <h3>{item.title} - {item.id}</h3>
            <p>{item.body}</p>
        </div>
    );
};