import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Care extends Component {
    render() {
        return (
            <div>
                {/**/}
                {/* Carousel
      ================================================== */}
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" role="listbox" >
                        <div className="item active" style={{marginTop:"50px"}}>
                            <Link href="/"><img className="first-slide" src="images/super2.jpg" alt="First slide" /></Link>
                        </div>
                        <div className="item">
                            <Link href="/"><img className="second-slide " src="images/super4.jpg" alt="Second slide" /></Link>
                        </div>
                        <div className="item">
                            <Link href="/"><img className="third-slide " src="images/super3.jpg" alt="Third slide" /></Link>
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
                            <Link href="/">
                                <img src="images/ki3.jpg" className="img-responsive" alt="" />
                            </Link>
                            
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link href="/">
                                <img src="images/ki4.jpg" className="img-responsive" alt="" />
                            </Link>
                            
                        </div>
                        <div className="col-md-4 kic-top1" style={{marginTop:"-50px"}}>
                            <Link href="/">
                                <img src="images/ki5.jpg" className="img-responsive" alt="" />
                            </Link>
                            
                        </div>
                    </div>
                </div>
                {/*content*/}
                <div className="product">
                    <div className="container">
                        <div className="spec ">
                            <h3>Products</h3>
                            <div className="ser-t">
                                <b />
                                <span><i /></span>
                                <b className="line" />
                            </div>
                        </div>
                        <div className=" con-w3l agileinf">
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal1" className="offer-img">
                                        <img src="images/of1.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/"></Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={36} data-name="Baby Oil" data-summary="summary 36" data-price={6.00} data-quantity={1} data-image="images/of1.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal2" className="offer-img">
                                        <img src="images/of2.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/"></Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={37} data-name="Soap" data-summary="summary 37" data-price="4.50" data-quantity={1} data-image="images/of2.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1" style={{height:"290px"}}>
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal3" className="offer-img">
                                        <img src="images/of38.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/"></Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b"  style={{marginTop:"10px"}}data-id={38} data-name="Hair Gel" data-summary="summary 38" data-price="3.50" data-quantity={1} data-image="images/of38.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1 cl-4" style={{height:"290px"}}>
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal4" className="offer-img">
                                        <img src="images/of39.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/"></Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={39} data-name="Lotion" data-summary="summary 39" data-price="0.80" data-quantity={1} data-image="images/of39.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1 cl-6">
                                <div className="col-m" style={{height:"250px"}}>
                                    <Link href="#" data-toggle="modal" data-target="#myModal5" className="offer-img">
                                        <img src="images/of40.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/"></Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" style={{marginTop:"-50px"}} data-id={40} data-name="Shower Gel" data-summary="summary 40" data-price={6.00} data-quantity={1} data-image="images/of40.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1 cl-5">
                                <div className="col-m" style={{height:"250px"}}>
                                    <Link href="#" data-toggle="modal" data-target="#myModal6" className="offer-img">
                                        <img src="images/of41.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/"></Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" style={{marginTop:"10px"}} data-id={41} data-name="Hair Color" data-summary="summary 41" data-price="4.50" data-quantity={1} data-image="images/of41.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m" style={{height:"250px"}}>
                                    <Link href="#" data-toggle="modal" data-target="#myModal7" className="offer-img">
                                        <img src="images/of42.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/"> </Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" style={{marginTop:"-10px"}} data-id={42} data-name="Wipes" data-summary="summary 42" data-price="3.50" data-quantity={1} data-image="images/of42.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m" style={{height:"250px"}}>
                                    <Link href="#" data-toggle="modal" data-target="#myModal8" className="offer-img">
                                        <img src="images/of43.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/"></Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label></label><em className="item_price"></em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={43} data-name="Essential Oils" data-summary="summary 43" data-price="0.80" data-quantity={1} data-image="images/of43.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
