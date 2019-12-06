
import React, { Component } from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container, Row, Col, Media } from "react-bootstrap"
import image3 from '../images/bg-BeingAI-p.jpg'
// import $ from "jquery";
// import image4 from '../images/img_avatar.png'
// import "./aiqrateteam.css"
// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"


class BeingPositive extends Component {
    render() {

        return (

            <div>
                <Layout location={this.props.location}>
                    <img src={image3} alt="no image" style={{ height: "300px", width: "100%" }} />
                    <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
                        <p className="text-white" ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/About-Us" style={{ color: "white" }}>&nbsp;About Us /</Link></p><p><Link to="/" style={{ color: "white" }}>&nbsp; Being AI +Ve</Link></p>
                    </div>
                    <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}> Being AI +Ve</h2>
                    <Container>
                        <Row>
                            <Col md={8}>
                                <p>
                                    Our world still faces pressing systemic challenges that affect humanity at a large scale.  From our <strong>complex and
                                labyrinthine legal systems, traffic congestions, water scarcity, pollution and sanitation to the </strong>
                                    <strong>inefficiencies in our healthcare sector, large-scale problems still abound.</strong> The need of the hour is to better
                                    connect the people with basic facilities they require. AI may not be panacea in and of itself, but there it offers a
                                    huge potential to improve the quality of life of people across the globe. Thankfully, today multiple nations have
                                the intellectual capital – our peers in the<strong>AI domains</strong>  – that can bring substantial dividend for the population
                                                    at large.
                            </p>
                                <p>
                                    At AIQRATE, our attempt will be to touch upon how AI can be used to address large, complex and unsolved
                            problems and contribute to improving the<strong>quality of life of humanity</strong> and enable the<strong>Positive Use of AI</strong> for all.
                                                                    Being AI +ve is the way to go.
                            </p>
                                <p>Reach out to us with your suggestions and inputs at&nbsp;<a href="" style={{ color: "blue" }}>consult@aiqrate.ai.</a></p>
                            </Col>
                            <Col md={4}>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search this blog"
                                        style={{
                                            height: "54px"
                                        }}
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-secondary" type="button">
                                            Search
                                    </button>
                                    </div>
                                </div>
                                <h5 className="mt-5">AIQRATIONS</h5>
                                <hr></hr>
                                <Media>
                                    <img src={image3} alt="no image" style={{ height: "120px", width: "40%" }} />
                                    <Media.Body>
                                        <p className="ml-2">
                                            AI And Societal Impact – Addressing Large, Complex Unresolved Problems With AI
                                        </p>
                                        <Link class="moreless-button ml-2" to="/" style={{ color: "blue" }}>Read more >></Link>
                                    </Media.Body>
                                </Media>
                                <Media>
                                    <img src={image3} alt="no image" style={{ height: "120px", width: "40%" }} />
                                    <Media.Body>
                                        <p className="ml-2">
                                            Detecting depression early with AI
                                        </p>
                                        <Link class="moreless-button ml-2" to="/" style={{ color: "blue" }}>Read more >></Link>
                                    </Media.Body>
                                </Media>
                                <Media>
                                    <img src={image3} alt="no image" style={{ height: "120px", width: "40%" }} />
                                    <Media.Body>
                                        <p className="ml-2">
                                            3 Ways To Human Centric AI
                                        </p>
                                        <Link class="moreless-button ml-2" to="/" style={{ color: "blue" }}>Read more >></Link>
                                    </Media.Body>
                                </Media>
                                <Media>
                                    <img src={image3} alt="no image" style={{ height: "120px", width: "40%" }} />
                                    <Media.Body>
                                        <p className="ml-2">
                                            Autism care with AI
                                        </p>
                                        <Link class="moreless-button ml-2" to="/" style={{ color: "blue" }}>Read more >></Link>
                                    </Media.Body>
                                </Media>
                                <Media>
                                    <img src={image3} alt="no image" style={{ height: "120px", width: "40%" }} />
                                    <Media.Body>
                                        <p className="ml-2">
                                            AI & Humanity – Existential Threat or Co-exist Attainability?
                                        </p>
                                        <Link class="moreless-button ml-2" to="/" style={{ color: "blue" }}>Read more >></Link>
                                    </Media.Body>
                                </Media>
                            </Col>
                        </Row>
                    </Container>
                </Layout>
            </div>
        )
    }
}
export default BeingPositive