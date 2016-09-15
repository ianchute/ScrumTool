const stories = function(store, { type, payload }) {
  switch (type) {

    case 'NEW_STORY_CREATE':
      return store.push(payload)

    case 'EXISTING_STORY_DELETE':
      return store.filterNot((story) => story.id === payload.id)

    case 'EXISTING_STORY_DONE':
      return store.map((story) => {
        if (story.id === payload.id)
          story.done = true
        return story
      })

    case 'EXISTING_STORY_IN_PROGRESS':
      return store.map((story) => {
        if (story.id === payload.id)
          story.done = false
        return story
      })

    default:
      return store || null

  }
}

export default stories
