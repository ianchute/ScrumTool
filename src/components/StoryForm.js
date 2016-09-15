import React, { Component } from 'react'
import { Card, Input, Button, Icon, Modal, Label } from 'stardust'
import onEnterKeyDo from '../services/onEnterKeyDo'

class StoryForm extends Component {
  render() {
    const { onSubmit, onUndo, onChange } = this.props

    return (
      <Modal active={true} dimmer='blurring' size='small'>
        <Modal.Header>Create a new story</Modal.Header>
        <Modal.Content>
          <Card fluid>
            <Card.Content>
              <Input autoFocus
                className='fluid labeled'
                placeholder='Create cool stuff'
                name="name"
                onChange={onChange}
                onKeyPress={(e) => onEnterKeyDo(onSubmit)(e)}
              >
                <Label style={{ minWidth: '100px', textAlign: 'center' }}>Name</Label>
              </Input>
              <br/>
              <Input
                className='fluid labeled'
                placeholder={5}
                name="points"
                type="number"
                onChange={onChange}
                onKeyUp={onEnterKeyDo(onSubmit)}>
                <Label style={{ minWidth: '100px', textAlign: 'center' }}>Points</Label>
              </Input>
              <br/>
              <Input
                className='fluid labeled'
                placeholder='Create cool stuff by cooling stuff...'
                name="description"
                onChange={onChange}
                onKeyPress={onEnterKeyDo(onSubmit)}>
                <Label style={{ minWidth: '100px', textAlign: 'center' }}>Description</Label>
              </Input>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button positive onClick={onSubmit}><Icon name="write"/>Create</Button>
                <Button negative onClick={onUndo}><Icon name="undo"/>Cancel</Button>
              </div>
            </Card.Content>
          </Card>
        </Modal.Content>
      </Modal>
    )
  }
}

export default StoryForm
