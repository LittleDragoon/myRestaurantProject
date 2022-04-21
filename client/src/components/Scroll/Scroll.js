import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './Scroll.css';

const ScrollButton = ({ boolean, height }) => {

  const bool = boolean === "true" ? true : false;
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > Number(height)) {
      setVisible(true)
    }
    else if (scrolled <= Number(height)) {
      setVisible(bool);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /*you can also use 'auto' behaviour
         in place of 'smooth'   });*/
    })
  }

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="Button">
      <FaArrowCircleUp onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }} />
    </div  >
  );
}

export default ScrollButton;