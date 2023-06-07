import React from 'react';
import '../App.css';
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import {AppPath} from "../commons/enums/app-path.enum";
import Main from "./Main";
import ShoppingCart from "./ShoppingCart";

function App() {
  return (
    <div className="container">
      <Header/>
        <Routes>
            <Route path={AppPath.ROOT} element={<Main/>}/>
            <Route path={AppPath.SHOPPING_CART} element={<ShoppingCart/>}/>
        </Routes>
    </div>
  );
}

export default App;
