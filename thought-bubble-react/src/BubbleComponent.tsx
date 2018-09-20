import * as React from 'react';
import {IBubble} from './IBubble';

class BubbleComponent extends React.Component<IBubble> {
  public render() {
    return (
      <div >
        <div className='hovicon effect-8'>{this.props.id + 1}</div>
      </div>
    );
  }
}

export default BubbleComponent;
