import * as React from 'react';

import './Section.css';

export class Section extends React.Component {
  public render() {
    return (
      <div className="section--container">
        {this.props.children}
      </div>
    );
  }
}
