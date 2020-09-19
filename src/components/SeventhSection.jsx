import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faLaptop, faScroll, faBug } from '@fortawesome/free-solid-svg-icons'


function SeventhSection(props) {

  return (
    <div id="seventhSection">
      <div class="funSection">
        <div class="container funRow  wow fadeIn" data-wow-duration="2s">
          <div class="row ">
            <div class="funbox col-xl-3 col-lg-3 col-md-6 text-center">
              <FontAwesomeIcon className="fun-Icon" icon={faBookmark} />
              <div class="funDet">
                <h1 class="counter"><CountUp start={0} end={10} />+</h1>
                <h5>Projects Delivered</h5>
              </div>
            </div>
            <div class="funbox col-xl-3 col-lg-3 col-md-6 text-center">
              <FontAwesomeIcon className="fun-Icon" icon={faLaptop} />
              <div class="funDet">
                <h1 class="counter"><CountUp start={0} end={1000} />+</h1>
                <h5>Hours Of Coding</h5>
              </div>
            </div>
            <div class="funbox col-xl-3 col-lg-3 col-md-6 text-center">
              <FontAwesomeIcon className="fun-Icon" icon={faScroll} />
              <div class="funDet">
                <h1 class="counter"><CountUp start={0} end={20000} />+</h1>
                <h5>Lines Of Code</h5>
              </div>
            </div>
            <div class="funbox col-xl-3 col-lg-3 col-md-6 text-center">
              <FontAwesomeIcon className="fun-Icon" icon={faBug} />
              <div class="funDet">
                <h1 class="counter"><CountUp start={0} end={9382} />+</h1>
                <h5>Bug Fixing</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default SeventhSection