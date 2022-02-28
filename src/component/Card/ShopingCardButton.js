import React, {useContext} from 'react'
import {StoreContext} from '../../store/Meals-Context'
import './ShopingCardButton.css';
import shoppingCardIcon from '../../Images/shopping-cart.jpg';

function ShopingCardButton(props){
    
    const ctx = useContext(StoreContext)

 
     const totalItemsAdd = ctx.items.reduce((currentState, updatedState)=>{
         return currentState + updatedState.amount
     },0)

     
    return(
        <div>
            <button className='button' onClick={props.onCountAmount}>
               
                <span ><img src={shoppingCardIcon} alt=""  className='Card'/></span>
                <span className='badge'>{totalItemsAdd}</span>
            
            </button>
        </div>
    )
}
export default ShopingCardButton;