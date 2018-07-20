import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import $ from 'jquery';
import Portfolio from './Portfolio';
import Projects from './Projects';

class App extends Component {
  render() {
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
        // downscroll code
        $('.Navigation')
          .addClass('disappear')
          .removeClass('appear');
      } else {
        // upscroll code
        $('.Navigation')
          .addClass('appear')
          .removeClass('disappear');
        $('.list-item-link').addClass('bottom-link-hover');
      }
      lastScrollTop = st;

      if ($(window).scrollTop() === 0) {
        $('.Navigation').removeClass('appear');
        $('.list-item-link')
          .addClass('top-link-hover')
          .removeClass('bottom-link-hover');

        console.log('top!');
      }
    });

    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/projects" component={Projects} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
