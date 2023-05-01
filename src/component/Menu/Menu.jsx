import React from 'react';
import './Menu.css'

const Menu = (props) => {
    const {name,image,age,Time,details} = props.Product
    const btnClick =props.Product;
  
    return (
        <div className='menu'>
            <img src={image}></img>
            <div className='menu-info'>
            
            <h4>{name}</h4>
            <p>{details}</p>
            <h5>For age : {age}</h5>
            <h5>Time Required : {Time}</h5>
            </div>
           
           <button id='myButton' className='btn' onClick={()=>btnClick(props.Product)}><span className='btnName'>Add to list</span></button>
           
        </div>
    );
};

export default Menu;