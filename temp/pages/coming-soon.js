import React, { Component } from 'react';
import Link from 'next/link';

class ComingSoon extends Component {

    state = {
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    };

    commingSoonTime = () => {
        let endTime = new Date("April 15, 2022 00:01:00 PDT");
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        this.setState({
            days, hours, minutes, seconds
        });
    }

    componentDidMount(){
        this.myInterval = setInterval(() => { 
            this.commingSoonTime();
        }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.myInterval);
    };

    onSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="coming-soon-area">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="coming-soon-time">
                                <img src="/images/s3.jpg" alt="image" />

                                <div id="timer">
                                    <div id="days">{this.state.days} <span>Days</span></div>
                                    <div id="hours">{this.state.hours} <span>Hours</span></div>
                                    <div id="minutes">{this.state.minutes} <span>Minutes</span></div>
                                    <div id="seconds">{this.state.seconds} <span>Seconds</span></div>
                                </div>	
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="coming-soon-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="logo">
                                            <Link href="/">
                                                <a><img src="/images/black-logo.png" alt="logo" /></a>
                                            </Link>
                                        </div>
                                        
                                        <h3>Our Online LMS is coming soon!</h3>
                                        <h5>Check back to register for cello lessons With Jacqueline</h5>

                                        <Link href="/">
                                    <a className="btn btn-primary">Go To Home</a>
                                </Link>

                                        {/* <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                                            </div>

                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email Address" />
                                            </div>

                                            <button type="submit" className="btn btn-primary">Subscribe</button>

                                            <p></p>
                                        </form> */}

                                       {/*  <div className="social">
                                            <ul>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank" className="twitter">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li> 
                                                    <a href="https://www.youtube.com/" target="_blank" className="youtube">
                                                        <i className="fab fa-youtube"></i>
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a href="https://www.facebook.com/" target="_blank" className="facebook">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a href="https://www.linkedin.com/" target="_blank" className="linkedin">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a> 
                                                </li>
                                                <li> 
                                                    <a href="instagram.com" target="_blank" className="instagram">
                                                        <i className="fab fa-instagram"></i>
                                                    </a> 
                                                </li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComingSoon;
