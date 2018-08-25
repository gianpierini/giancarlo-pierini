import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './MainBanner.css';

interface IMainBanner {
  personalInfoSectionRef: any;
}

class MainBanner extends React.Component<IMainBanner, {}> {
  constructor(props: any) {
    super(props);
  }

  public scrollToPersonalInfoSection = () => {
    const domNode: any = ReactDOM.findDOMNode(this.props.personalInfoSectionRef.current);
    window.scrollTo({
      behavior: 'smooth',
      top: domNode.getBoundingClientRect().top - 75
    });
  }

  public render() {
    return (
      <div className="main-banner--container">
        <div className="overlay" />
        <video autoPlay={true} loop={true} muted={true}>
          <source src="/videos/main-banner-video.mp4" type="video/mp4" />
        </video>
        <div className="code">
          ()<span className="blue">=></span> {'{'}
          <br /> &nbsp;&nbsp;
          <span className="purple">return</span> {'{'}
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="light-blue">name</span>:
          <span className="brown"> 'Giancarlo Pierini'</span>,
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="light-blue">profession</span>:
          <span className="brown"> 'Software Developer'</span>
          <br /> &nbsp;&nbsp;{'}'};
          <br /> {'}'}
        </div>
        <div className="next-step" onClick={this.scrollToPersonalInfoSection}>
          <img src="/images/flecha.svg" alt="Next" />
        </div>
      </div>
    );
  }
}

export default MainBanner;
