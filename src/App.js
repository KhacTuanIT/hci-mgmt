import './custom.css';
import './App.css';
import SideMenu from './components/SideMenu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavTop from './components/NavTop';
import routes from './routes';
import { Component } from 'react';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container body">
          <div className="main_container">
            <SideMenu />
            <div class="clearfix"></div>
            <NavTop />
            <div class="clearfix"></div>
            {this.showContentMenus(routes)}
            <div class="clearfix"></div>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
  showContentMenus = (routes) => {
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
}


export default App;
