import React, { Component } from 'react';

class Thefooter extends Component {
  render() {
    return (
      <div className="Thefooter">
        <div className="main-footer">
      		<div className="footer-container">
      			<div className="footer-4"> {/*col-md-4 */}
      				<div className = "header">
          				<h2>About Adetola</h2>
      	            </div>
      				<p>He is a researcher, programmer and teacher. He has built academic software.and currently work at CodeLagos where He mentors upcoming software developers in Lagos State. He believe in education and human development through science and technological skills development. He like visiting new places and love to ponder on nature's beauty and wonder.</p>
      			</div>

      			<div className="footer-4">
      				<div className = "header">
      				    <h2 id="contact-us">Contact Us</h2>
      				</div>
      				<form action="#" method="post" className="contact">
      					<p>
                  <label>Name:</label><br/>
      						<input type="text" ref="name" className="" />
      					</p>
                          <p><label>Area of Interest</label><br/>
                          	<select>
      	                    	<option>Data Analysis</option>
      	                    	<option>Machine learning</option>
      	                    	<option>Web Design</option>
      	                    	<option>Web Development</option>
      	                    	<option>Graphic design</option>
                              </select>
                          </p>
      					<p>
      					    <label>E-mail</label><br/>
          					<input type="email" name="email" placeholder="Your email..." required="" className="input-i"/>
          			</p>
          				<p><label>Message:</label><br/>
      						<textarea className="input-i" cols="30" rows="7">

      						</textarea>
      				    </p>
      					<input className="button-submit" type="submit" value="Submit"/>
      				</form>
      			</div>

      			<div className="footer-4">
      				<div className = "header">
           			<h2>Navigation</h2>
           		</div>
      				<ul>
      					<li><i className="fa fa-long-arrow-right" aria-hidden="true"></i><a href="#home" className="footer-nav-link"> Home</a></li>
      					<li><i className="fa fa-long-arrow-right" aria-hidden="true"></i><a href="#about-us" className="footer-nav-link"> Philosopy</a></li>
      					<li><i className="fa fa-long-arrow-right" aria-hidden="true"></i><a href="#our-work" className="footer-nav-link"> Work</a></li>
      					<li><i className="fa fa-long-arrow-right" aria-hidden="true"></i><a href="#contact-us" className="footer-nav-link"> Contacts</a></li>
      				</ul>
      				</div>
      					<div className="clr"> </div>
      				<div className="">
      				<div className="footer-copy">
      					<p>© 2018 AdetolaBewaji. All rights reserved | Design by <a href="#">Stathandle</a></p>
      				</div>
      				<div className="clr"> </div>
      			</div>
      		</div>
      	</div>

      </div>
    );
  }
}

export default Thefooter;
