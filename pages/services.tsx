import React from 'react';
import Head from 'next/head'
import { NextPageContext } from 'next'
import Layout from "../components/Layouts";
import { RichText } from 'prismic-reactjs';
import { Client } from '../components/prismic';

export default function About(props) {
    console.log('props', props)
    const { pageData } = props;
  if (!pageData) { return <div> loading ....</div> }
  return (
    <Layout>
      <Head>
        <title>{RichText.asText(pageData.title)}</title>
      </Head>
      <section id="single-page-slider" className="no-margin">
        <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="item active">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="center gap fade-down section-heading">
                                    <h2 className="main-title">{RichText.asText(pageData.title)}</h2>
                                    <hr/>
                                    {/* <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p> */}
                                    {RichText.render(pageData.subtitle)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <div id="content-wrapper">
        <section id="services" className="white">
            <div className="container">
            <div className="gap"></div>
                <div className="row">
                    {pageData.services.map( (service, i) => {
                      return (
                      <>
                        { (i>0 && i%3 === 0) && (<div className="clearfix"></div>) }
                        <div className="col-md-4 col-sm-6">
                          <div className="service-block">
                              <div className="pull-left bounce-in">
                                  <i className={service.icon}></i>
                              </div>
                              <div className="media-body fade-up">
                                  <h3 className="media-heading">{RichText.asText(service.title1)}</h3>
                                  {RichText.render(service.detail)}
                              </div>
                          </div>
                      </div>
                    </>
                    )
                    })}
                </div>
                {/* <div className="gap"></div>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="service-block">
                            <div className="pull-left bounce-in">
                                <i className="fa fa-linux fa fa-md"></i>
                            </div>
                            <div className="media-body fade-up">
                                <h3 className="media-heading">Linux Development</h3>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="service-block">
                            <div className="pull-left bounce-in">
                                <i className="fa fa-dribbble fa fa-md"></i>
                            </div>
                            <div className="media-body fade-up">
                                <h3 className="media-heading">Graphic Design</h3>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="service-block">
                            <div className="pull-left bounce-in">
                                <i className="fa fa-google-plus fa fa-md"></i>
                            </div>
                            <div className="media-body fade-up">
                                <h3 className="media-heading">SEO Services</h3>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="gap"></div>
            <div className="row">
                <div className="col-md-12">
                    <div className="center gap fade-down section-heading">
                        <h2 className="main-title">Our Skills</h2>
                        <hr/>
                        <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="row">
                    <div className="col-md-3">
                        <div className="tile-progress tile-red bounce-in">
                            <div className="tile-header">
                                <h3>Video Editing</h3>
                                <span>Our cutting room floor is messy.</span>
                            </div>
                            <div className="tile-progressbar">
                                <span data-fill="65.5%" style={{width: '65.5%'}}></span>
                            </div>
                            <div className="tile-footer">
                                <h4>
                                    <span className="pct-counter counter">65.5</span>%
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="tile-progress tile-cyan bounce-in">
                            <div className="tile-header">
                                <h3>Marketing</h3>
                                <span>How well we can sell you and your brand.</span>
                            </div>
                            <div className="tile-progressbar">
                                <span data-fill="98.5%" style={{width: '98.5%'}}></span>
                            </div>
                            <div className="tile-footer">
                                <h4>
                                    <span className="pct-counter counter">98.5</span>%
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="tile-progress tile-primary bounce-in">
                            <div className="tile-header">
                                <h3>Web Development</h3>
                                <span>We love servers and stuff.</span>
                            </div>
                            <div className="tile-progressbar">
                                <span data-fill="90%" style={{width: '90%'}}></span>
                            </div>
                            <div className="tile-footer">
                                <h4>
                                    <span className="pct-counter counter">90</span>%
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="tile-progress tile-pink bounce-in">
                            <div className="tile-header">
                                <h3>Coffee</h3>
                                <span>We done make good joe, though.</span>
                            </div>
                            <div className="tile-progressbar">
                                <span data-fill="10%" style={{width: '10%'}}></span>
                            </div>
                            <div className="tile-footer">
                                <h4>
                                    <span className="pct-counter counter">10</span>%
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gap"></div>
            </div>
        </section>
    </div>
    </Layout>
  )
}
export async function getServerSideProps(context: NextPageContext) {
  const response = await Client().getSingle('services');
  return {
    props: { pageData: response.data }, // will be passed to the page component as props
  }
}
