import React, { Component } from 'react'
import { connect } from 'react-redux'
import Story from '../components/Story'
import StoryForm from '../components/StoryForm'
import CardButton from '../components/CardButton'
import SprintStatistics from '../containers/SprintStatistics'
import Guid from '../services/Guid'
import { Card, Header, Grid, Divider } from 'stardust'
import _ from 'underscore'

class Stories extends Component {

  render(a, b) {
    const storyDefaults = {
      name: 'Untitled',
      points: 0,
      description: 'No description.'
    }

    const { dispatch, stories } = this.props
    const { is_creating } = this.props.ui

    return (
      <div>
        <SprintStatistics/>

        <Divider/>

        {is_creating
          ? (<StoryForm
              onSubmit={() => dispatch({ type: 'NEW_STORY_CREATE', payload: _.extend({ id: Guid.create() }, this.props.ui.new_story) })}
              onUndo={() => dispatch({ type: 'NEW_STORY_CANCEL' })}
              onChange={(e) => dispatch({ type: 'NEW_STORY_CHANGE', payload: { name: e.target.name, value: e.target.value } })}
            />)
          : (<CardButton
            color="green" size="huge" icon="plus" text="Create New Story"
            onClick={() => dispatch({ type: 'NEW_STORY_BEGIN' })}/>
          )
        }

        <Divider/>

        <Grid divided>
          <Grid.Row columns={2}>
            <Grid.Column>

              <Header as='h1' textAlign='center'>In Progress</Header>
              <Card.Group itemsPerRow={1} stackable={true}>

                {stories.filter(story => !story.done).map(story => (
                  <Story
                    key={story.id}
                    story={_.defaults(story, storyDefaults)}
                    onDelete={() => dispatch({ type: 'EXISTING_STORY_DELETE', payload: { id: story.id } })}
                    onDone={() => dispatch({ type: 'EXISTING_STORY_DONE', payload: { id: story.id } })}
                    onInProgress={() => dispatch({ type: 'EXISTING_STORY_IN_PROGRESS', payload: { id: story.id } })}
                  />)
                )}

              </Card.Group>

            </Grid.Column>
            <Grid.Column>

              <Header as='h1' textAlign='center'>Done</Header>

              <Card.Group itemsPerRow={1} stackable={true}>

                {stories.filter(story => story.done).map(story => (
                  <Story
                    key={story.id}
                    story={_.defaults(story, storyDefaults)}
                    onDelete={() => dispatch({ type: 'EXISTING_STORY_DELETE', payload: { id: story.id } })}
                    onDone={() => dispatch({ type: 'EXISTING_STORY_DONE', payload: { id: story.id } })}
                    onInProgress={() => dispatch({ type: 'EXISTING_STORY_IN_PROGRESS', payload: { id: story.id } })}
                  />)
                )}

              </Card.Group>

            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    )
  }

}

export default connect(state => ({ stories: state.stories.toJS(), ui: state.ui.toJS() }))(Stories)
