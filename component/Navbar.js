import Link from 'next/link'
import Image from 'next/image'
import logoimage from '../public/img/logo.png'
export const Navbar = () => {
  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container box_1620">

            <Link className="navbar-brand logo_h" href="/"><Image src={logoimage} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item active"><Link className="nav-link" href="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" href="/aboutus">About</Link></li>
                <li className="nav-item"><Link className="nav-link" href="/service">Service</Link></li>
                <li className="nav-item"><Link className="nav-link" href="/portfolio">Portfolio</Link></li>
                {/* <li className="nav-item"><Link className="nav-link" href="/contactus">Contact</Link></li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
