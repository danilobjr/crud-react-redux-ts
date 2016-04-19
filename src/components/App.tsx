import * as uuid from 'node-uuid';
import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { appReducer } from './appReducer';
import { StudentsListPage } from './student/list/StudentsListPage';
import { NewStudentPage } from './student/new/NewStudentPage';

const initialState = {
    searchTerm: '',
    studentToRemove: null,
    students: [
        {
            registrationNumber: uuid.v4(),
            name: 'Fulano',
            registered: true
        },
        {
            registrationNumber: uuid.v4(),
            name: 'Cicrano',
            registered: false
        },
        {
            registrationNumber: uuid.v4(),
            name: 'Silva',
            registered: true
        },
        {
            registrationNumber: uuid.v4(),
            name: 'Fernanda',
            registered: true
        }
    ]
};

const store = createStore(appReducer, initialState);
const history = syncHistoryWithStore(hashHistory, store);

export class App extends React.Component<any, any> {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={StudentsListPage} />
                    <Route path="students" component={StudentsListPage} />
                    <Route path="students/new" component={NewStudentPage} />
                </Router>
            </Provider>
        );
    }
}
