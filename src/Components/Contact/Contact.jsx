import React from 'react';
import './Contact.css';

import emailIcon from '../../assets/email.png';
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';

const Contact = () => {
  return (
    <section id="contact" className="ContactContainer">
      <h2 className="ContactTitle">Contact</h2>

      <p className="ContactText">
        Feel free to reach out to me for collaborations or opportunities.
      </p>

      <div className="ContactLinks">
        <a href="mailto:naveen@example.com" aria-label="Email">
          <img src={emailIcon} alt="Email" />
        </a>

        <a
          href="https://github.com/NaveenSripathi1"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://in.linkedin.com/in/naveen-sripathi"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
