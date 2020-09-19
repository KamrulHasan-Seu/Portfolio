import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
function NinthSection() {
    return (
        <div>

            <section id="contact_area" className="section_padding">
                <div className="container">
                    <div className="row">
                        <div className=" col-xl-12 text-center">
                            <div className="section_title wow slideInDown" data-wow-duration="2s">
                                <h2>Contact Me</h2>
                                <p> It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-xl-12 col-md-12 col-lg-12 wow zoomIn" data-wow-duration="2s">
                            <div className="contact_form">
                                <form id="contact-form" action="https://formspree.io/khasan.seu@gmail.com" method="POST">
                                    <div className="row">
                                        <div className="input-element col-xl-4 col-md-4 col-lg-4">
                                            <input type="text" name="name" className="form-control" id="first-name"
                                                placeholder="Full Name" required="required" />
                                        </div>

                                        <div className="input-element">
                                            <input type="email" name="_replyto" className="form-control" id="emailn"
                                                placeholder="Email" required="required" />
                                        </div>

                                        <div className="input-element col-xl-4 col-md-4 col-lg-4">
                                            <input type="text" name="subject" className="form-control" id="subject"
                                                placeholder="Subject" required="required" />
                                        </div>

                                        <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <textarea rows="6" name="message" className="form-control col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" id="description"
                                                placeholder="Your Message" required="required"></textarea>

                                            <div className="contact_info col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <div className="single_con">
                                                    <i className=""><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon></i>
                                                    <p>3010 Raoul Wallenberg <br /> 
                                                    PlaceWallingford CT 06492
                                                    </p>
                                                </div>

                                                <div className="single_con">
                                                    <i className="far "><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon></i>
                                                    <p>
                                                        203-906-9388<br />
                                                        205-806-9368
                                                    </p>
                                                </div>

                                                <div className="single_con">
                                                    <i><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></i>
                                                    <p>
                                                        yourmail@example.com<br />
                                                        your@mail.com
                                                    </p>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lf-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                            <div className="actions ">
                                                <input type="submit" value="Send Me" name="submit" id="submitButton"
                                                    className="main-btn" />
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <footer id="footer_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center">
                            <p>Copyright © 2019 <a href="home">Kamrul</a>, All rights Reserved.<br />
                        Created by Kamrul Hasan</p>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default NinthSection