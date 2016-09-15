import React, { Component } from 'react'
import MenuContainer from './containers/MenuContainer'
import { Container } from 'stardust'
import { connect } from 'react-redux'
import Transition from './containers/Transition'
import Home from './containers/Home'

import routes from './routes'

class App extends Component {
  render() {
    return (
      <Container>
        <MenuContainer routes={routes}/>
        <Transition path={this.props.location.pathname}>
          {this.props.children ? this.props.children : (<Home/>)}
        </Transition>
      </Container>
    )
  }
}

export default connect()(App)
