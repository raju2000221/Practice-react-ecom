import React, { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('fakebd.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                   products.map(product => <Menu
                   key={product.id}
                   product={product}
                   addToCart={addToCart}
                   ></Menu> )
                }
            </div>
            <div className='cart-conatainer'>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;
