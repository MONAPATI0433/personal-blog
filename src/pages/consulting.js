
import React, { Component } from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container, Row, Card, Col } from "react-bootstrap"
import image3 from '../images/bg-consulting-p.jpg'
import image4 from '../images/consultancy1.jpg'

// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"
class CONSULTING extends Component {
    render() {
        return (
            <div>
                <Layout location={this.props.location}>
                    <img src={image3} style={{ height: "300px", width: "100%" }} />
                    <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
                        <p className="text-white" ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/About-Us" style={{ color: "white" }}>&nbsp;Consulting /</Link></p>
                    </div>
                    <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}>Consulting</h2>
                    <Container style={{ marginTop: "-70px" }}>
                        <Row>
                            {/* <Col md={10}> */}
                            <p>
                                Conceptualizing AI strategy intrinsic to the enterprise requires that everyone understands it, everybody wants it and is
                                bought into it. Although elements of AI strategy are available in the market, the hard work of bringing together the
                            interplay of business strategy, data, processes, technologies, business performance and outcomes requires<strong>bespoke,
                            artisanal approach of AI consulting</strong>  that the classic management consulting firms cannot offer.
                            </p>
                            <p>
                                AIQRATE consulting focus on seven business segments:<strong>Enterprises, GCCs, Startups, SMBs, VC/PE firms,
                                Academic institutions, Public Sector Institutions & Business Associations and 52 best in class consulting
                            offerings.</strong>  We bring deep and proven strategic and functional AI expertise, but are known for our<strong>holistic
                            perspective:</strong>  we capture value across boundaries and between the silos of any business segment. We have proven a
                                multiplier effect from optimizing the sum of the parts, not just the individual pieces. Experience our extensive
                            yet<strong>bespoke AI consulting offerings:</strong>
                            </p>
                            <p>AIQRATE consulting themes for Public Sector Institutions & Business Associations are:</p>
                            {/* </Col> */}
                            {/* <Col md={4}>
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
                                </Col> */}
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <Card className="mt-5 mb-5 mr-5" style={{ backgroundColor: "#f4f4f4" }}>
                                    <Card.Body>
                                        <img src={image4} style={{ width: "100%", height: "30%px" }} />
                                        <p className="text-center">Enterprises</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mt-5 mb-5 mr-5" style={{ backgroundColor: "#f4f4f4" }}>
                                    <Card.Body>
                                        <img src={image4} style={{ width: "100%", height: "30%px" }} />
                                        <p className="text-center">Global Capability Centres (GCCs)</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mt-5 mb-5 mr-5" style={{ backgroundColor: "#f4f4f4" }}>
                                    <Card.Body>
                                        <img src={image4} style={{ width: "100%", height: "30%px" }} />
                                        <p className="text-center">Startups</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <Card className="mt-5 mb-5 mr-5" style={{ backgroundColor: "#f4f4f4" }}>
                                    <Card.Body>
                                        <img src={image4} style={{ width: "100%", height: "30%px" }} />
                                        <Link to="/pe-vc-firms"><p className="text-center">
                                            Venture Capital & Private Equity Firms</p></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mt-5 mb-5 mr-5" style={{ backgroundColor: "#f4f4f4" }}>
                                    <Card.Body>
                                        <img src={image4} style={{ width: "100%", height: "30%px" }} />
                                        <Link to="/small-medium"><p className="text-center">
                                            Small & Medium sized Businesses (SMBs)</p></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mt-5 mb-5 mr-5" style={{ backgroundColor: "#f4f4f4" }}>
                                    <Card.Body>
                                        <img src={image4} style={{ width: "100%", height: "30%px" }} />
                                        <Link to="/academic-institutions"><p className="text-center">Academic Institutions</p></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <Card className="mt-5 mb-5" style={{ backgroundColor: "#f4f4f4" }}>
                                    <Card.Body>
                                        <img src={image4} style={{ width: "100%", height: "30%px" }} />
                                        <Link to="public-sector-iba"><p className="text-center">
                                            Public Sector Institutions & Business Associations</p></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Layout>
            </div>
        )
    }
}
export default CONSULTING