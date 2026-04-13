import Head from 'next/head'
//import '../styles/css/font-awesome.min.css'

import { Navbar } from '../component/Navbar'
import { Footer } from '../component/Footer'
export default function aboutus() {
    return (
        <>
            <Navbar />  
            
            <section className="banner_area">
                <div className="box_1620">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="container">
                            <div className="banner_content text-center">
                                <h2>About Us</h2>
                                <div className="page_link">
                                    <a href="index.html">Home</a>
                                    <a href="about-us.html">About Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        
            <section className="welcome_area p_120">
                <div className="container">
                    <div className="row welcome_inner">
                        <div className="col-lg-12">
                            <div className="welcome_text">
                                <h4>About Myself</h4>
                                <p>Thanks for visiting my profile. I have worked in IT development for 3+ years.
                                    My top skills are web and API development.</p>
                                <p>"Faster Speed + Loyal Quality + Save the Time = Success".</p>
                                <p>
                                    My aim is to give you a complete product for your requirements.

                                    Main skills include -PHP, MySQL, jQuery, Ajax, Javascript, CodeIgniter(Framework), Laravel(Framework), Android, Vue JS, Asp.net, Vb.net, Stripe API(Payment Gateway), Google API, Facebook API. - Responsive Front-end Development using HTML5 / CSS3 / Bootstrap4 /jQuery.
                                    I will make a complete product by your deadline.

                                    Thanks.</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="wel_item">
                                            <i className="lnr lnr-database"></i>
                                            <h4>$1</h4>
                                            <p>Total Donation</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="wel_item">
                                            <i className="lnr lnr-book"></i>
                                            <h4>14</h4>
                                            <p>Total Projects</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="wel_item">
                                            <i className="lnr lnr-users"></i>
                                            <h4>20</h4>
                                            <p>Total Volunteers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
            <Footer />
        </>
    )
}
