import React, {useReducer, createContext} from 'react'

// createContext
export const StoreContext= createContext({
    item:[],
    totalAmount:0,
    addItems:(item)=>{},
    deleteItem:(id)=>{}
})

/// contextProvider 

const initialItems = {
    items:[],
    totalAmount:0
}
const reducer =(state, action)=>{
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.amount* action.item.price
       /////////////////////////////////
        const existingItemIndext = state.items.findIndex(
             item=>item.id===action.item.id )

        const existingItem= state.items[existingItemIndext]
            let updatedItem;
            let updatedItems;
            if( existingItem){
               updatedItem=  {
                    ...existingItem,
                 amount:existingItem.amount + action.item.amount
            }
             updatedItems = [...state.items]
             updatedItems[existingItemIndext]=updatedItem
        }
        else{
            updatedItem={...action.item}
            updatedItems = state.items.concat(action.item)
        }
       
////////////////////////////////////updated items array //////////////////////////////////////////////////
     // const updatedItem = state.items.concat(action.item)
     return ({
            items:updatedItems,
            totalAmount:updatedTotalAmount
        })

    }
    if(action.type === 'REMOVE'){
     const existingItemIndext = state.items.findIndex( item=>item.id===action.id )
            const existingItem= state.items[existingItemIndext]
           const updatedTotalAmount = state.totalAmount - existingItem.price
           let updatedItems;
           if(existingItem.amount===1){
            updatedItems = state.items.filter(item=>item.id!==action.id)
           }
           else{
             const  updatedItem = {...existingItem, amount:existingItem.amount-1}
            updatedItems = [...state.items]
            updatedItems[existingItemIndext] = updatedItem;
           }
           return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
           }

    }
    return initialItems
}
const StoreProvider = (props)=>{

    const [state, dispatchAction] = useReducer(reducer, initialItems);

    const addItemToCardHandler=(item)=>{
        dispatchAction({type:'ADD', item:item}) ////////recheck
      }

    const removeItemFromCardHandler=(id)=>{
        dispatchAction({type:'REMOVE', id:id})
    }

    const storeContext = {
        items : state.items ,
        totalAmount :state.totalAmount,
        addItems : addItemToCardHandler,
        deleteItem: removeItemFromCardHandler
    }

   return  <StoreContext.Provider value={storeContext}>
       {props.children}
   </StoreContext.Provider>
}
export default StoreProvider