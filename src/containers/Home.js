import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Image, Button, Icon } from 'stardust'
import { Link } from 'react-router'

class Home extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <Image centered src="https://www.cintacs.com/img/web-software-development-firm-scrum-icon.png"/>
        <Header as="h1">Welcome to ScrumTool!</Header>
        <p>Your Open Source Scrum/Kanban Process Management Tool</p>
        <Button to='/stories' color='blue' as={Link}><Icon name='rocket'/>Get Started</Button>
      </Container>
    )
  }
}

export default connect()(Home)
