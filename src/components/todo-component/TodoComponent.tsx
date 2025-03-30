import {TodoModel} from "../../models/TodoModel.ts";

type TodoProp = {
    item: TodoModel;
}

export const TodoComponent = ({item}: TodoProp) => {
    return (
        <div>
            <div>
                <p>TodoID - {item.id}</p>
                <p>UserID - {item.userId}</p>
            </div>
            <div>
                <p>{item.todo}</p>
                <p>Completed - {item.completed.toString()}</p>
            </div>
        </div>
    );
};