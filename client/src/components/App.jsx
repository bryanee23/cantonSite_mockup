import React from 'react';
import ReactDOM from 'react-dom';
// import Header from './Header';
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
      <wrapper>
        {/* <Header />
        <Nav />
        <Carousel />
        <Products /> */}
        {/* <Specials /> */}
        <Footer />
      </wrapper>
    )
  }
}