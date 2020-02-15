import React, { Component } from 'react';
import './App.css';
import resume from './resume.json'
import Experience from './Experience';
import Project from './Project';
import SubProject from './SubProject';
import Summary from './Summary';
import Skill from './Skill';
import Education from './Education';
import Language from './Language';

class App extends Component {

  renderSummary() {
    return <Summary summary={resume.summary}></Summary>
  }

  renderExperiences() {
    let resultArray = [];
    resume.experiences.map((item, i) => {
      resultArray.push(<Experience item={item} key={i}></Experience>)
    })
    return resultArray;
  }


  renderProjects() {
    let resultArray = [];
    resume.projects.map((item, i) => {
      resultArray.push(<Project item={item} key={i}></Project>)
    })
    return resultArray;
  }

  renderSubProjects() {
    let resultArray = [];
    resume.subprojects.map((item, i) => {
      resultArray.push(<SubProject item={item} key={i}></SubProject>)
    })
    return resultArray;
  }


  renderSkills() {
    let resultArray = [];
    resume.skills.map((item, i) => {
      resultArray.push(<Skill item={item} key={i}></Skill>)
    })

    return resultArray;
  }

  renderEducations() {
    let resultArray = [];
    resume.educations.map((item, i) => {
      resultArray.push(<Education item={item} key={i}></Education>)
    })

    return resultArray;
  }


  renderLanguages() {
    let resultArray = [];
    resume.languages.map((item, i) => {
      resultArray.push(<Language item={item} key={i}></Language>)
    })

    return resultArray;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar-wrapper">
          <div className="profile-container">

            <img className="profile" src={resume.image} alt={resume.image} style={{ width: "100%" }} />{/* Inline Styles Added */}
            <h1 className="name">{resume.name}</h1>
            <h3 className="tagline">{resume.profile_name}</h3>
          </div>

          <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
              <li className="email"><i className="fas fa-envelope"></i><a style={{ fontSize: "0.9em" }} href={"mailto:" + resume.email}>rakesh.rengaraj@gmail.com</a></li>{/* Inline Styles Added */}
              <li className="phone"><i className="fas fa-phone"></i><a href="#">{resume.phone}</a></li>
              <li className="linkedin"><i className="fab fa-linkedin"></i><a href={resume.linkedinURL} target="_blank">{resume.linkedin}</a></li>
              <li className="github"><i className="fab fa-github"></i><a href={resume.githubURL} target="_blank">{resume.github}</a></li>
            </ul>
          </div>
          <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            {this.renderEducations()}
          </div>

          <div className="languages-container container-block">
            <h2 className="container-block-title">Languages</h2>
            <ul className="list-unstyled interests-list">
              {this.renderLanguages()}
            </ul>
          </div>

        </div>

        <div className="main-wrapper">

          <section className="section summary-section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
            {this.renderSummary()}
          </section>

          <section class="section experiences-section">
            <h2 class="section-title"><span class="icon-holder"><i class="fas fa-briefcase"></i></span>Experiences</h2>
            {this.renderExperiences()}
          </section>


          <section className="section projects-section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
            <div className="intro">
              <p>Below, is the information about the projects I have been a part of.</p>
            </div>
            {this.renderProjects()}
            
            {/* Sub Projects Below */}
            <h6>Worked as a Project Manager to deploy our product QuoDeck with custom features for the following clients.</h6>
            <div className="skillset">
               {this.renderSubProjects()}
               Also worked with the clients such as ABSLI, RNLIC, Jana Bank, Axis Bank etc and the apps for this clients are not available online now.
            </div>

          </section>

          <section className="skills-section section">
            <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
            <div className="skillset">
              {this.renderSkills()}
            </div>
          </section>

        </div>
      </div>
    );
  }
}

export default App;
