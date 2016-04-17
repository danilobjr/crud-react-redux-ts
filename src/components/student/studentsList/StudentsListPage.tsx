import * as React from 'react';
import { Button } from 'react-bootstrap';
import * as uuid from 'node-uuid';
import { LayoutPage } from './../../common/LayoutPage';
import { IStudentModel } from './../IStudentModel';
import { StudentsList } from './StudentsList';
import * as _ from 'lodash';

interface IStudentsListPageState {
    searchTerm: string;
    students: IStudentModel[];
}

export class StudentsListPage extends React.Component<any, IStudentsListPageState> {
    constructor() {
        super();
        
        this.state = {
            searchTerm: '',
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
                }
            ]
        };
    }
    
    render() {        
        return (
            <LayoutPage 
                title="Students"
                headerButton={<Button href="#/students/new"><span className="fa fa-plus"></span> Add New</Button>}
            >
                <StudentsList students={this.getFilteredStudents()} onSearch={this.changeSearchTerm} />
            </LayoutPage>
        );
    }
    
    changeSearchTerm = (searchTerm: string) => {       
        const updatedState: IStudentsListPageState = {
            searchTerm,
            students: this.state.students
        }
        
        this.setState(updatedState);
    }
    
    getFilteredStudents() {        
        const searchTerm = this.state.searchTerm;        
        
        if (_.isEmpty(searchTerm)) {
            return this.state.students;
        }
        
        const filteredStudents = this.state.students.filter(student => {            
            return student.name.toLowerCase().search(searchTerm) > -1 || 
                   student.registrationNumber.toLowerCase().search(searchTerm) > -1;
        });
        
        return filteredStudents;
    }
}
