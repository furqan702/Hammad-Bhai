import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

export default class Sliderproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        }
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };
    render() {
        const settings = {
            dots: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2
        };
        const settingsMobile = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1
        };
        const { width } = this.state;
        const isMobile = width <= 800;

        if (isMobile) {
            return (
                <div>
                    <Slider {...settingsMobile}>
                        <div className="col-md-3 m-wthree ">
                            <div className="col-m">
                                <Link to="/" data-toggle="modal" data-target="#myModal1" className="offer-img">
                                    <img src="/images/of.png" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/product-details">Chicken</Link></h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label></label><em className="item_price"></em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b " onClick={() => this.props.state.addToCart("Chicken")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="#" data-toggle="modal" data-target="#myModal2" className="offer-img">
                                    <img src="images/of1.png" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/product-details">BEEF</Link></h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label></label><em className="item_price"></em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" onClick={() => this.props.state.addToCart("Beef")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="#" data-toggle="modal" data-target="#myModal3" className="offer-img">
                                    <img src="images/of2.png" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/product-details">Mutton</Link></h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label></label><em className="item_price"></em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" onClick={() => this.props.state.addToCart("Mutton")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="#" data-toggle="modal" data-target="#myModal4" className="offer-img">
                                    <img src="images/of3.png" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                <div className="md-top">
                                        <h6><Link to="/product-details">Masala</Link></h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label></label><em className="item_price"></em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" onClick={() => this.props.state.addToCart("Masala")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </Slider>
                </div>

            );
        }
        else {
            return (
                <div>
                    <Slider {...settings}>
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="/" data-toggle="modal" data-target="#myModal1" className="offer-img">
                                    <img src="/images/of.png" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women" style={{marginTop:"-80px"}}>
                                        <h6><Link to="/product-details">Chicken</Link></h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label></label><em className="item_price"></em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b " onClick={() => this.props.state.addToCart("Chicken")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="#" data-toggle="modal" data-target="#myModal2" className="offer-img">
                                    <img src="images/of1.png" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/product-details">BEEf</Link></h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label></label><em className="item_price"></em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" onClick={() => this.props.state.addToCart("BEEF")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="#" data-toggle="modal" data-target="#myModal3" className="offer-img">
                                    <img src="images/of2.png" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women" style={{marginTop:"3px"}}>
                                        <h6><Link to="/product-details">MUTTON</Link></h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label></label><em className="item_price"></em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" onClick={() => this.props.state.addToCart("MUTTON")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="#" data-toggle="modal" data-target="#myModal4" className="offer-img">
                                    <img src="images/of3.png" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women" style={{marginTop:"-55px"}}>
                                        <h6><Link to="/product-details">MASALA</Link></h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label></label><em className="item_price"></em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" onClick={() => this.props.state.addToCart("MASALA")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </Slider>
                </div>
            )
        }
    }
}
