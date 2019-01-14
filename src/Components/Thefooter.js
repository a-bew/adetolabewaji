import React, { Component } from 'react';
import Textarea from "./forms/requestForm/Textarea";
import Email from "./forms/requestForm/Email";

class Thefooter extends Component {
   /* Select option property */
  static defaultProps = {
      categoriess : ["Data Analysis", "Machine learning", "Web Design", "Web Development", "Graphic Designs"]
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log('submitting form. We need to validate it!');
  }

  render() {
    let categoryOptions =  this.props.categoriess.map(category => {
  return <option key = {category} value={category}>{category}</option>
})

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
      				<form action="#contact-us" method="post" className="contact" data-netlify="true" onSubmit={this.handleSubmit}>
      					<p>
                  <label htmlFor="name">Name:</label><br/>
      						<input type="text" ref="name" className="" name="name"/>
      					</p>
                <p><label htmlFor="role">Area of Interest</label><br/>
                <select ref="role">
                    {categoryOptions}
                </select>
                </p>
      					<p>
      					    <label htmlFor="email">E-mail</label><br/>
          					<Email />
          			</p>
          				<p><label>Message:</label><br/>
                  <Textarea />

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
