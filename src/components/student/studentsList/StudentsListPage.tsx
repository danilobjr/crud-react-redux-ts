import * as React from 'react';
import * as uuid from 'node-uuid';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import { ConfirmationModal } from './../../common/ConfirmationModal';
import { LayoutPage } from './../../common/LayoutPage';
import { IStudentModel } from './../IStudentModel';
import { StudentsList } from './StudentsList';
import { changeSearchTerm, setStudentToRemove, removeStudent } from './actions';

interface IPageState {
    searchTerm: string;
    students: IStudentModel[];
    studentToRemove: IStudentModel;
}

class Page extends React.Component<any, IPageState> {
    private confirmationModal: ConfirmationModal;
    private dispatch = this.props.dispatch;
    private students: IStudentModel[];
    private studentToRemove: IStudentModel;
    private searchTerm: string;
    
    constructor(props) {
        super(props);
        
        this.dispatch = props.dispatch;
        this.students = props.students;
        this.studentToRemove = props.studentToRemove;
        this.searchTerm = props.searchTerm;
    }
    
    render() {        
        return (
            <LayoutPage 
                title="Students"
                headerButton={<Link className="btn btn-primary" to="/students/new"><span className="fa fa-plus"></span> Add New</Link>}
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
        this.props.dispatch(changeSearchTerm(searchTerm));
    }
    
    getFilteredStudents() {        
        if (_.isEmpty(this.searchTerm)) {
            return this.students;
        }
        
        const filteredStudents = this.students.filter(student => {
            return student.name.toLowerCase().search(this.searchTerm) > -1 || 
                   student.registrationNumber.toLowerCase().search(this.searchTerm) > -1;
        });
        
        return filteredStudents;
    }
    
    confirmStudentRemoval = (studentToRemove: IStudentModel): void => {        
        this.dispatch(setStudentToRemove(studentToRemove));
        
        this.confirmationModal.show();
    }
    
    clearRemovalStudentFromState = (): void => {
        this.dispatch(setStudentToRemove(null));
    }
    
    removeStudent = (): void => {        
        this.dispatch(removeStudent(this.studentToRemove.registrationNumber));
            
        this.confirmationModal.hide();
    }
}

const mapStateToProps = (state) => ({
    searchTerm: state.searchTerm,
    studentToRemove: state.studentToRemove,
    students: state.students
});

export const StudentsListPage = connect(mapStateToProps)(Page);