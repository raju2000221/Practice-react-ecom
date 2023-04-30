import React, { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import './Shop.css'




const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
        fetch('fakebd.json')
        .then(res =>res.json())
        .then(data => setProduct(data))
        
    },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                   products.map(Product => <Menu
                   key = {Product.id}
                   Product={Product}
                   ></Menu> )
                }

            </div>
            <div className='cart-conatainer'>

            </div>
            
        </div>
    );
};

export default Shop;