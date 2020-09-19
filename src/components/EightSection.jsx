import React from 'react'
import user from '../images/user.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function EightSection(props) {
  
  return (
    <div id="eightSection">
      <div className="headerTitle ">
        <h2>{props.title}</h2>
        <p>{props.des}</p>
      </div>
      <div className="container owlSlider  wow fadeInRightBig" data-wow-duration="2s">
        <OwlCarousel
          className="owl-theme"
          loop
          autoplay
          items="1">
          <div className="singleSlide item">
            <div className="owlImage"><img src={user} alt="" /></div>
            <div className="owlDet col-xl-12 col-xs-12 ">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ullam similique repudiandae at distinctio ex nostrum quibusdam aut quia.</p>

              <h6>Christopher Ryan</h6>
              <p className="titleP">Designer </p>
              <div className="owlRating">

                <ul>
                  <li><FontAwesomeIcon prefix="far" icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="singleSlide item">
            <div className="owlImage"><img src={user} alt="" /></div>
            <div className="owlDet col-xl-12 col-xs-12 ">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ullam similique repudiandae at distinctio ex nostrum quibusdam aut quia.</p>

              <h6>Christopher Ryan</h6>
              <p className="titleP">Designer </p>
              <div className="owlRating">

                <ul>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="singleSlide item">
            <div className="owlImage"><img src={user} alt="" /></div>
            <div className="owlDet col-xl-12 col-xs-12 ">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ullam similique repudiandae at distinctio ex nostrum quibusdam aut quia.</p>

              <h6>Christopher Ryan</h6>
              <p className="titleP">Designer </p>
              <div className="owlRating">

                <ul>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="singleSlide item">
            <div className="owlImage"><img src={user} alt="" /></div>
            <div className="owlDet col-xl-12 col-xs-12 ">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ullam similique repudiandae at distinctio ex nostrum quibusdam aut quia.</p>

              <h6>Christopher Ryan</h6>
              <p className="titleP">Designer </p>
              <div className="owlRating">

                <ul>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                  <li><FontAwesomeIcon icon={faStar} /></li>
                </ul>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  )
}

export default EightSection