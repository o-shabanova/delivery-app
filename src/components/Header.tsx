import React from "react";
import {Link} from "react-router-dom";
import {AppPath} from "../commons/enums/app-path.enum";


const Header: React.FC= () => {
    return <header className="header">
                <nav className="header__nav">
                     <ul className="nav-header__list">
                        <li className="nav-header__item" title="Shop">
                            <Link to={AppPath.ROOT}
                                  className="nav-header__inner"
                            >
                                <span>Shop</span>
                            </Link>
                        </li>
                         <li className="nav-header__item" title="Shopping Cart">
                             <Link to={AppPath.SHOPPING_CART}
                                   className="nav-header__inner"
                             >
                                 <span>Shopping Cart</span>
                             </Link>
                         </li>
                    </ul>
                </nav>
            </header>
}
export default Header;