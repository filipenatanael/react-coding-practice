import React, { Component } from 'react';
import Profile from './components/Profile';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
         <div className="sidebar-wrapper">
            <Profile />

            <Contact />


             <div className="education-container container-block">
                 <h2 className="container-block-title">Education</h2>
                 <div className="item">
                     <h4 className="degree">MSc in Computer Science</h4>
                     <h5 className="meta">University of London</h5>
                     <div className="time">2011 - 2012</div>
                 </div>{/*<!--//item-->*/}
                 <div className="item">
                     <h4 className="degree">BSc in Applied Mathematics</h4>
                     <h5 className="meta">Bristol University</h5>
                     <div className="time">2007 - 2011</div>
                 </div>{/*<!--//item-->*/}
             </div>{/*<!--//education-container-->*/}

             <div className="languages-container container-block">
                 <h2 className="container-block-title">Languages</h2>
                 <ul className="list-unstyled interests-list">
                     <li>English <span className="lang-desc">(Native)</span></li>
                     <li>French <span className="lang-desc">(Professional)</span></li>
                     <li>Spanish <span className="lang-desc">(Professional)</span></li>
                 </ul>
             </div>{/*<!--//interests-->*/}

             <div className="interests-container container-block">
                 <h2 className="container-block-title">Interests</h2>
                 <ul className="list-unstyled interests-list">
                     <li>Climbing</li>
                     <li>Snowboarding</li>
                     <li>Cooking</li>
                 </ul>
             </div>{/*<!--//interests-->*/}

         </div>{/*<!--//sidebar-wrapper-->*/}

         <div className="main-wrapper">

             <section className="section summary-section">
                 <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
                 <div className="summary">
                     <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
                 </div>{/*<!--//summary-->*/}
             </section>{/*<!--//section-->*/}

             <section className="section experiences-section">
                 <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>

                 <div className="item">
                     <div className="meta">
                         <div className="upper-row">
                             <h3 className="job-title">Lead Developer</h3>
                             <div className="time">2015 - Present</div>
                         </div>{/*<!--//upper-row-->*/}
                         <div className="company">Startup Hubs, San Francisco</div>
                     </div>{/*<!--//meta-->*/}
                     <div className="details">
                         <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>
                         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                     </div>{/*<!--//details-->*/}
                 </div>{/*<!--//item-->*/}

                 <div className="item">
                     <div className="meta">
                         <div className="upper-row">
                             <h3 className="job-title">Senior Software Engineer</h3>
                             <div className="time">2014 - 2015</div>
                         </div>{/*<!--//upper-row-->*/}
                         <div className="company">Google, London</div>
                     </div>{/*<!--//meta-->*/}
                     <div className="details">
                         <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

                     </div>{/*<!--//details-->*/}
                 </div>{/*<!--//item-->*/}

                 <div className="item">
                     <div className="meta">
                         <div className="upper-row">
                             <h3 className="job-title">UI Developer</h3>
                             <div className="time">2012 - 2014</div>
                         </div>{/*<!--//upper-row-->*/}
                         <div className="company">Amazon, London</div>
                     </div>{/*<!--//meta-->*/}
                     <div className="details">
                         <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                     </div>{/*<!--//details-->*/}
                 </div>{/*<!--//item-->*/}

             </section>{/*<!--//section-->*/}

             <section className="section projects-section">
                 <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
                 <div className="intro">
                     <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                 </div>{/*<!--//intro-->*/}
                 <div className="item">
                     <span className="project-title"><a href="#hook">Velocity</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote, market and sell their products.</span>

                 </div>{/*<!--//item-->*/}
                 <div className="item">
                     <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/" target="_blank">DevStudio</a></span> -
                     <span className="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
                 </div>{/*<!--//item-->*/}
                 <div className="item">
                     <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/" target="_blank">Tempo</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote their products or services and to attract users &amp; investors</span>
                 </div>{/*<!--//item-->*/}
                 <div className="item">
                     <span className="project-title"><a href="hhttp://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/" target="_blank">Atom</a></span> - <span className="project-tagline">A comprehensive website template solution for startups/developers to market their mobile apps. </span>
                 </div>{/*<!--//item-->*/}
                 <div className="item">
                     <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/" target="_blank">Delta</a></span> - <span className="project-tagline">A responsive Bootstrap one page theme designed to help app developers promote their mobile apps</span>
                 </div>{/*<!--//item-->*/}
             </section>{/*<!--//section-->*/}

             <section className="skills-section section">
                 <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                 <div className="skillset">
                     <div className="item">
                         <h3 className="level-title">Python &amp; Django</h3>
                         <div className="progress level-bar">
                 <div className="progress-bar theme-progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
                     </div>{/*<!--//item-->*/}

                     <div className="item">
                         <h3 className="level-title">Javascript &amp; jQuery</h3>
                         <div className="progress level-bar">
                 <div className="progress-bar theme-progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
                     </div>{/*<!--//item-->*/}

                     <div className="item">
                         <h3 className="level-title">Angular</h3>
                         <div className="progress level-bar">
                 <div className="progress-bar theme-progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
                     </div>{/*<!--//item-->*/}

                     <div className="item">
                         <h3 className="level-title">HTML5 &amp; CSS</h3>
                         <div className="progress level-bar">
                   <div className="progress-bar theme-progress-bar" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
                     </div>{/*<!--//item-->*/}

                     <div className="item">
                         <h3 className="level-title">Ruby on Rails</h3>
                         <div className="progress level-bar">
                 <div className="progress-bar theme-progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
                     </div>{/*<!--//item-->*/}

                     <div className="item">
                         <h3 className="level-title">Sketch &amp; Photoshop</h3>
                         <div className="progress level-bar">
                 <div className="progress-bar theme-progress-bar" role="progressbar"  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
                     </div>{/*<!--//item-->*/}

                 </div>
             </section>{/*<!--//skills-section-->*/}

         </div>{/*<!--//main-body-->*/}
      </div>
   );
  }
}

export default App;
