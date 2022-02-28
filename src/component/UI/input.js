import React, {forwardRef} from "react";
import './input.css'
const Input = forwardRef((props, Ref)=>{
    return(
<div className="input">
<label htmlFor={props.input.id}>Amount</label>
<input {...props.input} ref = {Ref}/>
</div>
    )
});
export default Input;