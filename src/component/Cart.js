import React from 'react';

const Cart = ({cart,handleRemoveTshirt}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please buy a one Products</p>
    }
    else{
        message=<p>Thanks for buying</p>
    }
    return (
        <div>
            <h1>Cart Summery</h1>
            <h5>Cart quantity {cart.length}</h5>
            <div>
                {
                    cart.map(tshirt =><p
                    key={tshirt._id}
                    >
                        {tshirt.name}
                        <button onClick={()=>handleRemoveTshirt(tshirt)}>X</button>
                    </p>)
                }
                {
                    message
                }
            </div>
        </div>
    );
};

export default Cart;