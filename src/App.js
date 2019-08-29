import React from 'react';

import './reset.css';
import './style.css';

import Card from './components/Card.js';  

let alumnos = [
  {
    number_section:'app_section1',
    image_profile:'./images/dennis.jpg',
    name:'Devnnis Valdes',
    grade:'2do TIC',
    facebook_logo:'./images/facebook',
    instagram_logo:'./images/instagram.svg',
    instagram_url:'',
    skype_logo:'./images/skype.svg',
    skype_url:'https://join.º1skype.com/invite/y4fRHbAQMX3u'
  },
  {
    number_section:'app_section2',
    image_profile:'./images/belen.jpg',
    name:'Belen Campos',
    grade:'2do TIC',
    facebook_logo:'./images/facebook',
    instagram_logo:'./images/instagram.svg',
    instagram_url:'',
    skype_logo:'./images/skype.svg',
    skype_url:''
  },
  {
    number_section:'app_section3',
    image_profile:'./images/marcelo.jpg',
    name:'Marcelo Meneses',
    grade:'2do TIC',
    facebook_logo:'./images/facebook',
    instagram_logo:'./images/instagram.svg',
    instagram_url:'',
    skype_logo:'./images/skype.svg',
    skype_url:''
  }
]

function App() {
  return (
    <div className="App">
      {
        alumnos.map( (alumno) => {
          return (
            <Card
              number_section={alumno.number_section}
              image_profile={alumno.image_profile}
              name={alumno.name}
              grade={alumno.grade}
              facebook_logo={alumno.facebook_logo}
              instagram_logo={alumno.instagram_logo}
              instagram_url={alumno.instagram_url}
              skype_logo={alumno.skype_logo}
              skype_url={alumno.skype_url}
            ></Card>
          )
        })
      }  
    </div>
  );
}

export default App;
