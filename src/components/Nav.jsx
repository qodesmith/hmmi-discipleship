import {NavLink} from 'react-router-dom'
import routes from '../routes'

export default function Nav() {
  return (
    <nav className="main-nav pa8">
      {routes.map(({route, name}) => {
        return (
          <NavLink
            key={route}
            className="db pa8 mb4 no-decoration black"
            activeClassName="b bg-lightskyblue"
            to={route}>
            {name}
          </NavLink>
        )
      })}
    </nav>
  )
}
