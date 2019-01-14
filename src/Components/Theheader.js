import React, { Component } from 'react';

class Theheader extends Component {

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

  myFunction() {

    var x = document.getElementById("myTopnav");
    let nav = document.querySelector(".navbar");
    let h1 = document.querySelector("header#main-header");

    if (x.className === "top-nav") {
      x.className += " responsive";
  //    h1.style.display = "none";

      //set 1st name element to Adetola Bewaji
      nav.style.clear = "right";
      nav.style.width = "70%";
      nav.style.clear = "0px";

      // Set last anchor tag to a
      let close_nav_anchor = document.querySelectorAll(".top-nav.responsive a");

      close_nav_anchor[4].innerHTML = "X";
      close_nav_anchor[4].style.padding = "10px 15px";
      close_nav_anchor[4].style.backgroundColor = "yellow";

    } else {
      let close_nav_anchor = document.querySelectorAll(".top-nav.responsive a");
      close_nav_anchor[4].innerHTML = "&#9776";
      close_nav_anchor[4].style.backgroundColor = "#f4f4f4";

      x.className = "top-nav";
      h1.style.display = "block";
      nav.style.float = "right";
      nav.style.width = "70%";
    }

    // var x = document.getElementById("myTopnav");
    // if (x.className === "top-nav") {
    //   x.className += " responsive";
    // } else {
    //   x.className = "top-nav";
    // }
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
          <div class="navtop"><a class="text-deco" href="#home" id="move-top"><i class="fa fa-long-arrow-up move-right" aria-hidden="true"></i></a></div>

        </div>
    );
  }
}

export default Theheader;
