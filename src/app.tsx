import * as React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import muiTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import {Provider, Store} from 'react-redux'
import {ApplicationState} from "./core/store/combined"
import {Users} from "./users/users"
import {Status} from "./users/user"

interface AppProps {
  store: Store<ApplicationState>
}

const users = [{
  id: "alj",
  name: "Aljon",
  status: Status.active
}]

export const App = ({store}: AppProps) =>
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <Users users={users}/>
    </MuiThemeProvider>
  </Provider>
