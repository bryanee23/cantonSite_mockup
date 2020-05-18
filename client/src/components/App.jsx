import React from 'react';
import Header from './Header';
// import Nav from './Nav';
// import Carousel from './Carousel';
// import Products from './Products';
// import Specials from './Specials';
import Footer from './Footer';

const ColoredLine = ({ color }) => (
  <hr class="specialsTextLeft headline main-typeface" />
);

export default class App extends React.Component {
  render() {
    return (
      <div className="main-grid">
        <div className="container">
          <Header />
          {/* <Nav /> */}
          {/* <Carousel /> */}
          {/* <Products /> */}
          {/* <Specials /> */}
          {/* <Footer /> */}
        </div>
      </div>

    )
  }
}