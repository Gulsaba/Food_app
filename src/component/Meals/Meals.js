import React, {Fragment} from 'react';
import MealsSummary from "./Meals_summary";
import AvailableMeals from './Available_Meals';
import CardRap from '../UI/CardRap';

function Meals(props){
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];
      
return(
<>
<MealsSummary/>
<CardRap>
{DUMMY_MEALS.map((items)=>(
    <AvailableMeals 
    key={items.id}
    id= {items.id}
    title = {items.name}
    discription = {items.description}
    price= {items.price}
    />
))}
<div>
</div>
</CardRap>
</>
)

}
export default Meals;