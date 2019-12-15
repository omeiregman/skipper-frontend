import { combineEpics } from 'redux-observable'
import { exampleEpic } from './example/epics'

export default combineEpics(exampleEpic)
