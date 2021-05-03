// import 'core-js/stable'
// import 'regenerator-runtime/runtime' // Needed to polyfill async / await.

import './styles/styles.scss'
import ReactDOM from 'react-dom'
import Nav from './components/Nav'
import NotFound from 'components/NotFound'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import routes from './routes'

// Mount our app.
ReactDOM.render(
  <Router>
    <div className="h-100 df">
      <Nav />
      <div className="contents pa8">
        <Switch>
          <Route exact path="/" component={() => 'Page Content'} />
          {routes.map(({route, Component}) => {
            return <Route key={route} path={route} component={Component} />
          })}
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>,
  document.querySelector('#app'),
)
