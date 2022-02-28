
import React,{useState} from 'react';
import './App.css';
import Card from './component/Card/Card'
import Header from './component/Layout/Header'
import Meals from './component/Meals/Meals'
import StoreProvider from './store/Meals-Context'



function App() {
  
const [cardModel, setCardModel] = useState(false)
const cardRemoveHandler=()=>{
  setCardModel(false)
}
const showCartHandler=()=>{
  setCardModel(true)
}

  return (
    
    <StoreProvider>
    <div className="App">
      {cardModel&& <Card onRemove={cardRemoveHandler}/>}
   
    <Header onShowCard = {showCartHandler}/>
    <Meals />
    </div>
    </StoreProvider>

  );
}

export default App;
