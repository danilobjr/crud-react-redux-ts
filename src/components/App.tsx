import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { appReducer } from './appReducer';
import { StudentsListPage } from './student/list/StudentsListPage';
import { NewStudentPage } from './student/new/NewStudentPage';
import { StudentDetailsPage } from './student/details/StudentDetailsPage';

const initialState = {
    searchTerm: '',
    studentToRemove: null,
    students: [
        {
            registrationNumber: '11111',
            name: 'Fulano',
            registered: true
        },
        {
            registrationNumber: '22222',
            name: 'Cicrano',
            registered: false
        },
        {
            registrationNumber: '33333',
            name: 'Silva',
            registered: true
        },
        {
            registrationNumber: '44444',
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
                    <Route path="students/details/:registrationNumber" component={StudentDetailsPage} />                    
                </Router>
            </Provider>
        );
    }
}
