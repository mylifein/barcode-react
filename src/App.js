
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import store from './redux/store'
import { mainRoutes } from './routes'
import './App.less'
function App() {
  return (
    <Provider store={store}>
      <Switch>
        {renderRoutes(mainRoutes)}
      </Switch> 
    </Provider>
  )
}

export default App
