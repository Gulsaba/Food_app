import React, {useContext} from 'react';
import './Card.css'
import Model from '../UI/Model';
import {StoreContext} from '../../store/Meals-Context'
import CartItem from './CartItem'

function Card(props){
    const ctx = useContext(StoreContext)
    const totalPrice = `$${ctx.totalAmount.toFixed(2)}`

    const onAddFun = (item)=>{
ctx.addItems(item)

    }

    const onRemoveFun = (id)=>{
    ctx.deleteItem(id)
    }
    



    //const msg = "hello world"
    const data =  <ul className='cart-items'> { ctx.items.map((item)=>
  <CartItem
key={item.id}
name = {item.title}
amount = {item.amount}
price = {item.price}
onAdd = {onAddFun.bind(null, item)}
onRemove= {onRemoveFun.bind(null, item.id)}

  />)}
  </ul>

    /// short form of logic to display the order button if items length is greater than 0 otherwise hide
     const ButtonHandler = ctx.items.length>0;

    return(
     <Model>
       
       <div> {data}</div>
    <div className='total'>
    
       <span>Total amount</span>
       <div style={{marginLeft:"2rem", color:"#8a2b06"}} >{totalPrice}</div>
    </div>
    <div className='actions'>
            <button className='button--alt' onClick={props.onRemove}>Close</button>
            {ButtonHandler&&<button className='button' >Order</button>}
    </div>
    
        </Model>
    )
}
export default Card