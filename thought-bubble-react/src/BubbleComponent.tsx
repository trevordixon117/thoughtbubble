import * as React from 'react';
import {IBubble} from './IBubble';

class BubbleComponent extends React.Component<IBubble> {
  public render() {
    return (
      <div >
        <div>{this.props.title}</div>
      </div>
    );
  }
}

export default BubbleComponent;
