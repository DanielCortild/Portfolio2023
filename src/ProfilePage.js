import React from 'react';
import {Button, Col, Container, Row} from 'reactstrap';
import {Link} from 'react-scroll';

import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import Project from 'components/Project';

const ProfilePage = () => (<>
    <Header/>
    <div className="wrapper">
      <div
        className="section"
        style={{
          background: 'linear-gradient(#3b0000, #555)', paddingBottom: 0,
        }}
      >
        <Container>
          <Row>
            <div className="profile-picture" style={{marginTop: '-280px'}}>
              <div
                className="fileinput fileinput-new"
                data-provides="fileinput"
              >
                <div
                  className="fileinput-new img-no-padding"
                  style={{width: '200px', height: '200px'}}
                >
                  <img
                    className="w-100 h-100"
                    alt="..."
                    src={require('assets/img/faces/daniel-cortild.jpeg').default}
                  />
                </div>
                <div className="name">
                  <h3 className="title text-center mb-0 text-white">
                    <b>
                      Daniel Cortild <br/>
                      {/*<small>Web Developper</small>*/}
                    </b>
                  </h3>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <Col
              className="ml-auto mr-auto mt-4 text-center text-white"
              md="10"
            >
              <p>
                <b>
                  Welcome to my website! As a master student in mathematics, I have a passion for exploring and
                  sharing the beauty of this field. Here you will find a collection of my publications and projects within
                  mathematics, which I hope will inspire and enrich your own explorations.
                </b>
              </p>
              <Row className="mb-2 mt-3 py-4">
                <Col>
                  <Link to="contact-us" smooth={true} duration={1000}>
                    <Button className="btn-round">
                      <i className="fa fa-envelope mr-2"/>
                      Get in Touch
                    </Button>
                  </Link>
                  <Button
                    className="btn-just-icon mx-2"
                    color="linkedin"
                    href="https://www.linkedin.com/in/daniel-cortild/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"/>
                  </Button>
                  <Button
                    className="btn-just-icon mx-2"
                    color="github"
                    href="https://github.com/DanielCortild"
                    target="_blank"
                  >
                    <i className="fa fa-github-alt"/>
                  </Button>
                  <Button
                    className="btn-just-icon mx-2"
                    color="rgb(30, 48, 80)"
                    href="https://www.researchgate.net/profile/Daniel-Cortild-2"
                    target="_blank"
                  >
                    <i className="fa-brands fa-researchgate"></i>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <br/>
        </Container>
      </div>
      <Project/>
    </div>
    <Footer/>
  </>);

export default ProfilePage;