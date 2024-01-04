import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import HeroSection from "../Hero-Section/HeroSection";
import CompanySection from "../Company-section/Company";
import AboutUs from "../About-us/AboutUs";
import Courses from "../Courses-section/Courses";
import ChooseUs from "../Choose-us/ChooseUs";
import Features from "../Feature-section/Features";
import FreeCourse from "../Free-course-section/FreeCourse";
import Testimonials from "../Testimonial/Testimonials";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import Faculty from "../Faculty/Faculty";


const navLinks = [
  {
    display: "Home",
    url: "",
  },
  {
    display: "About",
    url: "/AboutUs",
  },

  {
    display: "Courses",
    url: "/Courses",
  },
  {
    display: "Faculty",
    url: "Faculty",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <div>
      <header className="header">
        <Container>
          <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src="https://th.bing.com/th/id/OIP.oHCEl9eExUreUHgp42Yk7QAAAA?w=205&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo"
                style={{ height: 70, marginRight: 30, margin: 20 }} />
              <h1 className=" d-flex align-items-center gap-1">
                <strong>G.S COLLEGE</strong>
              </h1>
            </div>

            <div className="nav d-flex align-items-center gap-5">
              <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                <ul className="nav__list">
                  {navLinks.map((item, index) => (
                    <li key={index} className="nav__item">
                      <a href={item.url}>{item.display}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nav__right">
                <p className="mb-0 d-flex align-items-center gap-2">
                  <i class="ri-phone-line"></i> 9945002793/8867325152
                </p>
              </div>
            </div>

            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line" onClick={menuToggle}></i>
              </span>
            </div>
          </div>
        </Container>
      </header>
      <HeroSection />
      <CompanySection />
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Faculty />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Header;