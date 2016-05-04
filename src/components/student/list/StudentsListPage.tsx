import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { LayoutPage, ConfirmationModal } from './../../common';
import { IStudent, IState } from './../../../models';
import { StudentsList } from './StudentsList';
import { 
    getAllStudentsFromServer, changeSearchTerm, 
    setStudentToRemove, removeStudentOnServer 
} from './../../../flux/student/actions';
import { toastr } from 'react-redux-toastr';

interface IPageState {
    searchTerm: string;
    students: IStudent[];
    studentToRemove: IStudent;
}

class Page extends React.Component<any, IPageState> {
    private confirmationModal: ConfirmationModal;
    
    componentDidMount() {
        this.props.getAllStudentsFromServer();
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
        this.props.changeSearchTerm(searchTerm);
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
    
    confirmStudentRemoval = (studentToRemove: IStudent): void => {        
        this.props.setStudentToRemove(studentToRemove);        
        this.confirmationModal.show();
    }
    
    clearRemovalStudentFromState = (): void => {
        this.props.clearStudentToRemoveOnState();
    }
    
    removeStudent = (): void => {        
        this.confirmationModal.hide();
        this.props.removeStudentOnServer(this.props.studentToRemove.id);
    }
}

const mapStateToProps = (state: IState) => ({
    searchTerm: state.searchTerm,
    studentToRemove: state.studentToRemove,
    students: state.students
});

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
    changeSearchTerm: (searchTerm: string) => dispatch(changeSearchTerm(searchTerm)),
    getAllStudentsFromServer: () => dispatch(getAllStudentsFromServer()),
    removeStudentOnServer: (studentId: string) => dispatch(removeStudentOnServer(studentId)),
    setStudentToRemove: (studentToRemove: IStudent) => dispatch(setStudentToRemove(studentToRemove)),
    clearStudentToRemoveOnState: () => dispatch(setStudentToRemove(null))
});

export const StudentsListPage = connect(mapStateToProps, mapDispatchToProps)(Page);