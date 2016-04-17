import * as React from 'react';
import * as uuid from 'node-uuid';
import * as _ from 'lodash';
import { Button } from 'react-bootstrap';
import { ConfirmationModal } from './../../common/ConfirmationModal';
import { LayoutPage } from './../../common/LayoutPage';
import { IStudentModel } from './../IStudentModel';
import { StudentsList } from './StudentsList';

interface IStudentsListPageState {
    searchTerm: string;
    students: IStudentModel[];
    studentToRemove: IStudentModel;
}

export class StudentsListPage extends React.Component<any, IStudentsListPageState> {
    private confirmationModal: ConfirmationModal;
    
    constructor() {
        super();
        
        this.state = {
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
                <StudentsList 
                    students={this.getFilteredStudents()} 
                    onSearch={this.changeSearchTerm}
                    onRemove={this.confirmStudentRemoval}
                />
                <ConfirmationModal 
                    text="Do you realy want to delete this item?"
                    ref={(thisElement) => this.confirmationModal = thisElement}
                    onPositiveAnswer={this.removeStudent} 
                    onNegativeAnswer={this.clearRemovalStudentFromState}
                />
            </LayoutPage>
        );
    }
    
    changeSearchTerm = (searchTerm: string) => {        
        const updatedState = _.assign({}, this.state, {
            searchTerm,
        }) as IStudentsListPageState;
        
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
    
    confirmStudentRemoval = (studentToRemove: IStudentModel): void => {
        const newState = _.assign({}, this.state, { 
            studentToRemove 
        }) as IStudentsListPageState;
        
        this.setState(newState);
        
        this.confirmationModal.show();
    }
    
    clearRemovalStudentFromState = (): void => {
        const newState = _.assign({}, this.state, { 
            studentToRemove: null 
        }) as IStudentsListPageState;
        
        this.setState(newState);
    }
    
    removeStudent = (): void => {
        const index = this.state.students.indexOf(this.state.studentToRemove);
        
        const newState = _.assign({}, this.state, {
            studentToRemove: null,
            students: [
                ...this.state.students.slice(0, index),
                ...this.state.students.slice(index + 1)
            ]
        }) as IStudentsListPageState;
        
        this.setState(newState);        
        this.confirmationModal.hide();
    }
}
