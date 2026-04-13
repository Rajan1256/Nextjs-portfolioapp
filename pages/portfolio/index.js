import Head from 'next/head'
//import '../styles/css/font-awesome.min.css'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../../component/Navbar'
import { Footer } from '../../component/Footer'

import Blog1 from '../../public/img/blog/main-blog/m-blog-1.jpg'


export const getStaticProps = async () => {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch("https://q3hwxssz.directus.app/items/blogs")
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}

function portfolio({ posts }) {
    return (
        <>
            <Navbar />

            <section className="banner_area">
                <div className="box_1620">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="container">
                            <div className="banner_content text-center">
                                <h2>Portfolio</h2>
                                <div className="page_link">
                                    <a href="index.html">Home</a>
                                    <a href="about-us.html">Portfolio</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog_area">
                <br /><br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog_left_sidebar">

                                {posts.data.reverse().map((row, idx) => (

                                    <article key={idx} className="row blog_item">
                                        <div className="col-md-3">
                                            <div className="blog_info text-right">
                                                {/* <div className="post_tag">
                                                    <a href="#">Food,</a>
                                                    <a className="active" href="#">Technology,</a>
                                                    <a href="#">Politics,</a>
                                                    <a href="#">Lifestyle</a>
                                                </div> */}
                                                <ul className="blog_meta list">
                                                
                                                    <li><Link href={`/portfolio/${row.id}`}>{row.bloger_name}<i className="lnr lnr-user"></i></Link></li>
                                                    <li><Link href={`/portfolio/${row.id}`}>{row.blog_date}<i className="lnr lnr-calendar-full"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="blog_post">
                                                <Image src={`https://q3hwxssz.directus.app/assets/${row.blog_image}`} alt={Blog1} width="955" height="480"/>
                                                <div className="blog_details">
                                                    <Link href={`portfolio/${row.id}`}><h2>{row.title}</h2></Link>
                                                    <p>{row.description}</p>
                                                    <Link href={`portfolio/${row.id}`} className="white_bg_btn">View More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                ))
                                }

                                <nav className="blog-pagination justify-content-center d-flex">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a href="#" className="page-link" aria-label="Previous">
                                                <span aria-hidden="true">
                                                    <span className="lnr lnr-chevron-left"></span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a href="#" className="page-link">01</a></li>
                                        <li className="page-item active"><a href="#" className="page-link">02</a></li>
                                        <li className="page-item"><a href="#" className="page-link">03</a></li>
                                        <li className="page-item"><a href="#" className="page-link">04</a></li>
                                        <li className="page-item"><a href="#" className="page-link">09</a></li>
                                        <li className="page-item">
                                            <a href="#" className="page-link" aria-label="Next">
                                                <span aria-hidden="true">
                                                    <span className="lnr lnr-chevron-right"></span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default portfolio;
