import React from 'react';
import './Cart.css'
import profile from '../../image/profile.jpg'

const Cart = (props) => {
    return (
        <div className='cart'>
            <div className='cart-header'>
                <img src={profile} alt="" />
               <div className='info'>
               <h3>Raju Islam</h3>
                <p>Tangail,Ghatail</p>
               </div>
              

            </div>
            <div className='my-info'>
                <p><span className='style'>75</span> <br />weight</p>
                <p><span className='style'>6.5</span><br />Height</p>
                <p><span className='style'>22</span><br />Age</p>
               </div>
               <h4 className='break-title'>Add a Break</h4>
            <div className='break-time'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
               </div>

               <h4 className='break-title'>Exercise Details</h4>
               <div className='ex-details'>
                <p className='exer-title'> Exercise tile</p>
                <p className='exer-time'>0 secound</p>

            </div>
               <div className='ex-details'>
                <p className='exer-title'> Break time</p>
                <p className='exer-time'>0 secound</p>
               </div>
               <button className='btn-cart'>Activity Completed</button>
               
        </div>
    );
};

export default Cart;