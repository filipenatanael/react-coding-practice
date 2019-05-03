import React from 'react';

const Contact = ({ props }) => (
  <div className="contact-container container-block">
      <ul className="list-unstyled contact-list">
          <li className="email"><i className="fas fa-envelope"></i><a href="mailto: yourname@email.com">alan.doe@website.com</a></li>
          <li className="phone"><i className="fas fa-phone"></i><a href="tel:0123 456 789">0123 456 789</a></li>
          <li className="website"><i className="fas fa-globe"></i><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">portfoliosite.com</a></li>
          <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href="#" target="_blank">linkedin.com/in/alandoe</a></li>
          <li className="github"><i className="fab fa-github"></i><a href="#" target="_blank">github.com/username</a></li>
          <li className="twitter"><i className="fab fa-twitter"></i><a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li>
      </ul>
  </div>
);

export default Contact;
