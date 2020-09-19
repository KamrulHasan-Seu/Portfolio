import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function ThirdSection(props) {
    return (

        <div id="thirdSection">
            <div className="headerTitle ">
                <h2>{props.title}</h2>
                <p>{props.des}</p>
            </div>
            <div className="skillArea wow slideInRight  " data-wow-duration="2s">
                <div className="singleSkill col-xl-3 col-lg-3 col-md-6">
                    <div className="circleChart font-weight-bold" data-percentage="100" >Html</div>
                    <CircularProgressbar value={100} text={`${100}%`} className="circular-progress-bar" />
                </div>
                <div className="singleSkill col-xl-3 col-lg-3 col-md-6">
                    <div className="circleChart font-weight-bold" data-percentage="80">Css</div>
                    <CircularProgressbar value={94} text={`${94}%`} className="circular-progress-bar" />
                </div>
                <div className="singleSkill col-xl-3 col-lg-3 col-md-6">
                    <div className="circleChart font-weight-bold" data-percentage="90">React</div>
                    <CircularProgressbar value={90} text={`${90}%`} className="circular-progress-bar" />
                </div>
                <div className="singleSkill col-xl-3 col-lg-3 col-md-6">
                    <div className="circleChart font-weight-bold" data-percentage="70">Java</div>
                    <CircularProgressbar value={80} text={`${80}%`} className="circular-progress-bar" />
                </div>

            </div>
        </div>

    )
}

export default ThirdSection