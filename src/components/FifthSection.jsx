import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import g1 from '../images/g-1.jpg'
import g2 from '../images/g-2.jpg'
import g3 from '../images/g-3.jpg'
import g4 from '../images/g-4.jpg'


class FifthSection extends React.Component {
    
    render(){
    return (
        <div id="fifthSection">
            <div className="headerTitle ">
                <h2>{this.props.title}</h2>
                <p>{this.props.des}</p>
            </div>
            <div className="gallery">
                <div className="galleryMenu">

                    <ul>
                        <li><button data-filter='.All'>All</button></li>
                        <li><button data-filter='.web-design-a'>Web Design</button></li>
                        <li><button data-filter='.app-dev-b'>App Development</button></li>
                        <li><button data-filter='.react-design-c'>React Design</button></li>
                        <li><button data-filter='.photoshop-d'>Photoshop</button></li>
                    </ul>
                </div>
                <div className="galleryPics mixCont ">
                    <div className="container " >
                        <div className="row mixitup">
                            <div className="picBox col-xl-4 col-lg-6 col-md-6 mix web-design-a All wow fadeInRight" data-wow-duration="2s">
                                <img src={g1} alt="" className=" img-fluid" />
                                <div className="picTitle text-center">
                                    <h5>Title</h5>
                                    <p>Web Design</p>
                                </div>
                            </div>
                            <div className="picBox col-xl-4 col-lg-6 col-md-6 mix app-dev-b All wow fadeInRight"
                                data-wow-duration="2s">
                                <img src={g2} alt="" className=" img-fluid" />
                                <div className="picTitle text-center">
                                    <h5>Title</h5>
                                    <p>App Development</p>
                                </div>
                            </div>

                            <div className="picBox col-xl-4 col-lg-6 col-md-6 mix web-design-a All wow fadeInLeft"
                                data-wow-duration="2s">
                                <img src={g3} alt="" className=" img-fluid" />
                                <div className="picTitle text-center ">
                                    <h5>Title</h5>
                                    <p>Web Design</p>
                                </div>

                            </div>
                            <div className="picBox col-xl-4 col-lg-6 col-md-6 mix react-design-c All wow fadeInLeft"
                                data-wow-duration="2s">
                                <img src={g4} alt="" className=" img-fluid" />
                                <div className="picTitle text-center">
                                    <h5>Title</h5>
                                    <p>React Design</p>
                                </div>

                            </div>
                            <div className="picBox col-xl-4  col-lg-6 col-md-6 mix photoshop-d All wow fadeInRight"
                                data-wow-duration="2s">
                                <img src={g1} alt="" className=" img-fluid" />
                                <div className="picTitle text-center">
                                    <h5>Title</h5>
                                    <p>Photoshop</p>
                                </div>
                            </div>

                            <div className="picBox col-xl-4 col-lg-6 col-md-6 mix app-dev-b All wow fadeInRight"
                                data-wow-duration="2s">
                                <img src={g4} alt="" className=" img-fluid" />
                                <div className="picTitle text-center">
                                    <h5>Title</h5>
                                    <p>App Development</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default FifthSection