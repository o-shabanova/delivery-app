import React from "react";
import UserInfo from "./UserInfo";
import Image from "./Image";
import CartItem from "./CartItem";

const ShoppingCart: React.FC = () => {
    return <main className="main shopping-cart">
        <aside className="main-aside shopping-cart">
            <UserInfo/>
        </aside>
        <article className="main-article shopping-cart">
            <ul className="product-list">
                <li className="product-card">
                    <CartItem/>
                </li>
                <li className="product-card">
                    <CartItem/>
                </li>
                <li className="product-card">
                    <CartItem/>
                </li>
            </ul>
            <div className="total-info">
                <div className="total-info-item">Total: </div>
                <div className="total-info-item button"> <button>Submit</button></div>
            </div>

        </article>
    </main>

}
export default ShoppingCart;