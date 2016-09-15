const ui = function(store, { type, payload }) {
  switch (type) {

    case 'NEW_STORY_BEGIN':
      return store.set('is_creating', true)

    case 'NEW_STORY_CANCEL':
      return store.set('is_creating', false)

    case 'NEW_STORY_CREATE':
      return store.set('is_creating', false).delete('new_story')

    case 'NEW_STORY_CHANGE':
      if (payload.name === 'points')
        payload.value = Number(payload.value) || 0
      return store.setIn(['new_story', payload.name], payload.value)

    default:
      return store || null

  }
}

export default ui
