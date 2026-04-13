import Head from 'next/head'
import Image from 'next/image'
import profileimage from '../public/img/personal.jpg'
//import '../styles/css/font-awesome.min.css'
import Script from 'next/script';
import { Navbar } from '../component/Navbar'
import { Footer } from '../component/Footer'
export default function Home() {
  return (
    <>
    
      <Navbar/>
      <section className="home_banner_area">
        <div className="container box_1620">
          <div className="banner_inner d-flex align-items-center">
            <div className="banner_content">
              <div className="media">
                <div className="d-flex">
                  <Image src={profileimage} alt=""/>
                </div>
                <div className="media-body">
                  <div className="personal_text">
                    <h6>Hello Everybody, i am</h6>
                    <h3>Rajan Ghariya</h3>
                    <h4>Senior Full-Stack Developer</h4>
                    <p>Over the last 3+ years, I worked as a senior full-stack developer and experienced in all stages of the development cycle for variant types of web services and projects.
                      I have extensive experience working both alone and as part of a team on often time-sensitive, challenging web development projects that require outstanding creative and technical capabilities and the ability to ensure all work is optimized across a wide range of platforms.</p>
                    <ul className="list basic_info">
                      <li><a href="#"><i className="lnr lnr-calendar-full"></i> 1st March, 1994</a></li>
                      <li><a href="#"><i className="lnr lnr-phone-handset"></i>+917285898514</a></li>
                      <li><a href="#"><i className="lnr lnr-envelope"></i>rajanghariya12@gmail.com</a></li>
                      <li><a href="#"><i className="lnr lnr-home"></i> surat gujarat india</a></li>
                    </ul>
                    <ul className="list personal_social">
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
