import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="col-md-3 footer-grid">
                        <h3 style={{textAlign: "center"}}>About Us</h3>
                        <p style={{textAlign: "center"}}><Link to=""> Designed by Hammad Zulfiqar. </Link> <br /> I am full stack developer . I am working on Nodejs,sequelize(ORM),Express, mongoDB,& Reactjs since 2years .so, if you want make any kind of website/software please freely contact with us. (+1443-300-3121) </p>

                    </div>
                    <div className="col-md-3 footer-grid" >
                        <h3 className='mar-l'>Menu</h3>
                        <ul style={{textAlign: "center"}}>
                            <li><Link to="/">We have category of Chicken</Link></li>
                            <li><Link to="/care">A greate taste of Beaf</Link></li>
                            <li><Link to="/kitchen">We have category of Mutton</Link></li>
                            {/* <li><Link to="/house-hold">MASALA</Link></li> */}
                            {/* <li><Link to="/contact">Contact</Link></li> */}
                        </ul>
                    </div>
                    <div className="col-md-3 footer-grid ">
                        <h3 style={{textAlign: "center"}}>Customer Services</h3>
                        <ul style={{textAlign: "center"}}>
                            <li><Link to="/desclaimer">Disclaimer</Link></li>
                            <li><Link to="/faq">Faqs</Link></li>
                            <li><Link to="/privacy-and-policy">Privacy & Policy</Link></li>
                            <li><Link to="/term-and-condition">Terms &amp; Conditions</Link></li>
                        </ul>
                    </div>
                     <div className="col-md-3 footer-grid">
                        <h3 style={{textAlign: "center"}}>Location</h3>
                        <div className='adj-ment'>
                            <a href="https://www.google.com/maps/place/Halal+Meat+House/@39.2367058,-76.7994668,17z/data=!3m1!4b1!4m5!3m4!1s0x89c81f7681cb5e03:0xb18525225306372a!8m2!3d39.2367104!4d-76.7994612">
                                <img src="images/location.jpeg" alt="" style={{margin:"10px 0 10px 0"}} />
                                <div style={{display:"flex", gap:"10px", alignItem:"center", justifyContent:"center", width:"280px"}}>
                                    <i className='fa fa-map-marker' style={{fontSize:"20px", color:"lightblue"}}></i>
                                        <div style={{color: "grey", fontSize:"16px"}}>Click here to get the location</div>
                                    
                                    </div>
                                </a>
                        </div>
                    </div>  
                    <div className="clearfix" />
                    <div className="footer-bottom">
                        <h2><Link to="/"><b>T<br />H<br />E</b>HALAL MEAT<span>The Best Supermarket</span></Link></h2>
                        <p className="fo-para"><Link to=""></Link>. I am full stack developer . I am working on Nodejs,sequelize(ORM),Express, mongoDB,& Reactjs since 2years .so, if you want make any kind of website/software please freely contact with us.</p>
                        <ul className="social-fo">
                            <li><a href="https://www.facebook.com/halalmeat22" className=" face"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><Link to="#" className=" ins"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                            <li><Link to="#" className=" whatsapp"><i className="fa fa-whatsapp" aria-hidden="true" /></Link></li>
                            {/* <li><Link to="#" className=" dri"><i className="fa fa-dribbble" aria-hidden="true" /></Link></li> */}
                        </ul>
                        {/* <div className=" address">
                            <div className="col-md-4 fo-grid1">
                                <p><i className="fa fa-home" aria-hidden="true" />New Delhi , Saket, India.</p>
                            </div>
                            <div className="col-md-4 fo-grid1">
                                <p><i className="fa fa-phone" aria-hidden="true" />+91 8375893352</p>
                            </div>
                            <div className="col-md-4 fo-grid1">
                                <p><Link to="/gmail.com"><i className="fa fa-envelope-o" aria-hidden="true" />pandit.bechu@gmail.com</Link></p>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    <div className="copy-right">
                        <p> © 2020 Big store. All Rights Reserved | Design by  <Link to="http://abhinashkumar.com/"> Abhinash kumar</Link></p>
                    </div> */}
                </div>
            </div>
            </div>

        )
    }
}
