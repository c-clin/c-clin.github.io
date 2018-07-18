import React from 'react';
import $ from 'jquery';

const Header = () => {
  var lastScrollTop = 0;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
      console.log('scroll up');
    } else {
      // upscroll code
      console.log('scroll down');
    }
    lastScrollTop = st;
  });

  return (
    <div className="Header">
      <div className="Header__text-box">
        <div className="Header__text-box--primary">
          <h1>Catherine Lin</h1>
        </div>
        <div className="Header__text-box--secondary">
          <p>Frontend Web Developer</p>
        </div>
        <hr />
        <div className="Header__social-links">
          <i className="fa fa-envelope-o icon previous" aria-hidden="true" />
          <i className="fa fa-linkedin icon previous" aria-hidden="true" />
          <i className="fa fa-github icon" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default Header;
