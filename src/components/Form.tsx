import { type ComponentPropsWithoutRef,FormEvent,forwardRef,useImperativeHandle,useRef } from "react";

type FormProps={
    onSave:(data:unknown)=>void;
}&ComponentPropsWithoutRef<'form'>;

export type FormHandler = {
    clear:()=>void;
}

const Form = forwardRef<FormHandler,FormProps>(function Form({onSave,children,...otherProps},ref){
    const form = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref,()=>{
        return {
            clear(){
                form.current?.reset();
            }
        }
    });
    
    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        // form.current?.reset()
        onSave(data);
    }
    return (
        <form ref={form} onSubmit={handleSubmit} {...otherProps}>
        {children}
        </form>
    )
});

export default Form;