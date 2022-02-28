import React,{Fragment, useContext} from "react";

import InputForm from './inputForm';
 import {StoreContext} from '../../store/Meals-Context'
import './Available_Meals.css'



function AvailableMeals(props){

    const ctx = useContext(StoreContext)
    

    const onMealsAddHandler = (mealsAmount)=>{
    //alert(mealsAmount)

    ctx.addItems({
       
        id:props.id,
        title:props.title,
        amount:mealsAmount,
        price:props.price,
    });
    }
  
    return(
<Fragment>
<div className="mealsDiv">
<h3>{props.title}</h3>
<div>{props.discription}</div>
<div>{props.price}</div>
<InputForm onAddAmountInCart={onMealsAddHandler}/>
<hr />
</div>

</Fragment>
    )
}
export default AvailableMeals;