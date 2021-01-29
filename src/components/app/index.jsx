import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';

import Login from '../login';
import About from '../about';
import Posts from '../posts';

export default class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <div>
            <div>Hello router</div>
            <Router>
                <div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink to="/" className={'nav-link'} activeClassName={'active'} >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={'nav-link'} activeClassName={'active'}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/posts" className={'nav-link'} activeClassName={'active'}>Posts</NavLink>
                        </li>
                    </ul>

                    <hr />

                    {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/posts">
                            <Posts />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>;
    }
}
