import * as React from 'react';

import './PersonalInfo.css';

export class PersonalInfo extends React.Component {
  public render() {
    return (
      <div className="personal-info--container">
        <div className="profile-picture">
          <img src="/images/profile-picture.jpg" alt="Profile Picture" />
        </div>
        <h1 className="name">Giancarlo Pierini</h1>
        <div className="profession">Software Developer</div>
        <div className="about-me">
          <div className="persona-details">
            <div className="detail">
              <p className="detail-title">Age:</p>
              <p className="detail-description">24</p>
            </div>
            <div className="detail">
              <p className="detail-title">Nationalities:</p>
              <p className="detail-description">Venezuelan and Italian</p>
            </div>
            <div className="detail">
              <p className="detail-title">Resident Country:</p>
              <p className="detail-description">Panam&aacute;</p>
            </div>
            <div className="detail">
              <p className="detail-title">Languages:</p>
              <p className="detail-description">Spanish (Native), English (Advanced) and Italian (Intermediate)</p>
            </div>
            <div className="detail">
              <p className="detail-title">Civil State:</p>
              <p className="detail-description">Single</p>
            </div>
          </div>
          <div className="description">
            <p>Full stack JavaScript developer, with broad knowledge on NodeJS as well as frameworks such as hapi.js/joi, Angular 1.x, Angular 4+, also libraries like ReactJS and React Native for mobile development.</p>
          </div>
        </div>
        <div className="social-networks">
          <a href="http://www.facebook.com/Gian.Pierini" target="_blank">
            <img src="/images/social-networks/facebook.jpg" alt="Facebook" />
          </a>
          <a href="http://www.twitter.com/gianpierini" target="_blank">
            <img src="/images/social-networks/twitter.png" alt="Twitter" />
          </a>
          <img src="/images/social-networks/skype.png" alt="Skype" title="gpieriniparra" />
          <a href="https://www.linkedin.com/in/giancarlo-pierini" target="_blank">
            <img src="/images/social-networks/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.github.com/gianpierini" target="_blank">
            <img src="/images/social-networks/github.png" alt="Github" />
          </a>
        </div>
      </div>
    );
  }
}
