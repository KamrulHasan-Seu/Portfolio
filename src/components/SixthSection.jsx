import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function SixthSection(props) {
    return (
        <div id="sixthSection">
            <div className="headerTitle ">
                <h2>{props.title}</h2>
                <p>{props.des}</p>
            </div>
            <div class="container resume">
                <div class="row">
                    <div class="education col-xl-6 col-lg-6">
                        <h5><span><i class="fas fa-crown"></i></span> Education</h5>
                        <div class="serviceBox wow zoomIn" data-wow-duration="2s">
                            <div class="date">January 2015-2020 </div>
                            <div class="sub">
                                <h6>Computer Science & Engineering</h6>
                            </div>
                            <div class="schoolName">
                                <p>Southeast University</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero aliquam,
                                debitis eaque culpa voluptates quam consequuntur, sequi accusamus?
                    </p>
                        </div>
                        <div class="serviceBox wow zoomIn" data-wow-duration="2s">
                            <div class="date">July 2011-2013</div>
                            <div class="sub">
                                <h6>Higher secondary School Certificate</h6>
                            </div>
                            <div class="schoolName">
                                <p>V.S.A.J Ansar Academy</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero aliquam,
                                debitis eaque culpa voluptates quam consequuntur, sequi accusamus?
                    </p>
                        </div>
                        <div class="serviceBox wow zoomIn" data-wow-duration="2s">
                            <div class="date">January 2009-2011</div>
                            <div class="sub">
                                <h6>secondary School Certificate</h6>
                            </div>
                            <div class="schoolName">
                                <p>Loskorchla High School</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero aliquam,
                                debitis eaque culpa voluptates quam consequuntur, sequi accusamus?
                    </p>
                        </div>
                    </div>
                    <div class="experience col-xl-6 col-lg-6">
                        <h5><span><i class="fas fa-briefcase"></i></span> Experience</h5>
                        <div class="serviceBox wow zoomIn" data-wow-duration="2s">
                            <div class="date">January 2020-Now</div>
                            <div class="sub">
                                <h6>Software Engineer</h6>
                            </div>
                            <div class="schoolName">
                                <p>Fortress data Service Banglasdesh Ltd.</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero aliquam,
                                debitis eaque culpa voluptates quam consequuntur, sequi accusamus?
                    </p>
                        </div>
                        <div class="serviceBox wow zoomIn" data-wow-duration="2s">
                            <div class="date">July 2019-Dec 2019</div>
                            <div class="sub">
                                <h6>Jr. Software Engineer</h6>
                            </div>
                            <div class="schoolName">
                                <p>Fortress data Service Banglasdesh Ltd.</p>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero aliquam,
                                debitis eaque culpa voluptates quam consequuntur, sequi accusamus?
                    </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SixthSection