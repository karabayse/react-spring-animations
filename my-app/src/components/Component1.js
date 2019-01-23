import React from 'react';
import {Spring} from 'react-spring';

export default function Component1() {
  return (
    <Spring
      from={{opacity: 0}}
      to={{opacity: 1}}
    >
      {props => (
        <div style={props}>
        <div style={c1Style}>
          <h1>Component 1</h1>
          <p>First Paragraph</p>
        </div>
        </div>
      )}
    </Spring>
  )
}

const c1Style = {
  background: '#36648B',
  color: '#FFF',
  padding: '1.5rem'
}
