import React from 'react';
import './Tshirt.css'

const Tshirt = ({tShirt,handleAddCart}) => {
    const {picture,name,price,} = tShirt;
    return (
        <div className='tshirt-container'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price :  ${price}</p>
            <button onClick={()=>handleAddCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;