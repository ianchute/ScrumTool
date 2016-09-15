import React, { Component } from 'react'
import { Menu } from 'stardust'
import { Link } from 'react-router'

class MenuLink extends Component {
  render() {
    const { name, path } = this.props
    return (<Menu.Item name={name} as={Link} to={path}>{name}</Menu.Item>)
  }
}

export default MenuLink
