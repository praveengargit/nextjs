import React from 'react';
import Head from 'next/head'
import { NextPageContext } from 'next'
import { RichText } from 'prismic-reactjs';
import { Client } from '../components/prismic';

export default function ContactUs(props) {
    const { pageData } = props;
    console.log('pageData', pageData)
    if (!pageData) { return <div> loading ....</div> }
    return (
        <>
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
                                            <hr />
                                            <p>{pageData.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="content-wrapper">
                {/*<div id="mapwrapper">
                    <div id="map"></div>
                </div>*/}
                <section id="contact" className="white">
                    <div className="container">
                        <div className="gap"></div>
                        <div className="row">
                            <div className="col-md-4 fade-up">
                                <h3>Contact Information</h3>
                                {RichText.render(pageData.contactinfo)}
                            </div>

                            <div className="col-md-8 fade-up">
                                <h3>Drop Us A Message</h3>
                                <br />
                                <br />
                                <div id="message"></div>
                                <form method="post" action="javascript:void(0)" id="contactform">
                                    <input required type="text" name="name" id="name" placeholder="Name"/>
                                    <input required type="email" name="email" id="email" placeholder="Email"/>
                                    <input required type="url" name="website" id="website" placeholder="Website"/>
                                    <textarea required name="comments" id="comments" placeholder="Comments"></textarea>
                                    <input className="btn btn-outlined btn-primary" type="submit" name="submit" value="Submit"/>
                                </form>
                            </div>
                        </div>
                        <div className="gap"></div>
                    </div>
                </section>
            </div>
        </>
    )
}

export async function getServerSideProps(context: NextPageContext) {
    const response = await Client().getSingle('contactus');
    return {
        props: { pageData: response.data }, // will be passed to the page component as props
    }
}
