import { combineReducers } from 'redux'
import counter from './counter'
import loader from './loader'

export const allReducers = combineReducers({
	counter,
	loader,
})

export default allReducers;