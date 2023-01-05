import Dashboard from '../Dashboard/Dashboard'
import { NavLink, Switch, Route } from 'react-router-dom'
import './App.css'
import logo from '../../logo.svg'

const App = () => {
  return (
    <div>
      <main>
      <Switch>
        <Route 
          exact path='/'
          render={() => {
            return <Dashboard />
          }}
          />
      </Switch>
      </main>
      <footer className='footer-container' data-cy='footer-container'>
        <nav className='nav-bar' data-cy='nav-bar'>
          <NavLink to='/'>
            <img className='logo' src={logo} data-cy ='logo' alt='logo'/>
          </NavLink>
        </nav>
        <p className='footer-text' data-cy='footer-text'>&#169; <a href='https://github.com/ajkrumholz/seekr' target='_blank' rel='noreferrer'>A.J. Krumholz</a> & <a href='https://github.com/stephanieguzm/seekr-ui' target='_blank' rel='noreferrer'>Stephanie Guzman</a></p>
      </footer>
    </div>
  );
}

export default App
