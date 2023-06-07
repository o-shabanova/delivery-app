import React from 'react';
import ProductCard from "./ProductCard";

const Main: React.FC= () => {
    return <main className="main shop">
        <aside className="main-aside shop">
            <div className="shops-header">
                <h3>Shops:</h3>
            </div>
            <div className="shop-list">
                <div className="shop-item">Shop 1</div>
                <div className="shop-item">Shop 2</div>
                <div className="shop-item">Shop 3</div>
                <div className="shop-item">Shop 4</div>
            </div>
        </aside>
        <article className="main-article shop-products">
            <ul className="product-list">
                <li className="product-card">
                    <ProductCard/>
                </li>
                <li className="product-card">
                    <ProductCard/>
                </li>
                <li className="product-card">
                    <ProductCard/>
                </li>
                <li className="product-card">
                    <ProductCard/>
                </li>
                <li className="product-card">
                    <ProductCard/>
                </li>
                <li className="product-card">
                    <ProductCard/>
                </li>
                <li className="product-card">
                    <ProductCard/>
                </li>
                <li className="product-card">
                    <ProductCard/>
                </li>
            </ul>
        </article>
    </main>
}
export default Main;