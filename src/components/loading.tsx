import React from 'react';
import '../style/spinner.css'; // Import the CSS file where you added the custom styles

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
<div className="loader">
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
  <div className="circle">
    <div className="dot"></div>
    <div className="outline"></div>
  </div>
</div>
    </div>
  );
};

export default Loading;
