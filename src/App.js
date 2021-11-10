import React, { Fragment } from "react";
import './App.css';
import ListProducts from "./components/ListProducts";
import AddProduct from "./components/AddProduct";



function App() {
  return (
    <Fragment>
     <ListProducts />
      <AddProduct />
    </Fragment>
  );   
}

export default App;
