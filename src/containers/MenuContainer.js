import React, { Component } from 'react'
import { Menu } from 'stardust'
import { connect } from 'react-redux'
import MenuLink from '../components/MenuLink'
import Guid from '../services/Guid'

class MenuContainer extends Component {
  render() {
    return (
      <Menu inverted>

        {this.props.routes.childRoutes && this.props.routes.childRoutes.map(
          ({ name, path }) => (<MenuLink key={Guid.create()} name={name} path={path}/>)
        )}

      </Menu>
    )
  }
}

export default connect()(MenuContainer)
