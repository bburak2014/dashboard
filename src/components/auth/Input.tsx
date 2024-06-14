import React from 'react';
import UserIcon from './InputIcon/UserIcon';
import MailIcon from './InputIcon/MailIcon';
import PasswordIcon from './InputIcon/PasswordIcon';

type Props = {
    value: string,
    label: string,
    placeholder: string,
    type: string,
    error:any,
    onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = React.memo(({ value, label, placeholder,error, type, onChangeFunction }: Props) => (
    <div className="mb-2.5 block font-medium text-black dark:text-white">
        {label}
        <div className="relative">
            <input
                type={type}
                name={label.toLowerCase()}  
                placeholder={placeholder} 
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                value={value}
                onChange={onChangeFunction}
                required
            />
            {(type === "password") ? <PasswordIcon /> : type === "email" ? <MailIcon /> : <UserIcon />}
         
        </div>
        {error && <p className="text-red-500 mt-1 animate__animated animate__fadeIn">{error}</p>}

    </div>
));

export default Input;
