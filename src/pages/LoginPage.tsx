import {LoginFormComponent} from "../components/login-form-component/LoginFormComponent.tsx";

export const LoginPage = () => {
    return (
        <div className={'w-xl h-80 mt-52 m-auto border-4 border-gray-400 rounded-xl p-4'}>
            <LoginFormComponent/>
        </div>
    );
};