import React from 'react';
import Image from "./Image";

const CartItem: React.FC = () => {
    return <>
        <div className="cart-item">
            <Image/>
            <div className="item-info">
                <h5>Item Name</h5>
                <div className="price-info">
                    <span>Price:</span>
                    <strong>100$</strong>
                </div>
                <div>
                    <input type="number"
                           min="0" max="10"
                    />
                </div>
            </div>
        </div>
    </>
}

export default CartItem;