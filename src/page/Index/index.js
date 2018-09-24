import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import Main from './Main'
ReactDom.render(
    <Provider store={store}>
        <Main></Main>
    </Provider>,
    document.getElementById('root')
)