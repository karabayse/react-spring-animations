import React {Component} from 'react';
import {Spring} from 'react-spring';

export class Component2 extends Component {
  render() {
    return (
        <Spring
          from={{opacity: 0}}
          to={{opacity: 1}}
        >
          {props => (
            <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>First Paragraph</p>
            </div>
            </div>
          )}
        </Spring>
    )
  }
}

const c2Style = {
  background: 'slateblue',
  color: '#FFF',
  padding: '1.5rem'
}

export default Component2
