import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
 apiKey: '627680ca2035454f99f7fa4eb2f49a0a'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }
  

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
  }

  onButtonSubmit = () => {
    app.models.predict(
      Clarifai.COLOR_MODEL,
      "https://samples.clarifai.com/face-det.jpg")
      .then(
      function(response) {
        console.log(response);
      },
      function(err) {
      // there was an error
     }
    );
  }

  render() {
    return (
      <div className="App">
       <Particles className='particles'
              params={particlesOptions}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} />
       <FaceRecognition />
      </div>
    );
  }
}

export default App;
