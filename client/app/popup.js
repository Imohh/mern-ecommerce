import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const Popup = () => {
  const [cookies, setCookie] = useCookies(['popupShown']);

  const closePopup = () => {
    setCookie('popupShown', true, { maxAge: 60 * 60 * 24 * 30 }); // Set the cookie to expire after 30 days
  };

  return (
    <div className="popup">
      {!cookies.popupShown && (
        <div className="popup-content">
          <p>This is the popup content.</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Popup;