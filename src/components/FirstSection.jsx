import React from 'react'
import vector1 from '../images/vector1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typed from 'react-typed';
import Particles from 'react-particles-js'
import SocialIcons from './SocialIcons'
function FirstSection() {
  return (
    <div id="content">
      <div id="firstSection">

        <div className="container-fluid ">

          <div className="row header-row" >
            <Particles
              className="particles"
              params={{
                particles: {
                  color: {
                    value: "#FF5733"
                  },
                  line_linked: {
                    color: {
                      value: "#000"
                    }
                  },
                  collisions: {
                    enable: true
                  }, move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 2,
                    straight: false
                  },

                  number: {

                    value: 120,
                  },
                  size: {
                    value: 2
                  },
                  retina_detect: true
                },
                fpsLimit: 60,
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse"
                    },
                    resize: false
                  }
                },
                retina_detect: true
              }}
            />
            {/* <div className="img-opacity"></div> */}

            <div className="col-xs-6 col-xl-6 col-md-6 col-lg-6 col-sm-12 headerImg .max-width">
              <img src={vector1} alt="" />
            </div>

            <div className=" col-xs-6 col-xl-6 col-md-6 col-lg-6 col-sm-12  headerTyper ">
              <h1 className="typed">
                {/* <span>Hello</span> I'm Kamrul. */}
                <Typed
                  strings={['Hello, I am Kamrul',
                    'A Web Developer',
                    'A Frontend Designer'
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />


              </h1>


              <span id="typed"></span>
              <span className="typer"></span>
              <div className="div sameButton">
                <SocialIcons />
                <button type="button" className="btn">DOWNLOAD CV</button>

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default FirstSection