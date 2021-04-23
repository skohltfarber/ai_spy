import React from 'react';
import { Helmet } from "react-helmet"
import HeaderNav from "../components/mainnav.js";
import Logo from "../images/logo.png";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

export default function Default({ children }) {

    return (
        <>
            <div className="application">
                <Helmet>
                    <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta id="MetaDescription" name="DESCRIPTION" content="AI Spy: Ask a computer to share what is in an object." />
                    <title>AI Spy</title>

                    <meta id="MetaKeywords" name="KEYWORDS" content="AI Spy" />
                    <meta name="robots" content="index, follow" />

                    <meta property="og:title" content="AI Spy" />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:description" content="AI Spy: Ask a computer to share what is in an object." />
                    <meta property="og:type" content="website" />
                </Helmet>
            </div>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="animate__animated animate__lightSpeedInLeft">
                                <div className="d-sm-inline-flex">
                                    <img className="logo" src={Logo} alt="Logo" />
                                    <h1>AI Spy</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <HeaderNav />
                        </div>
                    </div>
                </div>
                <hr></hr>
            </header>

            <div className="container">
                {children}
            </div>
            <footer>
                <hr></hr>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <small>&copy; Copyright 2020, Kohltfarber Corporation</small>
                        </div>
                        <div className="col-sm-6">
                            <HeaderNav />
                        </div>
                        <div className="col-sm-2">
                            [social icons]
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}