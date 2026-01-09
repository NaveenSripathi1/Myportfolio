import React from 'react';
import './Intro.css';
import Myimage from '../../assets/mypic2.jpeg';

const Intro = () => {
  return (
    <section id="home" className="IntroContainer">
      <div className="IntroText">
        <p className="IntroGreeting">Hello,</p>

        <h1 className="IntroTitle">
          <span>I</span>'m <span>N</span>aveen
        </h1>
        <h2 className="IntroRole">Frontend Developer</h2>

        <p className="IntroDescription">
          I’m a frontend developer with a passion for building intuitive and engaging web
          experiences.
        </p>

        <div className="IntroButtons">
          <a
            href="/NaveenResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ResumeBtn"
          >
            View Resume
          </a>

          <a href="/NaveenResume.pdf" download className="ResumeBtn Outline">
            Download CV
          </a>
        </div>
      </div>

      <div className="IntroImage">
        <div className="GlowWrapper">
          <div className="OuterCircle">
            <div className="InnerCircle">
              <img src={Myimage} alt="Naveen profile" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
