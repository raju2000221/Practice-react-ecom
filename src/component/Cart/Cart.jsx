import React, { useState } from 'react';
import './Cart.css';
import profile from '../../image/profile.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = (props) => {
  const cart = props.cart;
  let time = '0 Minute';
  for (const product of cart) {
    time = product.Time;
  }
  const [selectedTime, setSelectedTime] = useState(0);

  function handleButtonClick(time) {
    setSelectedTime(time);
  }

  const buttonClick = () => {
    // Perform some action
    // ...

    // Show a success notification
    toast.success('Action completed successfully!',{
        position:"top-center"
    });
    
  };

  return (
    <div className='cart'>
      <div className='cart-header'>
        <img src={profile} alt='' />
        <div className='info'>
          <h3>Raju Islam</h3>
          <p>Tangail,Ghatail</p>
        </div>
      </div>
      <div className='my-info'>
        <p>
          <span className='style'>75</span> <br />
          weight
        </p>
        <p>
          <span className='style'>6.5</span>
          <br />
          Height
        </p>
        <p>
          <span className='style'>22</span>
          <br />
          Age
        </p>
      </div>
      <h4 className='break-title'>Add a Break</h4>
      <div className='break-time'>
        <button onClick={() => handleButtonClick(10)}>10</button>
        <button onClick={() => handleButtonClick(20)}>20</button>
        <button onClick={() => handleButtonClick(30)}>30</button>
        <button onClick={() => handleButtonClick(40)}>40</button>
        <button onClick={() => handleButtonClick(50)}>50</button>
      </div>
      <h4 className='break-title'>Exercise Details</h4>
      <div className='ex-details'>
        <p className='exer-title'>Exercise Time</p>
        <p className='exer-time'>{time}</p>
      </div>
      <div className='ex-details'>
        <p className='exer-title'>Break time</p>
        <p className='exer-time'>{selectedTime} second</p>
      </div>

      <button className='btn-cart' onClick={() => buttonClick()}>
        Activity Completed
      </button>
      <ToastContainer/>
    </div>
  );
};

export default Cart;
