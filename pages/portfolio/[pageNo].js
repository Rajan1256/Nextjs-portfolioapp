import { Navbar } from '../../component/Navbar'
import { Footer } from '../../component/Footer'
import Link from 'next/link'
import Image from 'next/image'
// get the id first using params of getStaticPath method
export const getStaticPaths = async () => {
  const res = await fetch("https://q3hwxssz.directus.app/items/blogs");
  const data = await res.json();

  const paths = data.data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};



export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://q3hwxssz.directus.app/items/blogs/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};


export const pageNo = ({ data }) => {
  return (
    <>
      <Navbar />

      <section class="banner_area">
        <div class="box_1620">
          <div class="banner_inner d-flex align-items-center">
            <div class="container">
              <div class="banner_content text-center">
                <h2>Blog Details</h2>
                <div class="page_link">
                  <Link href="/">Home</Link>
                  <Link href="/portfolio">Blog</Link>
                  <Link href="#">Blog Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="blog_area single-post-area p_120">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 posts-list">
              <div class="single-post row">
                <div class="col-lg-12">
                  <div class="feature-img">
                    <Image class="img-fluid" src={`https://q3hwxssz.directus.app/assets/${data.data.blog_image}`} height="450" width="950"/>
                  </div>
                </div>
                <div class="col-lg-3  col-md-3">
                  <div class="blog_info text-right">
                    {/* <div class="post_tag">
                      <a href="#">Food,</a>
                      <a class="active" href="#">Technology,</a>
                      <a href="#">Politics,</a>
                      <a href="#">Lifestyle</a>
                    </div> */}
                    <ul class="blog_meta list">
                      <li><a href="#">Mark wiens<i class="lnr lnr-user"></i></a></li>
                      <li><a href="#">12 Dec, 2017<i class="lnr lnr-calendar-full"></i></a></li>
                      {/* <li><a href="#">1.2M Views<i class="lnr lnr-eye"></i></a></li>
                      <li><a href="#">06 Comments<i class="lnr lnr-bubble"></i></a></li> */}
                    </ul>
                    <ul class="social-links">
                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fa fa-github"></i></a></li>
                      <li><a href="#"><i class="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9 blog_details">
                  <h2>Astronomy Binoculars A Great Alternative</h2>
                  <p class="excert">
                  {data.data.description}
                  </p>
                </div>
                {/* <div class="col-lg-12">
                  <div class="quotes">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}
export default pageNo;
