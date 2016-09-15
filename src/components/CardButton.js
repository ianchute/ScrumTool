import React, { Component } from 'react'
import { Card, Button, Icon } from 'stardust'

class CardButton extends Component {
  render() {
    const { color, size, icon, text, onClick } = this.props

    return (
      <Card centered>
        <Button color={color} size={size} style={{ height: '100%' }} onClick={onClick}>
          <Icon name={icon}/>
          {text}
        </Button>
      </Card>
    )
  }
}

export default CardButton
