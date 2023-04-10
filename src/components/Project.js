/*eslint-disable*/
import React from 'react';

// reactstrap components
import {Card, CardBody, CardImg, CardTitle, Col, Container, Row,} from 'reactstrap';

const jobs = [
  {
    title: 'ILPlatform',
    type: 'Landing Page',
    description:
      'ILPlatform is an innovative programming school located in Brussels, teaching children and teenagers the world of tomorrow. The website is built with React on the Firebase backend.',
    img: 'ILPlatform_Website.png',
    website: 'https://www.ilplatform.be',
  },
  {
    title: 'SNB-Belgium',
    type: 'E-Commerce',
    description:
      'SNB-Belgium is a nail product reseller in Belgium. I built their website using the Shopify backend service.',
    img: 'SNB_Website.png',
    website: 'https://www.snb-belgium.be',
  },
  {
    title: 'EDIfly',
    type: 'Landing Page',
    description:
      'EDIfly is a luxembourgish air-communication company. I built their landing page using React on the front-end and Roby on Rails on the back-end.',
    img: 'EDIfly_Website.png',
    website: 'http://www.edifly.com',
  },
];

const projects = [
  {
    title: 'A Brief Review of Automatic Differentiation',
    authors: 'D. Cortild, J. van Haastert, A. Villegas Sanabria and F. Voronine',
    date: 'March 2023',
    website: 'https://www.doi.org/10.13140/RG.2.2.19959.70565',
  },
  {
    title: 'Lucas-Lehmer Primality Test',
    authors: 'D. Cortild and A. Villegas Sanabria',
    date: 'February 2022',
    website: 'https://www.doi.org/10.13140/RG.2.2.20364.59520',
  },
  {
    title: 'Cyclic Binary Linear Codes Of Length 2^m',
    authors: 'D. Cortild and F. Voronine',
    date: 'January 2022',
    website: 'https://www.doi.org/10.13140/RG.2.2.32734.51524',
  },
  {
    title: 'Drawing Graphs on Surfaces',
    authors: 'J. van Haastert, L. Jiménez Naranjo, F. Voronine, D. Cortild and A. Villegas Sanabria',
    date: 'June 2021',
    website: 'https://www.doi.org/10.13140/RG.2.2.19312.74243',
  },
  {
    title: 'L\'intelligence artificielle dans les jeux',
    authors: 'P. Anestakis, D. Cortild, E. Fischer, E. Janusis and D. Olimid',
    date: 'April 2020',
    website: 'https://www.doi.org/10.13140/RG.2.2.26023.62889',
  }
];

export default () => (
  <>
    {/*PROJECTS */}
    <div
      className="section section-dark pb-0 px-4"
      id="projects"
      style={{
        background: 'linear-gradient(#555, #475)',
        paddingTop: '0',
        marginTop: 0,
      }}
    >
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title text-white">
              <b>Mathematical Projects</b>
            </h2>
            <h5 className="description text-white">
              <b>
                More information to be found on my <a href="https://www.researchgate.net/profile/Daniel-Cortild-2"
                                                      target={"_blank"}>ResearchGate profile</a>.
              </b>
            </h5>
          </Col>
        </Row>
        <div className="space-top"/>
        <Row className="justify-content-center align-center text-center">
          <ul className="w-100 text-left text-white">
            {projects.map(({title, website, authors, date}) => (
              <li>
                <a href={website} target="_blank" className="text-white"><h5><b>{authors}. <i>{title}</i>, {date}</b>
                </h5></a>
              </li>
            ))}
          </ul>
        </Row>
      </Container>
    </div>
    {/* PAST WEB DEV */}
    <div
      className="section section-dark pb-0"
      id="jobs"
      style={{
        background: 'linear-gradient(#475, #77b)',
        paddingTop: '0',
        marginTop: 0,
      }}
    >
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title text-white">
              <b>Web Development</b>
            </h2>
            <h5 className="description text-white">
              <b>
                More information to be found on my <a href="https://github.com/DanielCortild"
                                                      target={"_blank"}>GitHub profile</a>.
              </b>
            </h5>
          </Col>
        </Row>
        <div className="space-top"/>
        <Row className="justify-content-center px-4">
          {jobs.map(({title, type, description, img, website}) => (
            <Col lg={4} md={6} sm={12}>
              <Card className="card-plain">
                <CardImg top tag="div">
                  <a href={website} target="_blank">
                    <img
                      alt="..."
                      className="img"
                      src={require('assets/img/sections/' + img).default}
                    />
                  </a>
                </CardImg>
                <CardBody>
                  <a href={website} target="_blank">
                    <CardTitle tag="h4" className="text-center">
                      <b>{title}</b>
                    </CardTitle>
                    <br/>
                  </a>
                  <h6 className="card-category text-white text-center">
                    {type}
                  </h6>
                  <p className="card-description text-white text-center">
                    <b>{description}</b>
                  </p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  </>
);
