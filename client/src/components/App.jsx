import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Specials from './Specials';

const ColoredLine = ({ color }) => (
  <hr class="specialsTextLeft headline main-typeface"/>
);

export default class App extends React.Component {
render() {
  return (
    <div>

    <div>
      <Footer/>
    </div>
    <div>
      <Specials/>
    </div>

    </div>
  )
  }
}