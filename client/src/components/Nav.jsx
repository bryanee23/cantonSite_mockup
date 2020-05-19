import React from 'react';
import ReactDOM from 'react-dom';


export default function Nav(props){
  return (
    <nav className=" navmain-typeface" role="navigation">
      <ul className="navList">
        <li className="navTitle"><a href="#">Home</a></li>
        <li className="navTitle "><a href="#">Specials <span className="arrow">&#10148; </span></a>
          <ul className=" shortTxtNav">
            <li><a href="#">Weekly Ad</a></li>
            <li><a href="#">New Items</a></li>
          </ul>
        </li>
        <li className="navTitle"><a href="#">Products <span className="arrow">&#10148; </span></a>
          <ul>
            <li><a href="#">Beer</a></li>
            <li><a href="#">Dairy</a></li>
            <li><a href="#">Disposable Containers</a></li>
            <li><a href="#">Ethnic Food</a></li>
            <li><a href="#">Frozen Food</a></li>
            <li><a href="#">Grocery</a></li>
            <li><a href="#">Janitorial Supplies</a></li>
            <li><a href="#">Meat and Poultry</a></li>
            <li><a href="#">Produce and Fruit</a></li>
            <li><a href="#">Seafood</a></li>
            <li><a href="#">Softdrinks</a></li>
          </ul>
        </li>
        <li className="navTitle"><a href="#">Customer Service <span className="arrow">&#10148; </span></a>
          <ul>
            <li><a href="#">Frequent Buyer Program</a></li>
            <li><a href="#">Ordering</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Payment</a></li>
            <li><a href="#">Bulk Order Pricing</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Resalers</a></li>
          </ul>
        </li>
        <li className="navTitle"><a href="#">Start Order</a></li>
      </ul>
    </nav>
  )
}

