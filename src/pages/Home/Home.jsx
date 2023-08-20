import { Container, Row, Col } from "react-bootstrap";
import AnalyticImg from "../../assets/images/analytic.svg";
import AboutImg from "../../assets/images/about.svg";
import SecondObj from "../../assets/images/blob-haikei.svg";

import { prices } from "./price-data";
import Price from "../../components/Pricing";
import Contact from "../../components/Contact/Contact";
import "./Home.scss";

function HomePage() {
  return (
    <>
      <div id="home" className="home-section">
        <div className="home-background">
          <div className="first"></div>
          <img className="second" src={SecondObj} alt="second" />
        </div>
        <Container className="home-content">
          <div className="home-description-1">
            <p>Lorem ipsum dolor Sit amet. consectetur adjprscing elJt. </p>
            <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <Row className="home-description-2">
            <Col>
              <p>
                <i>&quot;Excepteur sint occaecat cupidatat non proident&quot;</i>
              </p>
            </Col>
          </Row>
          <img className="home-icon" src={AnalyticImg} alt="home" />
        </Container>
      </div>
      <div id="about" className="about-section">
        <Container>
          <Row>
            <Col md={5} data-aos="fade-up" data-aos-duration="500">
              <img className="about-img" src={AboutImg} alt="about" />
            </Col>
            <Col md={7} data-aos="fade-up" data-aos-duration="500">
              <h1 className="title">ABOUT US</h1>
              <p className="description">
                Maecenas quis mauris erat. Fusce imperdiet turpis lacus, eget vehicula urna cursus convallis. Nulla eget
                nibh arcu. Mauris condimentum lectus eget dictum sodales. Suspendisse non mi sapien. Suspendisse ante
                nisi, placerat a pellentesque vel, ullamcorper quis eros. Aliquam ut commodo arcu, elementum malesuada
                libero. Nam gravida velit sed magna cursus, in scelerisque augue vulputate. Nullam finibus quis augue
                consectetur venenatis.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="pricing" className="pricing-section">
        <Container>
          <Row>
            <Col>
              <div className="pricing-detail" data-aos="fade-up" data-aos-duration="500">
                <h1 className="pricing-title">PRICING</h1>
                <p className="pricing-description">
                  Find the best matched price for your company. These are the prices.
                </p>
              </div>
              <Row>
                {prices.map((price, idx) => {
                  return <Price key={idx} price={price} />;
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Contact />
    </>
  );
}

export default HomePage;
