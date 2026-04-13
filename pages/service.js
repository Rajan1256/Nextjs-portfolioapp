import Head from 'next/head'
//import '../styles/css/font-awesome.min.css'
import Image from 'next/image'

import { Navbar } from '../component/Navbar'
import { Footer } from '../component/Footer'

export default function service() {
    return (
        <>
            <Navbar />

            <section className="banner_area">
                <div className="box_1620">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="container">
                            <div className="banner_content text-center">
                                <h2>Service</h2>
                                <div className="page_link">
                                    <a href="index.html">Home</a>
                                    <a href="about-us.html">Service</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature_area white_feature p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>offerings to my clients</h2>
                        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                    </div>
                    <div className="feature_inner row">
                        <div className="col-lg-4 col-md-6">
                            <div className="feature_item">
                                <i className="flaticon-city"></i>
                                <h4>Architecture</h4>
                                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature_item">
                                <i className="flaticon-skyline"></i>
                                <h4>Interior Design</h4>
                                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature_item">
                                <i className="flaticon-sketch"></i>
                                <h4>Concept Design</h4>
                                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature_item">
                                <i className="flaticon-city"></i>
                                <h4>Architecture</h4>
                                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature_item">
                                <i className="flaticon-skyline"></i>
                                <h4>Interior Design</h4>
                                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature_item">
                                <i className="flaticon-sketch"></i>
                                <h4>Concept Design</h4>
                                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}
