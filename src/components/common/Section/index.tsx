import * as React from 'react';

import './Section.css';

interface ISection {
  className?: string;
}

export class Section extends React.Component<ISection, {}> {
  public render() {
    return (
      <div className={`section--container ${this.props.className || ''}`}>
        {this.props.children}
      </div>
    );
  }
}
