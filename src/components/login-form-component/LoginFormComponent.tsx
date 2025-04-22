import {useForm} from "react-hook-form";
import {LoginData} from "../../models/LoginData.ts";
import {login} from "../../service/login.api.service.ts";
import {useNavigate} from "react-router-dom";

export const LoginFormComponent = () => {

    const {register, handleSubmit} = useForm<LoginData>({
        mode: "all"
    })

    const navigate = useNavigate();
    const loginHandler = (data: LoginData) => {
        login(data);
        navigate("/auth");
    }

    return (
        <form className={'flex gap-4 flex-col items-center'} onSubmit={handleSubmit(loginHandler)}>
            <input className={'w-xs h-10 border-2 rounded-xl p-2'} type="text" {...register('username')}/>
            <input className={'w-xs h-10 border-2 rounded-xl p-2'} type="text" {...register('password')}/>
            <button className={'w-xs h-10 border-2 rounded-xl'}>Login</button>
        </form>
    );
};