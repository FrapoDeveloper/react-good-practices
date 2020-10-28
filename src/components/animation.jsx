import React, { Component } from "react";
import Lottie from 'react-lottie';
import componentWillUpdate from '../assets/developer.json';
class Animation extends Component {
    render() {
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: componentWillUpdate
        
      };
  
      return (
        <div className="Uncontrolled">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      );
    }
  }
  
  export default Animation;