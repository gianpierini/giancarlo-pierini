import * as React from 'react';

import './App.css';
import { Section } from './common/Section';
import { MainBanner } from './MainBanner';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <Section>
          <MainBanner />
        </Section>
      </div>
    );
  }
}

export default App;
