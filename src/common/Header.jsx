import React ,{Component} from 'react';
import Nav from './Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../components/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import Forgot from '../components/Forgot';

export class Header extends Component{
    render(){
        return ( 
            <Router>
            <div>
            <Nav/> 

           
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link  to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        
        <Switch>
        <Route exact path="/about" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot" component={Forgot} />

        </Switch>
      </div>
    </Router>

        )
    }
}

export default Header 