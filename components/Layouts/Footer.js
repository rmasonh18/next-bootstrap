import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/images/white-logo.png" alt="image" />
                                    </a>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p> */}
                                </div>

                               {/*  <ul className="social">
                                    <li> 
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="flaticon-facebook-letter-logo"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="flaticon-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="flaticon-instagram-logo"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/" target="_blank">
                                            <i className="flaticon-youtube-play-button"></i>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Cello Lessons</h3>

                                <ul className="footer-services-list">
                                    <li>
                                        <Link href="/coming-soon">
                                            <a>Register</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/coming-soon">
                                            <a>Login</a>
                                        </Link>
                                    </li>
                                   {/*  <li>
                                        <Link href="/service-details">
                                            <a>Big Data Analysis</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>Desktop Applications</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/service-details">
                                            <a>Mobile Applications</a>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>

                                <ul className="quick-links-list">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/blog">
                                            <a>Blog</a>
                                        </Link>
                                    </li> 
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact</a>
                                        </Link>
                                  <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link> 
                                   </li> 
                                    <li>
                                        <Link href="/pricing">
                                            <a>Pricing</a>
                                        </Link>
                                    </li>*/}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contacts</h3>

                                <ul className="footer-contact-list">
                                    <li>
                                        <span>Address:</span> 
                                        1015 Wildwood Avenue<br /> Columbia, SC 29203
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <a href = " mailto:jacqueline@jacquelinetaylorandfriends.org" >Jacqueline</a>
                                    </li>
                                    <li>
                                        <span>Phone:</span> 
                                        803 369 5181
                                    </li>
                                    {/* <li>
                                        <span>Fax:</span> 
                                        +44 785 4578964
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>Copyright &copy;{currentYear} <a href="https://jacquelinetaylorandfriends.org.com/" target="_blank">Jacqueline Taylor & Friends</a>. All Rights Reserved!</p>
                            </div>

                           {/*  <div className="col-lg-6 col-md-6 col-sm-6">
                                <ul>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="circle-map">
                    <img src="/images/circle-map.png" alt="image" />
                </div>

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </footer>
        );
    }
}

export default Footer;