import React, { Component } from 'react';

class Theheader extends Component {

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-nav") {
      x.className += " responsive";
    } else {
      x.className = "top-nav";
    }
  }

  render() {
    return (
        <div className="Theheader">
          <div className="top-nav" id="myTopnav">
              <div id="home"></div>
              <header id="main-header">
                  <h1>Adetola Bewaji</h1>
              </header>
              <nav className="navbar">
                  <ul>
                    <a href="#home" id="view-home">Home</a>
                    <a href="#about-us" id="view-about">Philosophy</a>
                    <a href="#our-work" id="view-work">Work</a>
                    <a href="#contact-us" id="view-contact">Contact</a>
                    <a href="javascript:void(0);" className="icon" onClick={ this.myFunction }>&#9776;</a>
                  </ul>
              </nav>
          </div>
          <div className="clr"></div>

          <section className="showcase">
      			<h1>
      				...Life is always fair for those who are not too easily discouraged while they scale through life ordeals for a safety victorious landing.
      			<p className="quote">Tola Bewaji</p>

      			</h1>
      		</section>

          {/*up movement animation button*/}
          <div class="navtop"><a class="text-deco" href="#home" id="move-top">Top<i class="fa fa-long-arrow-up move-right" aria-hidden="true"></i></a></div>

        </div>
    );
  }
}

export default Theheader;
