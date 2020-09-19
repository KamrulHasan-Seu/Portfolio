import React from 'react'
import signatureImage from '../images/signature.png'
import image2 from '../images/img-2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function SecondSection() {
    return (
        <div id="secondSection">
            <div className="row">
                <div className="container">
                    <div className="aboutMe  col-xl-7 col-lg-7 float-xl-left float-lg-left wow rollIn" data-wow-duration="2s">
                        <h2 className="text-center">About Me</h2>
                        <div className="aboutDet">
                            <div className="row ">
                                <h6 className="col-xl-4 col-lg-4 col-md-5 col-sm-5 font-weight-bold">Name </h6>
                                <h6 className="col-xl-8 col-lg-8 col-md-7 col-sm-7">: Md. Kamrul Hasan</h6>
                            </div>
                            <div className="row ">
                                <h6 className="col-xl-4 col-lg-4 col-md-5 col-sm-5 font-weight-bold">Date Of Birth</h6>
                                <h6 className="col-xl-8 col-lg-8 col-md-7 col-sm-7">: 17-02-1995</h6>
                            </div>
                            <div className="row ">
                                <h6 className="col-xl-4 col-lg-4 col-md-5 col-sm-5 font-weight-bold">Address</h6>
                                <h6 className="col-xl-8  col-lg-8 col-md-7 col-sm-7">: Mouchak,Kaliakoir,Gazipur-1751</h6>
                            </div>
                            <div className="row ">
                                <h6 className="col-xl-4 col-lg-4 col-md-5 col-sm-5 font-weight-bold">Email</h6>
                                <h6 className="col-xl-8 col-lg-8 col-md-7 col-sm-7">: Kh317325@gmail.com</h6>
                            </div>
                            <div className="row ">
                                <h6 className="col-xl-4 col-lg-4 col-md-5 col-sm-5 font-weight-bold">Phone</h6>
                                <h6 className="col-xl-8 col-lg-8 col-md-7 col-sm-7">: +8801967385848</h6>
                            </div>
                        </div>
                        <div className="sigDiv wow bounceInUp " data-wow-duration="2s">
                            <img src={signatureImage} alt="" />
                        </div>

                        <div className="div sameButton">
                            <button type="button" className="btn">HIRE ME</button>
                            <button type="button" className="btn vedioBtn">Watch Video</button>
                        </div>

                    </div>
                    <div className="aboutImg col-xl-5 col-lg-5 float-xl-right float-lg-right  wow jackInTheBox " data-wow-duration="2s">
                        <img src={image2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection