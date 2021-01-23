import './custom.css';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { useEffect, useState } from 'react'
import axios from 'axios'
import * as API from './constants/Config'

const App = (props) => {

  const [isLogin, setIsLogin] = useState(false)
  const checkLogin = async() => {

    let hours = 2; // Reset when storage is more than 24hours
    let now = new Date().getTime();
    let setupTime = localStorage.getItem('setupTime');
    if (setupTime == null) {
      localStorage.setItem('setupTime', now)
    } else {
      if (now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', now);
      }
    }
    let token = localStorage.getItem('token')
    if (token) {
      console.log("login")
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
      try {
        const response = await axios({
          method: 'GET',
          url: `${API.API_URL_2}admins/${token}`,
          headers
        })
        console.log(response)
        if (response.status === 200) {
          setIsLogin(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    checkLogin()
    console.log(isLogin)
  })

  const showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      })
    }
    return <Switch>{result}</Switch>;
  }

  return (
    <BrowserRouter>
      <div className="nav-md" >
        <div className="container body">
          {showContentMenus(routes)}
          {isLogin ? <Redirect from="*" to="/" /> : <Redirect from="*" to="/login" />}
        </div>
      </div>

    </BrowserRouter>
  );

}


export default App;
