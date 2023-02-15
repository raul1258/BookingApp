import React from "react";
import "./feature.css";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.3eMNILTMIy4eum5vLjngLAHaE4&pid=Api&P=0"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kolkata</h1>
          <h5>123 Properties</h5>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.5yjvH8zMAzZI6dGZQRnmAgHaE8&pid=Api&P=0"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h5>223 Properties</h5>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.qx6dd3pOMXQo1QBZT8PvaQHaFG&pid=Api&P=0"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h5>243 Properties</h5>
        </div>
      </div>
    </div>
  );
}

export default Featured;
