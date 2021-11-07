import React, { useState } from "react";
import "./Design.css";
import fb from "./image/fb.png"
import instagram from "./image/instagram.jpg"
import twitter from "./image/twitter.png"
import pinterest from "./image/pinterest.png"

// extra
import { useHistory } from "react-router-dom";   // extra

function Design() {
  const history = useHistory();  // extra
  const [share, setShare] = useState(false);

  return (
    <div className="design">
      <div className="design__left">
        <img
          className="design__ad"
          src="https://laurapaez.com/wp-content/uploads/2016/12/fashion-design-app-1-1024x768.png"
          alt=""
        />

        <div>
          <h2 className="design_title">Your Design Tool</h2>
        </div>
      </div>
      <div className="design__right">
        <button onClick={() => setShare(!share)} className="new__design">
          Share
        </button>
        {share && (
          <div>
            <a href="https://www.instagram.com/accounts/login/">
                <button className="logo__design"><img src={instagram} className="logo__image"/></button>  
            </a> 
            <a href="https://www.facebook.com/">
                <button className="logo__design"><img src={fb} className="logo__image"/></button>
            </a>
            <a href="https://twitter.com/">  
                <button className="logo__design"><img src={twitter} className="logo__image"/></button>
            </a>
            <a href="https://www.pinterest.com/">
                <button className="logo__design"><img src={pinterest} className="logo__image"/></button>
            </a>
          </div>
        )}
        <button className="new__design">Keep Private</button>

        {/* extra */}
        <button onClick={e => history.push('/pub')}>Pub</button>   

        <button className="new__design">Make Public</button>
        <button className="new__design">My rewards</button>
      </div>
    </div>
  );
}

export default Design;
