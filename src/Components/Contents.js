import React, { Component } from 'react';

class Contents extends Component {
  render() {
    let getImage = this.props;
    return (
      <div className="Contents">
        <section>
  				<div className="container">
  					<div className="header">
  					    <h2 id="about-us">Philosophy</h2>
  					</div>
  					<div className="main">
  						<p>
  							I have learnt that life gives back what you give to it.
  							No one lives for himself, and no one die for himself.
  							In the beginners mind there are many possibility, in the expert mind there are few.
  							Programming is all about logic, the way we think.
  							Too much of good stuff is bad stuff.
  						</p>
  					</div>
				    <aside className="sidebar">
			    		<p>
			    			"Ai is the new electricity. Data is still the oil." (Vanson Bourne)
			    		</p>
				    </aside>
          </div>
  			</section>

		    <div className="clr"></div>

        <div className="container">
				    <div className="sidebar-bottom">
		            <div className="stat-p">
		            	<img src= { getImage.images[0].personalPhoto } alt= { getImage.images[0].desc } className="mypics" />
		            </div>
				    </div>

				    <div  class="main-buttom">
              <div class="header">
						    <h2 id="our-work">Welcome</h2>
  						</div>
  						<p>
  							Bewaji Adetola is my name. I am a software developer from Nigeria. I studied Statistics in the College. I have passion for research, data science and programming. My earlierst experience in programming goes back to my college days when I learn a bit of VBA for Excel to manipuate and extract data on Microsoft Excel. Then I would write code snippet and use it to automate certain repetitive task. However with the emergence of data Science, I was drawn to Python a general-purpose programming language, which has gain much of its fame and value from its readable, intuitive and fewer syntax. I realize i could learn at lot and get more automated jobs done within a short time.
  							Today I use python programming language to develop softwares for personal and office use.
  						</p>
		        </div>
		    	</div>

          <div className="clr"></div>

          <div>
    				<div className="container">

		            <div className="header">
    					    <h2>Work</h2>
      					</div>

		            <article className="column">
		                <img src = { getImage.images[1].bn } alt= { getImage.images[1].desc } className="menu-img"/>
		                <div className="caption">
		                    <h3>Data Analysis</h3>
		                    <div className="scroll">First work experience in data analysis went as far back to 2012. I worked as a data analyst assistance. I worked with the organisation on data collection, sorting, data entry, data cleaning, data cleaning, data analysis and report writing. I was also priviledged to work on FINGOV a database project involving content analysis of all Nigeria annual report of all Nigeria company. Today I have a active data analysis portfolio with upwork freelencer and work for clients around the globe .</div>
		                </div>
  	            </article>

		            <article className="column">
		                <img src= { getImage.images[2].bigData } alt= { getImage.images[0].desc } class="menu-img"/>
		                <div className="caption">
	                    <h3>Machine Learning</h3>
	                    <div className="scroll">I am a beginner of data science. However in recent time I have make significant progress in the field. As a python programmer I can work for any company to solve machine learning problems. I can solve varieties of problem ranging from data wrangling, feature engineering, predictive modelling and web service. Other aspect of work include data virtualization, and exploratory data analysis.</div>
		                </div>
		            </article>
		            <article className="column">
		                <img src= { getImage.images[3].worldP } alt= { getImage.images[0].desc } className="menu-img"/>
		                <div className="caption">
		                    <h3>Web Design</h3>
		                    <div className="scroll">It is a priviledge to mention that I currently facilitate at CodeLagos where I teach and mentor out-of-school students in web design. I own much gratitude to my student who has kept the light burning through feedbacks and communication of web design opportunities at different point in time. I have worked on different projects and eager for more. I have eye for uniqueness of design and aethetics which has been the means of breakthrough in Web designs</div>
		                </div>
		            </article>
		            <article className="column">
		                <img src={ getImage.images[4].dataA } alt= { getImage.images[0].desc } className="menu-img"/>
		                <div className="caption">
		                    <h3>Web Development</h3>
		                    <div className="scroll">In recent times i have added a new skill set in the area of web development. This is a broader area of web programming which ensure greater involvement of client and server domain. Here we talk about building engines that enable user to interact with backend of a website as well as in the aspect of promoting better user experience. </div>
		                </div>
		            </article>
		            <article className="column">
		                <img src={ getImage.images[5].phone } alt= { getImage.images[5].desc } className="menu-img"/>
		                <div className="caption">
		                    <h3>Graphic Designs</h3>
		                    <div className="scroll">I was opportunity to learn a lot about graphic design after my high school. Today I have worked on variaties of projects ranging from logo creation, sourvier, website banners et cetera. I have acquired wealth of experience over the years.</div>
		                </div>
		            </article>
		            <article className="column">
	                <img src={ getImage.images[6].imageAnal } alt= { getImage.images[6].desc } className="menu-img"/>
                  <div className="caption">
                      <h3>Consultancy and Training</h3>
                      <div className="scroll re-scroll">Always available at your service. Contact us today.</div>
                  </div>
		            </article>
    				</div>
    			</div>



      </div>
      );
    }
  }

  export default Contents;
