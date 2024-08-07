import WorkIcon from "@material-ui/icons/Work";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../contexts/theme";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BiStar } from "react-icons/bi";
import Image from "../assets/web_logo-no-bg.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./About.css";

function About() {
  const [{ themeName }] = useContext(ThemeContext);
  const [linecolor, setlinecolor] = useState(
    themeName === "light" ? "#23283e" : "#fcfcfc"
  );

  useEffect(() => {
    if (themeName === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themeName]);

  return (
    <div className="about center" id="about">
      <h2>
        ABOUT <span className="about__name"> ME</span>
      </h2>

      <div className="about__contact">
        <div>
          <img src={Image} alt="Ameer Hamza" id="profile" />
        </div>

        <div>
          <h4 className="about__desc">
            Hi Everyone, I am Ameer Hamza from Lahore, Pakistan. I am currently
            pursuing in Bachelor of Information Technology from University of
            Education Township, Lahore.
          </h4>
          <br />
          <div id="interest">
            <h4 className="about__desc">
              {" "}
              Some of my interests apart from Coding :
            </h4>
            <BiStar className="about__name" />{" "}
            <span className="about__name"> Listening Music</span>
            <br />
            <BiStar className="about__name" />{" "}
            <span className="about__name"> Playing Badminton </span>
            <br />
            <BiStar className="about__name" />{" "}
            <span className="about__name"> Playing Cricket</span>
            <br />
            <BiStar className="about__name" />{" "}
            <span className="about__name">Watching Movies</span>
          </div>
        </div>
      </div>

      <h2 id="timeline">
        MY <span className="about__name">EXPERIENCE</span>{" "}
      </h2>

      <VerticalTimeline lineColor={linecolor}>
        <VerticalTimelineElement
          date="2023 - current"
          icon={<WorkIcon />}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
          iconStyle={{
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
        >
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            SWE Fellowship - Headstarter AI
          </h4>
          <p data-aos="fade-right">
            At Headstarter AI, I am honing my skills in AI-driven software
            development, networking, and interview preparation. I collaborate
            with a talented team to develop and optimize AI-powered
            applications, implement machine learning models, and integrate them
            into scalable solutions. Additionally, I actively participate in
            networking events and workshops, and engage in interview training to
            further enhance my professional development.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2019 - 2021"
          icon={<WorkIcon />}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
          iconStyle={{
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
        >
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Software Engineer - TectSoft
          </h4>
          <p data-aos="fade-right">
            {" "}
            At TectSoft, I developed and maintained dynamic single-page
            applications using HTML, CSS, JavaScript, and React.js for the
            front-end, and Node.js, Express.js, and MongoDB for the back-end. I
            collaborated with cross-functional teams to deliver high-quality
            software solutions, followed agile methodologies, and implemented
            best practices for coding and testing to ensure robust, scalable
            applications.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          icon={<StarRateIcon />}
          iconStyle={{
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default About;
