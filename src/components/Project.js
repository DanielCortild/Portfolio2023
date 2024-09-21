/*eslint-disable*/
import React from "react";

// reactstrap components
import { Card, CardBody, CardImg, CardTitle, Col, Container, Row } from "reactstrap";

const preprints = [
  {
    title: "Krasnoselskii-Mann Iterations: Inertia, Perturbations and Approximation",
    authors: "D. Cortild, J. Peypouquet",
    date: "January 2024",
    website: "https://arxiv.org/abs/2401.16870",
  },
];

const projects = [
  {
    title: "Well-Balanced Schemes for Shallow Water Equations",
    authors: "D. Cortild",
    date: "November 2023",
    website: "http://dx.doi.org/10.13140/RG.2.2.13232.94723",
  },
  // {
  //   title: "Perturbed Inertial Krasnoselskii-Mann Iterations",
  //   authors: "D. Cortild",
  //   date: "May 2023",
  //   website: "http://www.doi.org/10.13140/RG.2.2.15082.49601",
  // },
  {
    title: "A Brief Review of Automatic Differentiation",
    authors: "D. Cortild, J. van Haastert, A. Villegas Sanabria and F. Voronine",
    date: "March 2023",
    website: "https://www.doi.org/10.13140/RG.2.2.19959.70565",
  },
];

const conference = [
  {
    conference: "Programme Gaspard Monge pour l'Optimisation (PGMO) Days 2024, Paris, France",
    date: "19-20th of November, 2024",
  },
  {
    conference: "21st Conference on Advanced in Continuous Optimization (EUROPT), Lund, Sweden",
    date: "26-28th of June, 2024",
    website: "https://drive.google.com/file/d/1X7JRjgBNBiT1r4YqyAgKjWqvTkRNQdE5/view?usp=sharing",
  },
  {
    conference: "Systems, Control and Optimization Colloquium, Groningen, Netherlands",
    date: "12th of June 2024",
    website: "https://drive.google.com/file/d/1uCfozOr4NWXBWMfPtW5ac1L2yRQu7rY3/view?usp=share_link",
  },
  {
    conference: "Workshop on Nonsmooth Optimization and Applications (NOPTA), Antwerpen, Belgium",
    date: "8-12th of April, 2024",
    website: "https://drive.google.com/file/d/1wdjOGBFTkEL1-PPDJRiJpRAcW5a_7TSz/view?usp=share_link",
  },
  {
    conference: "Optimization at Bernoulli Institute (OBI), Groningen, Netherlands",
    date: "18-20th of June, 2023",
    website: "https://drive.google.com/file/d/1F5R8VpfxesHwoBEELgBjeKPqtyvIzR4t/view?usp=share_link",
  },
];

const classes = [
  {
    classname: "Probabilistic Methods",
    location: "Maths Beyond Limits 2024",
    link: "https://drive.google.com/file/d/1qtEdfJ3a73kM6Ez0Z6eZL8V_9sqfaknd/view?usp=sharing",
    date: "13-15th of September, 2024",
  },
  {
    classname: "Introduction to Convex Optimization",
    location: "Maths Beyond Limits 2023",
    link: "https://drive.google.com/file/d/1qsGq6pjRoi3nHCTd572cY1Qb_OQq-MYt/view?usp=sharing",
    date: "16-18th of September, 2023",
  },
];

export default () => (
  <>
    {/*PROJECTS */}
    <div
      className="section section-dark pb-5 px-4"
      id="projects"
      style={{
        background: "linear-gradient(#555, #475)",
        paddingTop: "0",
        marginTop: 0,
      }}
    >
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title text-white">
              <b>Preprints</b>
            </h2>
            <h5 className="description text-white">
              <b>
                More information to be found on my{" "}
                <a href="https://arxiv.org/search/math?searchtype=author&query=Cortild,+D" target={"_blank"}>
                  ArXiV profile
                </a>
                .
              </b>
            </h5>
          </Col>
        </Row>
        <div className="space-top" />
        <Row className="justify-content-center align-center text-center">
          <ul className="w-100 text-left text-white">
            {preprints.map(({ title, website, authors, date }) => (
              <li>
                <a href={website} target="_blank" className="text-white">
                  <h5>
                    <b>
                      {authors}. <i>{title}</i>, {date}
                    </b>
                  </h5>
                </a>
              </li>
            ))}
          </ul>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title text-white">
              <b>Conference Appearances</b>
            </h2>
            <h5 className="description text-white">
              <b>The already given talks are clickable, and the slides / poster may be downloaded through them.</b>
            </h5>
          </Col>
        </Row>
        <div className="" />
        <Row className="justify-content-center align-center text-center">
          <ul className="w-100 text-left text-white">
            {conference.map(({ title, conference, website, authors, date }) => (
              <li>
                <a href={website} target="_blank" className="text-white">
                  <h5>
                    <b>
                      {conference}. {date}
                    </b>
                  </h5>
                </a>
              </li>
            ))}
          </ul>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title text-white">
              <b>Mathematical Projects</b>
            </h2>
            <h5 className="description text-white">
              <b>
                More information to be found on my{" "}
                <a href="https://www.researchgate.net/profile/Daniel-Cortild-2" target={"_blank"}>
                  ResearchGate profile
                </a>
                .
              </b>
            </h5>
          </Col>
        </Row>
        <div className="space-top" />
        <Row className="justify-content-center align-center text-center">
          <ul className="w-100 text-left text-white">
            {projects.map(({ title, website, authors, date }) => (
              <li>
                <a href={website} target="_blank" className="text-white">
                  <h5>
                    <b>
                      {authors}. <i>{title}</i>, {date}
                    </b>
                  </h5>
                </a>
              </li>
            ))}
          </ul>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title text-white">
              <b>Volunteering Teaching Projects</b>
            </h2>
          </Col>
        </Row>
        <div className="space-top" />
        <Row className="justify-content-center align-center text-center">
          <ul className="w-100 text-left text-white">
            {classes.map(({ classname, link, location, date }) => (
              <li>
                <a href={link} target="_blank" className="text-white">
                  <h5>
                    <b>
                      {classname} (<i>{location}</i>, {date})
                    </b>
                  </h5>
                </a>
              </li>
            ))}
          </ul>
        </Row>
      </Container>
    </div>
  </>
);
