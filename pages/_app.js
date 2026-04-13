import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/vendors/linericon/style.css"
import '../styles/vendors/lightbox/simpleLightbox.css'
import '../styles/css/font-awsome.css'
import '../styles/vendors/nice-select/css/nice-select.css'
import '../styles/vendors/animate-css/animate.css'
import '../styles/vendors/popup/magnific-popup.css'
import '../styles/vendors/flaticon/flaticon.css'

import '../styles/css/style.css'
import '../styles/css/responsive.css'
import { useEffect } from "react";
import $ from 'jquery'
function MyApp({ Component, pageProps }) {
 
  useEffect(() => {
  
    require("../styles/js/popper.js");
    // require("../styles/js/jquery-3.3.1.min.js");
    require("jquery/dist/jquery.js");
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("../styles/js/jquery.ajaxchimp.min.js")
    require("../styles/vendors/nice-select/js/jquery.nice-select.js");
    require("../styles/vendors/isotope/imagesloaded.pkgd.min.js");
    require("../styles/vendors/isotope/isotope.pkgd.min.js");
    require("../styles/vendors/lightbox/simpleLightbox.min.js");
    // require("../styles/vendors/owl-carousel/owl.carousel.min.js");
    // require("../styles/vendors/popup/jquery.magnific-popup.min.js");
    // require("../styles/vendors/counter-up/jquery.waypoints.min.js");
    // require("../styles/vendors/counter-up/jquery.counterup.min.js");
    require("../styles/js/theme.js");
    
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
