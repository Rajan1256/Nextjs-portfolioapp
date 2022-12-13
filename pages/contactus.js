import Head from 'next/head'
//import '../styles/css/font-awesome.min.css'
import Image from 'next/image'

import { Navbar } from '../component/Navbar'
import { Footer } from '../component/Footer'

export default function contact() {
    return (
        <>
            <Navbar />

            <section className="banner_area">
                <div className="box_1620">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="container">
                            <div className="banner_content text-center">
                                <h2>Contact Us</h2>
                                <div className="page_link">
                                    <a href="index.html">Home</a>
                                    <a href="about-us.html">Contact Us</a>
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
