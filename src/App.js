import React, { Component } from 'react';
import Projects from "./Components/Projects";
import './css/font-awesome.min.css';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      images : []
    }
  }

  componentWillMount(){
      const absolutePath = "../images/";

      this.setState({images : [
            { personalPhoto: absolutePath +"adetolaphoto.jpg", desc: "Adetola Bewaji"},
            { bn: absolutePath + "bn.png", desc: "Data Analysis"},
            { bigData: absolutePath + "big-data.jpg", desc: "Machine Learning"},
            { worldP: absolutePath + "world-p.jpg", desc: "Web Design"},
            { dataA: absolutePath + "data-a.jpg", desc: "Web Development"},
            { phone: absolutePath + "phone.jpg", desc: "Graphic Designs"},
            { imageAnal : absolutePath + "image-anal.jpg", desc: "Consultancy and Training"}
          ]
    });
  }

  render() {
    return (
      <div className="App">
          <Projects images = {this.state.images} />
      </div>
    );
  }
}

export default App;
