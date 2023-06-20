import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import "./Styles/Home.css"
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";

import Services from "./Services";
import FeaturedTourList from "../components/Featured-tour/FeaturedTourList";
// import Swiper from "../components/SwiperSlider";
import experienceImg from "../assets/images/experience.png";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonial from "../components/Testimonial/Testimonial";
import NewsLetter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section style={{
      backgroundColor: "#552d2d",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1483444308400-fb9510501d23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backdropFilter: "blur(30px)"
    }}>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="worldImg" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
        
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="heroImg" />
              </div>
            </Col>
          
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt="heroImg2" />
              </div>
            </Col>

            {/* Search Bar */}
          </Row>
        </Container>
      </section>

      {/* hero section start */}
      <section >
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>

            {/* service */}
            <Services />
          </Row>
        </Container>
      </section>

{/** servoces */}
{/* ===================================================*/}
<section>
        <Container>
          <Row>
            <MyServices />
          </Row>
        </Container>
      </section>

      {/* ==================================================  */}





      {/* featured tour section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            {/* Featured tour list */}
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* experience tour section */}
      <section >
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>

              <div className="container__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="experienceImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* gallery section */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />

              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>

            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section> */}
      
   
    

      {/* testimonial section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>

            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      {/* News letter */}
      <NewsLetter />
    </>
  );
};


function MyServices() {
  return (
    <div className="services" id="services">
      <h1 className="heading">
        <span>S</span>
        <span>E</span>
        <span>R</span>
        <span>V</span>
        <span>I</span>
        <span>C</span>
        <span>E</span>
        <span>S</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <i >🗺</i>
          <h4>Exploration</h4>
          <p>
          Uncover the untamed wilderness and embark on thrilling expeditions. Discover hidden wonders and create unforgettable memories as you explore the great outdoor
          </p>
        </div>

        <div className="box">
          <i>🎯</i>
          {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-burger-soda" /> */}
          <h4>Thrills</h4>
          <p>
          Experience heart-pounding excitement and adrenaline-fueled adventures. Brace yourself for exhilarating activities that will leave you craving for more
          </p>
        </div>

        <div className="box">
          <i>🏆</i>
          <h4>Challenges</h4>
          <p>
          Test your limits and embrace the challenges that await you. Push yourself beyond boundaries and conquer new heights in the pursuit of extraordinary achievements."
          </p>
        </div>

        <div className="box">
          <i>🌊</i>
          <h4>Water</h4>
          <p>
          Dive into the world of aqua adventures. From thrilling water sports to tranquil explorations, immerse yourself in the captivating beauty and endless possibilities of aquatic realms.
          </p>
        </div>

        <div className="box">
          <i>🏔</i>
          <h4>Mountain</h4>
          <p>
          Take to the skies and defy gravity. Soar like a bird, feel the rush of wind against your face, and witness breathtaking views from high above the ground."
          </p>
        </div>

        <div className="box">
          <i>🌳</i>
          <h4>Nature</h4>
          <p>
          Immerse yourself in the pristine beauty of nature. Disconnect from the hustle and bustle of daily life and reconnect with the natural world through awe-inspiring adventures
          </p>
        </div>
      </div>
    </div>
    // <!-- services section ends here -->
  );
}







export default Home;