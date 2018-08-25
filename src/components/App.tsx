import * as React from 'react';

import './App.css';
import { Section } from './common/Section';
import MainBanner from './MainBanner';
import { PersonalInfo } from './PersonalInfo';

class App extends React.Component {
  private personalInfoSectionRef: React.Ref<any>;

  constructor(props: any) {
    super(props);
    this.personalInfoSectionRef = React.createRef();
  }

  public render() {
    return (
      <div className="app">
        <Section>
          <MainBanner personalInfoSectionRef={this.personalInfoSectionRef} />
        </Section>
        <div className="main-container">
          <Section>
            <PersonalInfo ref={this.personalInfoSectionRef} />
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
