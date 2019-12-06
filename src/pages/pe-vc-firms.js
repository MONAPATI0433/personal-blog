
    import React, { Component } from 'react'
    import Layout from "../components/layout"
    import { Link } from "gatsby"
    import { Container, Row, Card,Col } from "react-bootstrap"
    import image3 from '../images/bg-vcpe-p.jpg'
    import image4 from '../images/Update-file.png'

    // import Img from "gatsby-image"
    // import { useStaticQuery, graphql } from "gatsby"
    class PEVCFIRMS extends Component {
        render() {
            return (
                <div>
                    <Layout location={this.props.location}>
                        <img src={image3} style={{ height: "300px", width: "100%" }} />
                        <div className="d-flex" style={{ position: "relative", top: "-18.9rem", left: "75px", fontSize: "12px" }}>
                            <p className="text-white" ><Link to="/" style={{ color: "white" }}>Home&nbsp;</Link>/</p><p><Link to="/consulting" style={{ color: "white" }}>&nbsp;Consulting /</Link></p><p><Link to="/" style={{ color: "white" }}>&nbsp;Venture Capital & Private Equity Firms</Link></p>
                        </div>
                        <h2 className="text-white" style={{ position: "relative", top: "-16rem", left: "75px" }}>Venture Capital & Private Equity Firms</h2>
                        <Container style={{marginTop:"-70px"}}>
                            <Row>
                                {/* <Col md={10}> */}
                                <p>
                                    Venture Capital and Private Equity firms are feverishly focusing on making strategic investments in AI startups, niche
                                    and boutique firms. However, the AI startup ecosystem space is deficient in syndicated insights, topical AI trends and
                                    differentiated metrics based on which VC & PE firms can make informed investment decisions.
                                </p>
                                <p>
                                    Through our extensive M&A, fund raising, due diligence experience in the AI arena, AIQRATE provides
                                    consultative insights and services across the spectrum of the global AI market and regional players with deep
                                    competencies and unique differentiators
                                </p>
                                <p>AIQRATE Consulting offerings for VC & PE firms: </p>
                            <Col md={7}>
                            <Card className="mt-5 mb-5 mr-5">
                                    <Card.Body>
                                        <img src={image4} style={{width:"100%",height:"400px"}} />
                                    </Card.Body>
                                </Card>
                            </Col>
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
                        {/* <Container> */}
                                <div className="row text-white "  style={{height:"200px",}}>
                                <Col md={6} style={{backgroundColor:"#419D78"}}>
                                    <div className="mt-5">
                                <p className="ml-5"><Link to="/blog" style={{color:"white"}}>AIQRATIONS</Link></p>
                                <p className="ml-5">Look at what topics were presented at past Aiqrations</p>
                                </div>
                                </Col>
                                <Col md={6} style={{backgroundColor:"#2D3047"}}>
                                <div className="mt-5">
                                <p className="ml-5">ARTICLES</p>
                                <p className="ml-5">want to present at an upcoming aiqrate? Contact us.</p>
                                </div>
                                </Col>
                                </div>
                        {/* </Container> */}
                    </Layout>
                </div>
            )
        }
    }
    export default PEVCFIRMS