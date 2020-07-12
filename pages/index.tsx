import React from 'react';
import Head from 'next/head'
import { RichText } from 'prismic-reactjs';
import { Client } from '../components/prismic';
import Carousel from 'react-bootstrap/lib/Carousel';
import {NextPageContext} from "next";

export default function Home(props) {
  const { pageData } = props;
  if (!pageData) { return <div> loading ....</div> }

  const testimonialImageStyle = {
    width: '100px',
    height:'100px',
  }

  return (
      <>
        <Head>
          <title>{RichText.asText(pageData.title)}</title>
        </Head>
        <section id="main-slider" className="no-margin">
          <Carousel>
            <Carousel.Item>
              <img alt="900x500" src="/assets/images/slide_bg.jpg" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="900x500" src="/assets/images/slide_bg2.jpg" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="900x500" src="/assets/images/managed-services-banner.jpg" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        <div id="content-wrapper">
          {/*<section id="single-quote" className="divider-section">
            <div className="container">
              <div className="gap"></div>
              <div className="row">
                <div className='col-md-offset-2 col-md-8 fade-up'>
                  <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                    <div className="carousel-inner">
                      <div className="item active">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-3 text-center">
                              <img className="img-responsive" src="images/team/team01.jpg"
                                   style={testimonialImageStyle} />
                            </div>
                            <div className="col-sm-9">
                              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit!</p>
                              <small>Someone famous</small>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap"></div>
            </div>
          </section>*/}

          <section id="about-us" className="white">
            <div className="container">
              <div className="gap"></div>
              <div className="row">
                <div className="col-md-12">
                  <div className="center gap fade-down section-heading">
                    <h2 className="main-title">A Little About Us</h2>
                    <hr />
                      <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 col-md-offset-1 fade-up">
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                    elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                    sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                    Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
                    dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                    fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam
                    massa nisl quis neque. Suspendisse in orci enim.</p>

                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                    elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                    sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                    Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
                    dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                    fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam
                    massa nisl quis neque. Suspendisse in orci enim.</p>
                </div>
                <div className="col-md-4 fade-up">

                </div>
              </div>
              <div className="gap"></div>
              <div className="row fade-up">
                <div className="col-md-6">
                  <div className="testimonial-list-item">
                    <img className="pull-left img-responsive quote-author-list" src="images/team/team01.jpg" />
                      <blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <small>Manager at <cite title="Source Title">Company</cite></small>
                      </blockquote>
                  </div>
                  <div className="testimonial-list-item">
                    <img className="pull-left img-responsive quote-author-list" src="images/team/team01.jpg" />
                      <blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <small>Manager at <cite title="Source Title">Company</cite></small>
                      </blockquote>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial-list-item">
                    <img className="pull-left img-responsive quote-author-list" src="images/team/team01.jpg" />
                      <blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <small>Manager at <cite title="Source Title">Company</cite></small>
                      </blockquote>
                  </div>
                  <div className="testimonial-list-item">
                    <img className="pull-left img-responsive quote-author-list" src="images/team/team01.jpg" />
                      <blockquote>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <small>Manager at <cite title="Source Title">Company</cite></small>
                      </blockquote>
                  </div>
                </div>
              </div>

              <div className="gap"></div>
              <div className="center gap fade-down section-heading">
                <h2 className="main-title">Meet The Team</h2>
                <hr />
                  <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>
              </div>
              <div className="gap"></div>
              <div className="gap"></div>
            </div>
          </section>

          <section id="stats" className="divider-section">
            <div className="gap"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-xs-6">
                  <div className="center bounce-in">
                    <span className="stat-icon"><span className="pe-7s-timer bounce-in"></span></span>
                    <h1><span className="counter">246000</span></h1>
                    <h3>HOURS SAVED</h3>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="center bounce-in">
                    <span className="stat-icon"><span className="pe-7s-light bounce-in"></span></span>
                    <h1><span className="counter">16875</span></h1>
                    <h3>FRESH IDEAS</h3>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="center bounce-in">
                    <span className="stat-icon"><span className="pe-7s-graph1 bounce-in"></span></span>
                    <h1><span className="counter">99999999</span></h1>
                    <h3>HUGE PROFIT</h3>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="center bounce-in">
                    <span className="stat-icon"><span className="pe-7s-box2 bounce-in"></span></span>
                    <h1><span className="counter">54875</span></h1>
                    <h3>THINGS IN BOXES</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="gap"></div>
          </section>

          <section id="testimonial-carousel" className="divider-section">
            <div className="gap"></div>
            <div className="container">
              <div className="row">
                <div className="center gap fade-down section-heading">
                  <h2 className="main-title">What They Have Been Saying</h2>
                  <hr />
                    <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>
                    <div className="gap"></div>
                </div>
                <div className='col-md-offset-2 col-md-8 fade-up'>
                  <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#quote-carousel" data-slide-to="0" className="active"></li>
                      <li data-target="#quote-carousel" data-slide-to="1"></li>
                      <li data-target="#quote-carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="item active">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-3 text-center">
                              <img className="img-responsive" src="images/team/team01.jpg" style={testimonialImageStyle} />
                            </div>
                            <div className="col-sm-9">
                              <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit!</p>
                              <small>Someone famous</small>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      <div className="item">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-3 text-center">
                              <img className="img-responsive" src="images/team/team02.jpg"
                                   style={testimonialImageStyle} />
                            </div>
                            <div className="col-sm-9">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nec lacus ut
                                tempor. Mauris.</p>
                              <small>Someone famous</small>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      <div className="item">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-3 text-center">
                              <img className="img-responsive" src="images/team/team03.jpg"
                                   style={testimonialImageStyle} />
                            </div>
                            <div className="col-sm-9">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu
                                blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium
                                mauris.</p>
                              <small>Someone famous</small>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap"></div>
            </div>
          </section>

          <section id="pricing" className="white">
            <div className="container">
              <div className="center gap fade-down section-heading">
                <h2 className="main-title">So, How Much?</h2>
                <hr />
                  <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>
              </div>
              <div className="gap"></div>
              <div id="pricing-table" className="row">
                <div className="col-md-3 col-xs-6 flip-in">
                  <ul className="plan plan1">
                    <li className="plan-name">
                      <h3>Basic</h3>
                    </li>
                    <li className="plan-price">
                      <div>
                        <span className="price"><sup>$</sup>10</span>
                        <small>month</small>
                      </div>
                    </li>
                    <li>
                      <strong>5GB</strong> Storage
                    </li>
                    <li>
                      <strong>1GB</strong> RAM
                    </li>
                    <li>
                      <strong>400GB</strong> Bandwidth
                    </li>
                    <li>
                      <strong>10</strong> Email Address
                    </li>
                    <li>
                      <strong>Forum</strong> Support
                    </li>
                    <li className="plan-action">
                      <a href="#" className="btn btn-outlined btn-primary btn-md btn-white">Signup</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-xs-6 flip-in">
                  <ul className="plan plan2 featured">
                    <li className="plan-name">
                      <h3>Standard</h3>
                    </li>
                    <li className="plan-price">
                      <div>
                        <span className="price"><sup>$</sup>20</span>
                        <small>month</small>
                      </div>
                    </li>
                    <li>
                      <strong>5GB</strong> Storage
                    </li>
                    <li>
                      <strong>1GB</strong> RAM
                    </li>
                    <li>
                      <strong>400GB</strong> Bandwidth
                    </li>
                    <li>
                      <strong>10</strong> Email Address
                    </li>
                    <li>
                      <strong>Forum</strong> Support
                    </li>
                    <li className="plan-action">
                      <a href="#" className="btn btn-outlined btn-primary btn-md">Signup</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-xs-6 flip-in">
                  <ul className="plan plan3">
                    <li className="plan-name">
                      <h3>Advanced</h3>
                    </li>
                    <li className="plan-price">
                      <div>
                        <span className="price"><sup>$</sup>40</span>
                        <small>month</small>
                      </div>
                    </li>
                    <li>
                      <strong>50GB</strong> Storage
                    </li>
                    <li>
                      <strong>8GB</strong> RAM
                    </li>
                    <li>
                      <strong>1024GB</strong> Bandwidth
                    </li>
                    <li>
                      <strong>Unlimited</strong> Email Address
                    </li>
                    <li>
                      <strong>Forum</strong> Support
                    </li>
                    <li className="plan-action">
                      <a href="#" className="btn btn-outlined btn-primary btn-md btn-white">Signup</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-xs-6 flip-in">
                  <ul className="plan plan4">
                    <li className="plan-name">
                      <h3>Mighty</h3>
                    </li>
                    <li className="plan-price">
                      <div>
                        <span className="price"><sup>$</sup>100</span>
                        <small>month</small>
                      </div>
                    </li>
                    <li>
                      <strong>50GB</strong> Storage
                    </li>
                    <li>
                      <strong>8GB</strong> RAM
                    </li>
                    <li>
                      <strong>1024GB</strong> Bandwidth
                    </li>
                    <li>
                      <strong>Unlimited</strong> Email Address
                    </li>
                    <li>
                      <strong>Forum</strong> Support
                    </li>
                    <li className="plan-action">
                      <a href="#" className="btn btn-outlined btn-primary btn-md btn-white">Signup</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="gap"></div>
            </div>
          </section>

          {/*<div id="mapwrapper">
            <div id="map"></div>
          </div>*/}


        </div>
      </>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const response = await Client().getSingle('services');
  return {
    props: { pageData: response.data }, // will be passed to the page component as props
  }
}
