import React,{useRef} from "react";
import './inputForm.css'
import Input from '../UI/input'
function InputForm(props){
  const InputRef = useRef('')

 const  onSubmitHandler=(event)=>{

//The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
  
event.preventDefault();   
const totalAmountOnSubmit = InputRef.current.value;
const totalAmountNumberOnSubmit = +totalAmountOnSubmit;  //(typeof(totalAmountNumberOnSubmit)
props.onAddAmountInCart(totalAmountNumberOnSubmit)
  }
  
    
  
return(
    
    <form className="form" onSubmit={onSubmitHandler}>
    <Input
   //  label='Amount'
     ref = {InputRef}
     input={{ 
         id: 'amount' + props.id, // this changed!
         type: 'number',
         min: '1',
         max: '5',
         step: '1',
         defaultValue: '1',
     }}/>
   <button>+ Add</button>
  </form> 
)
}
export default InputForm;