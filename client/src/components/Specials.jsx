import React from 'react';
import ReactDOM from 'react-dom';
import FeaturesAd from './images/specials/feat.png';
import Weekly from './images/specials/weekly.png';


const Specials = (props) => {



  return (
    <div>

      <div className="specialsTextLeft headline main-typeface"> Weekly Ad

    </div>

      <div>
        <img src={Weekly} alt='weekly ad' />
      </div>
    </div>


  )
}
export default Specials

