type InputProps = {
    id:string;
    label:string;
}
function Input({id,label}:InputProps){
    return(
        <main>
            <label htmlFor={id}>{label}</label>
            <input id={id} name ={id}/>
        </main>
    )
}

export default Input;