import React from 'react';
import Logo from './images/logo.jpg';

export default function Header(props){
  return (
  <header>
      <img className="image" src={Logo} alt='weekly ad' />
      <div className="text typeface">
        <div>750 S. Alameda Street</div>
        <div>Los Angeles, CA 90021</div>
        <div><strong>Tel:</strong> (213) 688-7707</div>
        <div><strong>Fax:</strong> (213) 688-1121</div>
        <div>
          <strong>Email: &nbsp; </strong>
          <a href="mailto:Corporate@cantonfoodcocom">
            Corporate@cantonfoodco.com
            </a>
        </div>
      </div>
    </header>
  )
}


