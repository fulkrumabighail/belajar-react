import React, { useState } from "react";

const Footer = () => {
  const [body, setBody] = useState('Foot');

  const clickBody = () => {
    if (body === 'hand') {
      setBody('Foot');
    } else {
      setBody('hand');
    }
  }

  return ( 
    <div className="footer">
      <h1>Footer</h1>
      <p>{body}</p>
      <button onClick={clickBody}>Click Body</button>
    </div>
  );
}

export default Footer;
