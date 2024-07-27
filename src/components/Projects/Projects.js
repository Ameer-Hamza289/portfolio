import { FaReact, FaNode } from "react-icons/fa";
import { SiCss3, SiHtml5, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
//import assets
import Rpreview1 from "../assets/Resort-p1.jpg";
import Rpreview2 from "../assets/Resort-p2.jpg";
import Rpreview3 from "../assets/Resort-p3.jpg";

import Tpreview1 from "../assets/chatalyst-I.png";
import Tpreview2 from "../assets/chatalyst-II.png";
import Tpreview3 from "../assets/chatalyst-III.png";

import Epreview1 from "../assets/Digitic-I.png";
import Epreview2 from "../assets/Digitic-III.png";
import Epreview3 from "../assets/Digitic-II.png";

import Spreview1 from "../assets/SkillWave-I.png";
import Spreview2 from "../assets/Skillwave-III.png";
import Spreview3 from "../assets/SkillWave-II.png";

import "../ProjectContainer/ProjectContainer.css";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      name: "Lending Career",
      description: "",
      url: "",
      images: [],
      stack: [],
    },
  ];
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title about_project">Projects</h2>

      {/* <-------------------------------------------------1 start-------------------------------------------> */}

      <div className="project" id="project">
        <div>
          <Splide
            options={{ rewind: true, gap: "1rem", heightRatio: 0.53 }}
            aria-label="React Splide Example"
          >
            <SplideSlide>
              <img src={Rpreview1} alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src={Rpreview2} alt="Image 2" />
            </SplideSlide>

            <SplideSlide>
              <img src={Rpreview3} alt="Image 2" />
            </SplideSlide>
          </Splide>
        </div>

        <div>
          <h3 className="about_project">Hotel Reservation App</h3>

          <p className="project__description">
            The Beach Resort App is a Web application focused on providing a
            seamless booking experience for beachside accommodations. It allows
            users to easily reserve rooms, check availability, and access
            essential information about the resort, ensuring a convenient stay.{" "}
          </p>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={40} />
              <IoLogoJavascript size={40} />
              <SiCss3 size={40} />
              <FaReact size={50} />
            </li>
          </ul>

          <div id="b">
            <a href="https://hotel-reserving-app.netlify.app/" target="_blank">
              <span type="button" className="btn btn--outline">
                {" "}
                Watch Live{" "}
              </span>
            </a>

            <a
              href="https://github.com/Ameer-Hamza289/Beach_Resort"
              target="_blank"
            >
              <span type="button" className="btn btn--outline">
                {" "}
                View Code{" "}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* <-------------------------------------------------1 end-------------------------------------------> */}

      {/* <-------------------------------------------------2 start-------------------------------------------> */}

      <div className="project" id="project">
        <div>
          <Splide
            options={{ rewind: true, gap: "1rem", heightRatio: 0.53 }}
            aria-label="React Splide Example"
          >
            <SplideSlide>
              <img src={Tpreview1} alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src={Tpreview2} alt="Image 2" />
            </SplideSlide>

            <SplideSlide>
              <img src={Tpreview3} alt="Image 2" />
            </SplideSlide>
          </Splide>
        </div>

        <div>
          <h3 className="about_project">Chatalyst</h3>

          <p className="project__description">
            MERN Todo List offers a convenient and flexible solution for
            managing tasks effectively. It combines the power of the MERN stack
            with a sleek and intuitive interface, making it the ideal tool for
            boosting productivity and keeping track of your to-do list.{" "}
          </p>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={40} />
              <IoLogoJavascript size={40} />
              <SiCss3 size={40} />
              <FaReact size={40} />
              <FaNode size={40} />
              <SiMongodb size={40} />
            </li>
          </ul>

          <div id="b">
            <a href="https://chatalyst.com/" target="_blank">
              <span type="button" className="btn btn--outline">
                {" "}
                Watch Live{" "}
              </span>
            </a>

            {/* <a
              href="https://github.com/Ameer-Hamza289/MERN_TODO"
              target="_blank"
            >
              <span type="button" className="btn btn--outline">
                {" "}
                View Code{" "}
              </span>
            </a> */}
          </div>
        </div>
      </div>

      {/* <-------------------------------------------------2 end-------------------------------------------> */}

      {/* <-------------------------------------------------3 start-------------------------------------------> */}

      <div className="project" id="project">
        <div>
          <Splide
            options={{ rewind: true, gap: "1rem", heightRatio: 0.53 }}
            aria-label="React Splide Example"
          >
            <SplideSlide>
              <img src={Epreview1} alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src={Epreview2} alt="Image 2" />
            </SplideSlide>

            <SplideSlide>
              <img src={Epreview3} alt="Image 2" />
            </SplideSlide>
          </Splide>
        </div>

        <div>
          <h3 className="about_project">Digitic</h3>

          <p className="project__description">
            A comprehensive full-stack multi-vendor e-commerce application that
            allows multiple vendors to list and sell products on a unified
            platform.Enabled multiple vendors to sell their products online
            efficiently, leading to increased sales and user satisfaction.
          </p>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={40} />
              <IoLogoJavascript size={40} />
              <SiCss3 size={40} />
              <FaReact size={40} />
              <FaNode size={40} />
              <SiMongodb size={40} />
            </li>
          </ul>

          <div id="b">
            <a
              href="https://grand-mern-e-commerce-app-frontend.vercel.app/"
              target="_blank"
            >
              <span type="button" className="btn btn--outline">
                {" "}
                Watch Live{" "}
              </span>
            </a>

            {/* <a href="https://github.com/Ameer-Hamza289/mern_exercise-tracker"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a> */}
          </div>
        </div>
      </div>

      {/* <-------------------------------------------------3 end-------------------------------------------> */}

      {/* 4th start  */}
      <div className="project" id="project">
        <div>
          <Splide
            options={{ rewind: true, gap: "1rem", heightRatio: 0.53 }}
            aria-label="React Splide Example"
          >
            <SplideSlide>
              <img src={Spreview1} alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src={Spreview2} alt="Image 2" />
            </SplideSlide>

            <SplideSlide>
              <img src={Spreview3} alt="Image 2" />
            </SplideSlide>
          </Splide>
        </div>

        <div>
          <h3 className="about_project">Skillwave</h3>

          <p className="project__description">
            An e-learning platform built on Next.js that provides a seamless
            learning experience with various courses and interactive content.
            Facilitated effective online learning, leading to high user
            engagement and positive feedback from both learners and educators.
          </p>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={40} />
              <IoLogoJavascript size={40} />
              <SiCss3 size={40} />
              <FaReact size={50} />
            </li>
          </ul>

          <div id="b">
            <a href="https://lms-mern-nine.vercel.app/" target="_blank">
              <span type="button" className="btn btn--outline">
                {" "}
                Watch Live{" "}
              </span>
            </a>

            {/* <a
              href="https://github.com/Ameer-Hamza289/Beach_Resort"
              target="_blank"
            >
              <span type="button" className="btn btn--outline">
                {" "}
                View Code{" "}
              </span>
            </a> */}
          </div>
        </div>
      </div>

      {/* 4th end  */}
    </section>
  );
}

export default Projects;
