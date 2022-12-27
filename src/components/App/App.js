import Dashboard from '../Dashboard/Dashboard'
import { NavLink, Switch, Route } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import './App.css'

const App = () => {
  return (
    <div>
      <header className="header-container" data-cy='header-container'>
        {/* <NavLink to='/'>
          <img className='logo' src={logo} data-cy ='logo' alt='logo'/>
        </NavLink> */}
        <nav className='nav-bar' data-cy='nav-bar'>
          <NavLink to='/'>
            <p className='nav-button' data-cy='home-button'>HOME</p>
          </NavLink>
        </nav>
      </header>
      <Switch>
        <Route 
          exact path='/'
          render={() => {
            return <Dashboard />
          }}
        />
      </Switch>
      <footer className='footer-container' data-cy='footer-container'>
        <p className='footer-text' data-cy='footer-text'>Made by <a href='https://github.com/stephanieguzm/seekr-ui' target='_blank'>Stephanie Guzman</a> and <a href='https://github.com/ajkrumholz/seekr' target='_blank'>A.J. Krumholz </a></p>
      </footer>
    </div>
  );
}

export default App
