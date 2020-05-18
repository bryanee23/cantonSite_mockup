import React from 'react';
import ReactDOM from 'react-dom';


 const Specials = (props) => {

  return (

    <div className="specialsTextLeft headline main-typeface"> Weekly Ad
    <hr/>
    </div>

    <img className="specials-img-left img-specs" src="/images/specials/weekly.png" />

    <div className="specDetails typeface">
      <a onclick="specialsModalViewer('left')">see all items &#10095;&#10095;</a>
    </div>

    <div className="specialsTextRight headline main-typeface"> Featured Items
      <hr/>
    </div>
    // <img className="specialsImgRight imgSpecs" src="/images/specials/feat.png" />
    <div className="specDetails typeface">
      <a onclick="specialsModalViewer('right')">see all items &#10095;&#10095;</a>
    </div>

  )
}

export default Specials