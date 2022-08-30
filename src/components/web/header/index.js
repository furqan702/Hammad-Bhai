import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import Mobileheader from '../header/mobile-header';
import { connect } from 'react-redux';
import { getCartNumbers } from '../../../actions/productActions';
class Header extends Component {
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
        const { width } = this.state;
        const isMobile = width <= 800;
        if (isMobile) {
            return (
                <div>
                    <Mobileheader />
                </div>
            );
        } else {
            return (
                <div>
                    {/* <Link to="#"><img src="images/download.png" className="img-head" alt="download" /></Link> */}
                    <Grid container className="header_info">
                        <Grid item lg={1} xl={2}></Grid>
                        <Grid item md={12} lg={11} xl={10} className="header_fixed">
                            <Grid container>
                                <Grid item md={3} lg={2} xl={2}>
                                    <div className="logo">
                                        <h1><Link to="#"><img src="images/logohalal.png" alt="HALAL MEAt" style={{ width:"130px",height:"70px",marginLeft:"-200px" }} /> <h2 style={{ marginTop:"-50px", fontFamily:"Helvetica" }}>Halal Meat</h2> </Link></h1>                                  
                                          </div>
                                </Grid>
                                <Grid item md={6} lg={7} xl={6}>
                                    <div className="search-form">

                                        <form action="#" method="post">
                                            <input type="text" name="search" placeholder="Search for Products..." />
                                            <button className="btn search__btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                                        </form>
                                    </div>
                                </Grid>
                                <Grid item md={3} lg={3} xl={4}>
                                    <Grid container className="bk_cart_sd">
                                        <Grid item md={6} lg={6} xl={6} className="btn_login">
                                        <Link to={"/login"}>
                                            <Button className="login" variant="outlined"><span>Login</span></Button>
                                        </Link>
                                        </Grid>
                                        <Grid item md={6} lg={6} xl={6} className="cart">
                                            <Link to="/carts">
                                                <Button className="cart_item" variant="outlined">
                                                    <span className="item_count">{this.props.cartProps.cart}</span>
                                                    <i className="fa fa-shopping-cart my-cart-icon" aria-hidden="true" /><span>Cart</span>
                                                </Button>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className="header_info_2">
                        {/* nav bar  */}
                        <Grid item md={1} lg={1} xl={1} className="cart_nav_header"></Grid>
                        <Grid item  md={11} lg={11} xl={11} className="cart_nav_header">
                            <div className="nav-top">
                                <nav className="navbar navbar-default">
                                    <div className="navbar-header nav_2">
                                        <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                                        <ul className="nav navbar-nav ">
                                            <li className="active"><Link to="/" className="hyper "><span>Home</span></Link></li>
                                            <li className="dropdown ">
                                                <Link to="/care" className="dropdown-toggle  hyper"><span>BEEF </span></Link>
                                                {/* <ul className="dropdown-menu multi">
                                                    <div className="row">
                                                     
                                                        <div>
                                                            <Link to="/kitchen"></Link>
                                                        </div>
                                                        <div className="clearfix" />
                                                    </div> */}
                                                {/* </ul> */}
                                            </li>

                                            <li className="dropdown ">
                                                <Link to="/kitchen" className="dropdown-toggle  hyper"><span>CHICKEN<b className="caret" /></span></Link>
                                              {/* `  <ul className="dropdown-menu multi">
                                                    <div className="row">
                                                        <div className="col-sm-3 w3l">
                                                            <Link to="/kitchen"></Link>
                                                        </div>
                                                        <div className="clearfix" />
                                                    </div>
                                                </ul>` */}
                                            </li>

                                            <li className="dropdown ">
                                                <Link to="/care" className="dropdown-toggle  hyper"><span>MUTTON<b className="caret" /></span></Link>
                                                {/* <ul className="dropdown-menu multi">
                                                    <div className="row">
                                                      
                                                        <div className="col-sm-3 w3l">
                                                            <Link to="/kitchen"><img src="images/me.png" className="img-responsive" alt="" /></Link>
                                                        </div>
                                                        <div className="clearfix" />
                                                    </div>
                                                </ul> */}
                                            </li>

                                            <li className="dropdown">
                                                <Link to="/" className="dropdown-toggle hyper" data-toggle="dropdown"><span> MASALA <b className="caret" /></span></Link>
                                                {/* <ul className="dropdown-menu multi multi1">
                                                    <div className="row">
                                                    
                                                        <div className="col-sm-3 w3l">
                                                            <Link to="/care"><img src="images/me1.png" className="img-responsive" alt="" /></Link>
                                                        </div>
                                                        <div className="clearfix" />
                                                    </div>
                                                </ul> */}
                                            </li>
                                            {/* <li className="dropdown">
                                                <Link to="#" className="dropdown-toggle hyper" data-toggle="dropdown"><span>Household<b className="caret" /></span></Link>
                                                <ul className="dropdown-menu multi multi2">
                                                    <div className="row">
                                                      
                                                        <div className="col-sm-3 w3l">
                                                            <Link to="/house-hold"><img src="images/me2.png" className="img-responsive" alt="" /></Link>
                                                        </div>
                                                        <div className="clearfix" />
                                                    </div>
                                                </ul>
                                            </li> */}
                                            {/* <li><Link to="/contact" className="hyper"><span>Contact Us</span></Link></li> */}
                                        </ul>
                                    </div>
                                </nav>
                                <div className="clearfix" />
                            </div>
                        </Grid>
                        {/* end nav bar  */}
                    </Grid>
                </div>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    cartProps: state.cartState
});

export default connect(mapStateToProps, { getCartNumbers })(Header);

