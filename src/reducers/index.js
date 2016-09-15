import { routerReducer } from 'react-router-redux'
import step from './step'
import timestamp from './timestamp'
import stories from './stories'
import ui from './ui'

const reducers = {
  step,
  timestamp,
  stories,
  ui,
  routing: routerReducer,
}

export default reducers
