import React, { Component } from 'react'
import { Button, Card, Image, Icon, Confirm } from 'stardust'

class Story extends Component {

  state = { deleting: false }

  render() {
    const { avatar, name, points, description, owner, done } = this.props.story
    const { onDone, onDelete, onInProgress } = this.props

    return (
      <Card color={done ? 'green' : 'red'} style={{ width: '100%' }}>
        <Card.Content>
          <Image floated='right' size='mini' src={avatar} alt={owner} shape='circular' title={owner} />
          <Card.Header>{name} - <i style={{ color: done ? 'green' : 'red' }}>{done ? 'Done' : 'In Progress'}</i></Card.Header>
          <Card.Meta>{points} points</Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button positive onClick={done ? onInProgress : onDone}><Icon name={done ? 'undo' : 'checkmark'}/>{done ? 'To In Progress' : 'To Done'}</Button>
            <Button negative onClick={() => this.setState({ deleting: true })}><Icon name="remove"/>Delete Story</Button>
            <Confirm
              dimmer='blurring'
              content={`Are you sure that you want to delete the story "${name}"?`}
              confirmButton='Yes'
              active={this.state.deleting}
              onCancel={() => this.setState({ deleting: false })}
              onConfirm={onDelete}
            />
          </div>
        </Card.Content>
      </Card>
    )
  }
}

Story.propTypes = {
  avatar: React.PropTypes.string,
  name: React.PropTypes.string,
  points: React.PropTypes.number,
  description: React.PropTypes.string,
  owner: React.PropTypes.string
}

export default Story
