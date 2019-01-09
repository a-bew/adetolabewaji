import React, { Component } from 'react';
import Theheader from "./Theheader";
import Contents from "./Contents";
import Thefooter from "./Thefooter";

class Projects extends Component {
  render() {

    return (
      <div className="Projects">
        <main>
          <Theheader />
          <div className="clr"></div>
          <Contents images = {this.props.images} />
          <div className="clr"></div>
        </main>
        <Thefooter />
      </div>
    );

  }
}

export default Projects;
