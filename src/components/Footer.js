import React from 'react';
import { Container, Row, Button } from 'reactstrap';

export default () => {
  return (
    <>
      <footer className="footer footer-white">
        <Container>
          <Row>
            <nav className="footer-nav">
              <Button
                className="btn-just-icon btn-link mr-1"
                color="white"
                href="https://www.linkedin.com/in/daniel-cortild/"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </Button>
              <Button
                className="btn-just-icon btn-link mr-1"
                color="white"
                href="https://github.com/DanielCortild"
                target="_blank"
              >
                <i className="fa fa-github-alt" />
              </Button>
              <Button
                className="btn-just-icon btn-link mr-1"
                color="white"
                href="https://www.researchgate.net/profile/Daniel-Cortild-2"
                target="_blank"
              >
                <i className="fa-brands fa-researchgate" />
              </Button>
              <Button
                className="btn-just-icon btn-link mr-1"
                color="white"
                href="mailto:daniel.cortild@gmail.com"
                target="_blank"
              >
                <i className="fa fa-at" />
              </Button>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                , made with <i className="fa fa-heart heart" /> by Daniel
                Cortild
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
};
