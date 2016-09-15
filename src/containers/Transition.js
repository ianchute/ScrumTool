import React, { Component } from 'react'
import EasyTransition from 'react-easy-transition'
const { globalTransition: { initialStyle, transition, finalStyle } } = require('../config.json')

class Transition extends Component {
  render() {
    return (
      <EasyTransition
        path={this.props.path}
        initialStyle={initialStyle}
        transition={transition}
        finalStyle={finalStyle}
      >
        {this.props.children}
      </EasyTransition>
    )
  }
}

export default Transition
