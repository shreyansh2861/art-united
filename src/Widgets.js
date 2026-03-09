import React from 'react';
import "./Widgets.css";
function Widgets() {
  return (
    <div className='widgets'>
        <iframe   src='https://news.artnet.com/' 
        width="600"
        height="100%"
        style={{border: "none" , overflow: "hidden"}}
        scrolling="yes"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted media" title="ART NEWS"></iframe>
    </div>
  )
}

export default Widgets