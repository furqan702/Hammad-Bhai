import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Kitchen extends Component {
    render() {
        return (
            <div>
                {/* Carousel
    ================================================== */}
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <Link to="/"><img className="first-slide" src="images/super3.jpg" alt="First slide" /></Link>
                        </div>
                        <div className="item">
                            <Link to="/"> <img className="second-slide " src="images/super2.jpg" alt="Second slide" /></Link>
                        </div>
                        <div className="item">
                            <Link to="/"><img className="third-slide " src="images/super4.jpg" alt="Third slide" /></Link>
                        </div>
                    </div>
                </div>{/* /.carousel */}
                {/*content*/}
                <div className="kic-top ">
                    <div className="container ">
                        <div className="kic ">
                            <h3>Popular Categories</h3>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/pic3.jpg" className="img-responsive" alt="" />
                            </Link>
                            
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/pic2.jpg" className="img-responsive" alt="" />
                            </Link>
                           
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/pic1.jpg" className="img-responsive" alt="" />
                            </Link>
                            
                        </div>
                    </div>
                </div>
                {/*content*/}
                <div className="product">
                    <div className="container">
                        <div className="spec ">
                            <h3 style={{marginTop:"50px"}}>Products</h3>
                            <div className="ser-t">
                                <b />
                                <span><i /></span>
                                <b className="line" />
                            </div>
                        </div>
                        <div className=" con-w3l agileinf">
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal1" className="offer-img">
                                        <img src="images/of16.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/"></Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={24} data-name="Wheat" data-summary="summary 24" data-price={6.00} data-quantity={1} data-image="images/of16.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                           
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal4" className="offer-img">
                                        <img src="images/of19.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/"></Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" style={{marginTop:"20px"}} data-id={27} data-name="Rice" data-summary="summary 27" data-price="0.80" data-quantity={1} data-image="images/of19.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal5" className="offer-img">
                                        <img src="images/of20.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/"></Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={28} data-name="Oil" data-summary="summary 28" data-price={6.00} data-quantity={1} data-image="images/of20.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1 cl-7">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal6" className="offer-img">
                                        <img src="images/of21.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/"></Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" style={{marginTop:"20px"}} data-id={29} data-name="Biscuits" data-summary="summary 29" data-price="4.50" data-quantity={1} data-image="images/of21.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal7" className="offer-img">
                                        <img src="images/of22.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/"></Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" style={{marginTop:"20px"}} data-id={30} data-name="Nuts" data-summary="summary 30" data-price="3.50" data-quantity={1} data-image="images/of22.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal8" className="offer-img">
                                        <img src="images/of23.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/"></Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={31} data-name="Rice" data-summary="summary 31" data-price="0.80" data-quantity={1} data-image="images/of23.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}
