import Link from 'next/link'

const Header = () => {
  return (
    <header className="navbar navbar-inverse navbar-fixed-top opaqued" role="banner">
      {/* <div id="search-wrapper">
        <div className="container">
          <input id="search-box" placeholder="Search" />
        </div>
      </div> */}
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <i className="fa fa-bars"></i>
          </button>
          <a className="navbar-brand" href="index.html"><h1><span className="pe-7s-gleam bounce-in"></span> IMPACT</h1></a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/about'><a>About Us</a></Link></li>
            <li><Link href='/services'><a>Services</a></Link></li>
            <li><Link href='/'><a>Portfolio</a></Link></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down"></i></a>
              <ul className="dropdown-menu">
                <li><a href="career.html">Career</a></li>
                <li><a href="blog-item.html">Blog Single</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="404.html">404</a></li>
                <li><a href="registration.html">Registration</a></li>
                <li className="divider"></li>
                <li><a href="privacy.html">Privacy Policy</a></li>
                <li><a href="terms.html">Terms of Use</a></li>
              </ul>
            </li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact-us.html">Contact</a></li>
            <li><span className="search-trigger"><i className="fa fa-search"></i></span></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
