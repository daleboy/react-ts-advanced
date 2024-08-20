import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
    readonly id:string;
    readonly label:string;
}&ComponentPropsWithoutRef<'input'>;

function Input({id,label,...props}:InputProps){
    return(
        <main>
            <label htmlFor={id}>{label}</label>
            <input id={id} name ={id} {...props}/>
        </main>
    )
}

export default Input;