import * as React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { StudentsListPage } from './student/studentsList/StudentsListPage';
import { NewStudent } from './student/NewStudent';

export class App extends React.Component<any, any> {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={StudentsListPage} />
                <Route path="students" component={StudentsListPage} />
                <Route path="students/new" component={NewStudent} />
            </Router>
        );
    }
}
