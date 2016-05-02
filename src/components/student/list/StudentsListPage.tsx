import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { LayoutPage, ConfirmationModal } from './../../common';
import { IStudentViewModel, IState } from './../../../models';
import { StudentsList } from './StudentsList';
import { getAllStudents, changeSearchTerm, setStudentToRemove, removeStudentOnServer } from './../../../flux/student/actions';
import { toastr } from 'react-redux-toastr';

interface IPageState {
    searchTerm: string;
    students: IStudentViewModel[];
    studentToRemove: IStudentViewModel;
}

class Page extends React.Component<any, IPageState> {
    private confirmationModal: ConfirmationModal;
    
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getAllStudents());
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
        const { searchTerm, students } = this.props;
        
        if (_.isEmpty(searchTerm)) {
            return students;
        }
        
        const filteredStudents = students.filter(student => {
            return student.name.toLowerCase().search(searchTerm) > -1 || 
                   student.registrationNumber.toLowerCase().search(searchTerm) > -1;
        });
        
        return filteredStudents;
    }
    
    confirmStudentRemoval = (studentToRemove: IStudentViewModel): void => {        
        this.props.dispatch(setStudentToRemove(studentToRemove));
        
        this.confirmationModal.show();
    }
    
    clearRemovalStudentFromState = (): void => {
        this.props.dispatch(setStudentToRemove(null));
    }
    
    removeStudent = (): void => {        
        this.confirmationModal.hide();
        this.props.dispatch(removeStudentOnServer(this.props.studentToRemove.id));
    }
}

const mapStateToProps = (state: IState) => ({
    talkingToTheServer: state.talkingToTheServer,
    searchTerm: state.searchTerm,
    studentToRemove: state.studentToRemove,
    students: state.students
});

export const StudentsListPage = connect(mapStateToProps)(Page);