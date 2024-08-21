import { type ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

type InputProps = {
    readonly id:string;
    readonly label:string;
}&ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement,InputProps>(function Input({id,label,...props},ref){
    return(
        <main>
            <label htmlFor={id}>{label}</label>
            <input id={id} name ={id} {...props} ref={ref}/>
        </main>
    )
})

export default Input;