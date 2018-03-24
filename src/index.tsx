import * as React from "react"
import * as ReactDOM from "react-dom"
import {App} from "./app"
import {createStore} from "redux"
import {ApplicationState, combined} from "./core/store/combined"
import {AppContainer} from 'react-hot-loader'

const store = createStore<ApplicationState>(combined)

ReactDOM.render(
  <AppContainer>
    <App store={store}/>
  </AppContainer>,
  document.getElementById("root")
)
