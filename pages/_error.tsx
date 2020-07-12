import React from 'react'
import Link from 'next/link';
// import { Link } from '../routes'

export default class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render404() {
        return (
            <section id="main-slider" className="no-margin">
                <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="carousel-content center centered">
                                            <span className="home-icon pe-7s-gleam bounce-in"></span>
                                            <h2 className="boxed animation animated-item-1 fade-down">UH OH, A 404
                                                ERROR</h2>
                                            <p className="boxed animation animated-item-2 fade-up">The Page you are
                                                looking for doesn't exist or an other error occurred. Head home to
                                                try again.</p>
                                            <br />
                                                <Link href='/'><a className="btn btn-md animation bounce-in">Back to the homepage</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    render500() {
        return (
            <section className="container">
                <h1>Oh no!</h1>
                <h3>Something went wrong. Please contact the support.</h3>
            </section>
        )
    }

    renderDefault() {
        return (
            <section id="main-slider" className="no-margin">
                <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="carousel-content center centered">
                                            <span className="home-icon pe-7s-gleam bounce-in"></span>
                                            <h2 className="boxed animation animated-item-1 fade-down">UH OH, A 404
                                                ERROR</h2>
                                            <p className="boxed animation animated-item-2 fade-up">The Page you are
                                                looking for doesn't exist or an other error occurred. Head home to
                                                try again.</p>
                                            <br />
                                            <Link href='/'><a className="btn btn-md animation bounce-in">Back to the homepage</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    render() {
        /*if(this.props.statusCode == 404) return this.render404()
        else if(this.props.statusCode >= 500 && this.props.statusCode <= 599) return render500()
        else return this.renderDefault()*/
        return this.renderDefault()
    }
}
