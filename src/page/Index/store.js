import { createStore } from 'redux'
import main from './reducers/main'

const store = createStore(main)

export default store