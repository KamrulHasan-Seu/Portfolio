import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function FourthSection(props) {
  return (
    <div id="fourthSection">
      <div className="headerTitle ">
        <h2>{props.title}</h2>
        <p>{props.des}</p>
      </div>
      <div className="row">
        <div className="servicesMenu wow bounceInLeft" data-wow-duration="2s">
          <div className="singleMenu col-xl-4 col-lg-6 col-xs-12">
            <div className="serviceBox  wow bounceInLeft">
              <i className="far fa-lightbulb"></i>
              <h6>App Development</h6>
              <p>ipsum dolor sit amet consectetur adipisicing elit. Cum similique asperiores
              officia eum quos! Adipisci, quam deserunt excepturi ex, ipsa eos iusto nulla eum
                   culpa optio nihil, necessitatibus eligendi nostrum.</p>

            </div>
          </div>
          <div className="singleMenu col-xl-4 col-lg-6">
            <div className="serviceBox wow bounceInDown" data-wow-duration="2s">
              <i className="far fa-flag"></i>
              <h6>Web Development</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique asperiores
              officia eum quos! Adipisci, quam deserunt excepturi ex, ipsa eos iusto nulla eum
                 culpa optio nihil, necessitatibus eligendi nostrum.</p>
            </div>
          </div>
          <div className="singleMenu col-xl-4 col-lg-6">
            <div className="serviceBox wow bounceIn" data-wow-duration="2s">
              <i className="far fa-chart-bar"></i>
              <h6>Responsive Design</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique asperiores
              officia eum quos! Adipisci, quam deserunt excepturi ex, ipsa eos iusto nulla eum
                 culpa optio nihil, necessitatibus eligendi nostrum.</p>
            </div>
          </div>
          <div className="singleMenu col-xl-4 col-lg-6">
            <div className="serviceBox wow bounceInRight" data-wow-duration="2s">
              <i className="far fa-gem"></i>
              <h6>Design & Interfaces</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique asperiores
              officia eum quos! Adipisci, quam deserunt excepturi ex, ipsa eos iusto nulla eum
                 culpa optio nihil, necessitatibus eligendi nostrum.</p>
            </div>
          </div>
          <div className="singleMenu col-xl-4 col-lg-6">
            <div className="serviceBox wow fadeInUp" data-wow-duration="2s">
              <i className="far fa-paper-plane"></i>
              <h6>Highly Customizable</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique asperiores
              officia eum quos! Adipisci, quam deserunt excepturi ex, ipsa eos iusto nulla eum
                 culpa optio nihil, necessitatibus eligendi nostrum.</p>
            </div>
          </div>
          <div className="singleMenu  col-xl-4 col-lg-6">
            <div className="serviceBox  wow fadeInRight" data-wow-duration="2s">
              <i className="far fa-file-code"></i>
              <h6>Dedicated Support</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique asperiores
              officia eum quos! Adipisci, quam deserunt excepturi ex, ipsa eos iusto nulla eum
                 culpa optio nihil, necessitatibus eligendi nostrum.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default FourthSection
