import React, {Fragment} from 'react';
import './Header.css';
import BackgroundImage from '../../Images/meals.jpg'
import ShopingCardButton from '../Card/ShopingCardButton'
function Header(props){
return(
    <Fragment>
    <header className='header'>
    <h2>Meals</h2>
    <ShopingCardButton onCountAmount = {props.onShowCard}/>
    </header>
    <div className='image'>
    <img src={BackgroundImage} alt="" />
    </div>
    </Fragment>
)
}
export default Header;