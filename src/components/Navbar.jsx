import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="container " id="navbar">
      <navbar>
        <nav className="navbar navbar-expand-lg  ">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand " href="#firstSection">Kamrul Hasan</a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav  mt-2 mt-lg-0 ml-auto">
              <li className="nav-item ">
                <a className="nav-link" href="#firstSection">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#fourthSection">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#fifthSection">Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sixthSection">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#eightSection">Testimonial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#secondSection">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact_area">Contact</a>
              </li>

            </ul>
          </div>
        </nav>

      </navbar>

    </div>
        </div>
    )
}

export default Navbar
