import React, { Component } from 'react'
import { Statistic, Segment } from 'stardust'
import { connect } from 'react-redux'

class SprintStatistics extends Component {
  render() {
    const { stories } = this.props
    const totalStoryPoints = stories.map(story => story.points)
      .reduce((a, b) => a + b, 0)
      .toLocaleString()
    const totalStories = stories.length.toLocaleString()
    const totalStoriesInProgress = stories.filter(story => !story.done).length.toLocaleString()
    const totalStoriesDone = stories.filter(story => story.done).length.toLocaleString()

    return (
      <Segment inverted>
        <Statistic.Group widths="four">
          <Statistic inverted color="orange" label={totalStoryPoints === '1' ? 'Story Point' : 'Story Points'} value={totalStoryPoints}/>
          <Statistic inverted color="teal" label={totalStories === '1' ? 'Story' : 'Stories'} value={totalStories}/>
          <Statistic inverted color="red" label='In Progress' value={totalStoriesInProgress}/>
          <Statistic inverted color="blue" label='Done' value={totalStoriesDone}/>
        </Statistic.Group>
      </Segment>
    )
  }
}

export default connect(state => ({ stories: state.stories.toJS() }))(SprintStatistics)
