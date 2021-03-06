import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Header from './components/Header'
import Translate from './components/Translate'
import Chatbot from './components/Chatbot'
import Error from './components/Error'
import {useContext} from 'react'
import {ThemeContext} from './context/ThemeContext'

const App = () => {
  const {light, dark, isToggle} = useContext(ThemeContext)
  return (
    <Router>
      <div className='App' style={isToggle ? dark : light}>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Translate} />
            <Route path='/chat' component={Chatbot} />
            <Route path='/*' component={Error} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
