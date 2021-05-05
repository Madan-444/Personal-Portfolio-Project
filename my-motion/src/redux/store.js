import {createStore} from 'redux'
import projectReducer from './reducers'


const store = createStore(projectReducer)
console.log('store inital',store.getState())

export default store
