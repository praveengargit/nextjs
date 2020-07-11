const Footer = () => {

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div id="footer-wrapper">
      <section id="bottom" className="">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 about-us-widget">
              <h4>Global Coverage</h4>
              <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin.</p>
            </div>

            <div className="col-md-3 col-sm-6">
              <h4>Company</h4>
              <div>
                <ul className="arrow">
                  <li><a href="#">Company Overview</a></li>
                  <li><a href="#">Meet The Team</a></li>
                  <li><a href="#">Our Awesome Partners</a></li>
                  <li><a href="#">Our Services</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <h4>Latest Articles</h4>
              <div>
                <div className="media">
                  <div className="pull-left">
                    <img className="widget-img" src="http://placehold.it/800x600" alt="" />
                  </div>
                  <div className="media-body">
                    <span className="media-heading"><a href="#">Blog Post A</a></span>
                    <small className="muted">Posted 14 April 2014</small>
                  </div>
                </div>
                <div className="media">
                  <div className="pull-left">
                    <img className="widget-img" src="http://placehold.it/800x600" alt="" />
                  </div>
                  <div className="media-body">
                    <span className="media-heading"><a href="#">Blog Post B</a></span>
                    <small className="muted">Posted 14 April 2014</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <h4>Come See Us</h4>
              <address>
                <strong>Ace Towers</strong><br />
                New York Ave,<br />
                New York, 215648<br />
                <abbr title="Phone"><i className="fa fa-phone"></i></abbr> 546 840654 05
              </address>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              &copy; 2019 Your Site Name. All Rights Reserved. <a href="https://templatemag.com/bootstrap-templates/">Bootstrap templates</a> by TemplateMag.
                    </div>
            <div className="col-sm-4">
              <ul className="pull-right">
                <li>
                  <a id="gototop" onClick={() => scrollTop()} className="gototop" href="javascript:void(0)">
                    <i className="fa fa-chevron-up"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
