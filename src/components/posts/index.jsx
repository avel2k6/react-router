import React from 'react';
import {
    Switch, Route, useRouteMatch, Link, useHistory,
} from 'react-router-dom';
import Post from '../post';
import QueryCollector from '../queryCollector';
import StatefullComponent from '../statefullComponent';

const Posts = () => {
    const match = useRouteMatch();
    const history = useHistory();
    const updateQuery = (name) => () => {
        history.push({
            search: `?test=${name}`,
        });
    };

    return (<div>
        <h2>Posts</h2>
        <ul>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>
        <StatefullComponent>
            <hr/>
            <button
                className={'btn'}
                onClick={updateQuery('test')}
            >Обновить путь test</button>
            <button
                className={'btn'}
                onClick={updateQuery('help')}
            >Обновить путь help</button>
            <hr/>
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Post />
                </Route>
                <Route path={match.url}>
                    <h3>Please select a post.</h3>
                </Route>
            </Switch>
            <QueryCollector params={history.location}/>
        </StatefullComponent>
    </div>);
};

export default Posts;
