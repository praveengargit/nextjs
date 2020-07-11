import React from 'react';
import Head from 'next/head'
import { NextPageContext } from 'next'
import Layout from "../components/Layouts";
import { RichText } from 'prismic-reactjs';
import { Client } from '../components/prismic';

export default function About({ pageData }) {
  if (!pageData) { return <div> loading ....</div> }
  return (
    <Layout>
      <Head>
        <title>{RichText.asText(pageData.about_us)}</title>
      </Head>

      <section id="single-page-slider" className="no-margin">
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="center gap fade-down section-heading">
                      {/* <h2 className="main-title"> */}
                      <RichText
                          render={pageData.about_us}
                      />
                      {/* </h2> */}
                      <hr />
                      <p>Of an or game gate west face shed. ﻿no great but music too old found arose.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="content-wrapper">
        <section id="about-us" className="white">
          <div className="container">
            <div className="gap"></div>
            <div className="row">
              <div className="col-md-12 fade-up">
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>

                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
              </div>
              <div className="col-md-4 fade-up">

              </div>
            </div>
            <div className="gap"></div>
            <div className="row fade-up">
              <div className="col-md-6">
                <div className="testimonial-list-item">
                  <img className="pull-left img-responsive quote-author-list" src="http://placehold.it/400x400" />
                  <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <small>Manager at <cite title="Source Title">Company</cite></small>
                  </blockquote>
                </div>
                <div className="testimonial-list-item">
                  <img className="pull-left img-responsive quote-author-list" src="http://placehold.it/400x400" />
                  <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <small>Manager at <cite title="Source Title">Company</cite></small>
                  </blockquote>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-list-item">
                  <img className="pull-left img-responsive quote-author-list" src="http://placehold.it/400x400" />
                  <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <small>Manager at <cite title="Source Title">Company</cite></small>
                  </blockquote>
                </div>
                <div className="testimonial-list-item">
                  <img className="pull-left img-responsive quote-author-list" src="http://placehold.it/400x400" />
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

            <div id="meet-the-team" className="row">
              <div className="col-md-3 col-xs-6">
                <div className="center team-member">
                  <img className="img-responsive img-thumbnail bounce-in" src="http://placehold.it/400x400" alt="" />
                  <div className="team-content fade-up">
                    <h5>Daniel Jones<small className="role muted">Web Design</small></h5>
                    <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>
                    <a className="btn btn-social btn-facebook" href="#"><i className="fa fa-facebook"></i></a> <a className="btn btn-social btn-google-plus" href="#"><i className="fa fa-google-plus"></i></a> <a className="btn btn-social btn-twitter" href="#"><i className="fa fa-twitter"></i></a> <a className="btn btn-social btn-linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="center team-member">
                  <img className="img-responsive img-thumbnail bounce-in" src="http://placehold.it/400x400" alt="" />
                  <div className="team-content fade-up">
                    <h5>John Smith<small className="role muted">Marketing Director</small></h5>
                    <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>
                    <a className="btn btn-social btn-facebook" href="#"><i className="fa fa-facebook"></i></a> <a className="btn btn-social btn-google-plus" href="#"><i className="fa fa-google-plus"></i></a> <a className="btn btn-social btn-twitter" href="#"><i className="fa fa-twitter"></i></a> <a className="btn btn-social btn-linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="center team-member">
                  <img className="img-responsive img-thumbnail bounce-in" src="http://placehold.it/400x400" alt="" />
                  <div className="team-content fade-up">
                    <h5>Dave Gorman<small className="role muted">Web Design</small></h5>
                    <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>
                    <a className="btn btn-social btn-facebook" href="#"><i className="fa fa-facebook"></i></a> <a className="btn btn-social btn-google-plus" href="#"><i className="fa fa-google-plus"></i></a> <a className="btn btn-social btn-twitter" href="#"><i className="fa fa-twitter"></i></a> <a className="btn btn-social btn-linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="center team-member">
                  <img className="img-responsive img-thumbnail bounce-in" src="http://placehold.it/400x400" alt="" />
                  <div className="team-content fade-up">
                    <h5>Steve Smith<small className="role muted">Sales Assistant</small></h5>
                    <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.</p>
                    <a className="btn btn-social btn-facebook" href="#"><i className="fa fa-facebook"></i></a> <a className="btn btn-social btn-google-plus" href="#"><i className="fa fa-google-plus"></i></a> <a className="btn btn-social btn-twitter" href="#"><i className="fa fa-twitter"></i></a> <a className="btn btn-social btn-linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="gap"></div>
            <div className="gap"></div>
          </div>
        </section>
      </div>

    </Layout>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const response = await Client().getSingle('aboutus');
  return {
    props: { pageData: response.data }, // will be passed to the page component as props
  }
}
