import {useForm} from "react-hook-form";
import {LoginData} from "../../models/LoginData.ts";
import {login} from "../../services/api.service.ts";

export const LoginFormComponent = () => {


    const {register, handleSubmit} = useForm<LoginData>({
        mode: "all",
    })

    const loginHandler = (data: LoginData) => {
        login(data)
    }

    return (
        <div className={'border-2 justify-center p-2 w-xl m-auto flex'}>
            <form className={'flex gap-2 flex-col'} onSubmit={handleSubmit(loginHandler)}>
                <label>
                    <input type="text" {...register('username')} className={'border'} />
                </label>
                <label>
                    <input type="password" {...register('password')} className={'border'}/>
                </label>
                <button className={'border-2'}>Login</button>
            </form>
        </div>
    );
};