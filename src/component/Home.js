import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';
import Tshirt from './Tshirt';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    const [cart , setCart]=useState([]);
    const handleAddCart = tShirt =>{
        // console.log(tShirt);
        const exits = cart.find(ts =>ts._id === tShirt._id);
        if(exits){
            alert('This T-shirt already added')
        }
        else{
            const newCart = [...cart,tShirt];
            setCart(newCart);
            // alert('success full added this T-shirt')
        }
    }
    const handleRemoveTshirt = tShirt =>{
        // console.log(tShirt);
        const remingCart = cart.filter(ts => ts._id !== tShirt._id );
        setCart(remingCart)
    }
    // console.log(tShirt);
    return (
        <div className='home-container'>
            <div className="shirt-container">
                {
                    tShirts.map(tShirt =><Tshirt key={tShirts._id}
                    tShirt={tShirt}
                    handleAddCart={handleAddCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                handleRemoveTshirt={handleRemoveTshirt}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;