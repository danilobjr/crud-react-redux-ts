import * as React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { StudentList } from './Student/StudentList';
import { NewStudent } from './Student/NewStudent';

export class App extends React.Component<any, any> {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={StudentList} />
                <Route path="students" component={StudentList} />
                <Route path="students/new" component={NewStudent} />
            </Router>
        );
    }
}
