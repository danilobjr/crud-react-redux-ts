import * as React from 'react';
import * as Redux from 'redux';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { LayoutPage } from './../../common';
import { IStudent, IState } from './../../../models';
import { StudentEditForm } from './StudentEditForm';
import { DataSource } from './../../../dataSource';
import { updateStudentOnServer, getStudentFromServerToEdit } from './../../../flux/student';

interface IPageProps {
    studentId: string;
    student: IStudent;
    getStudentFromServerToEdit: (studentId: string) => void;
    updateStudentOnServer: (student: IStudent) => void;
}

interface IPageState {
    student: IStudent;
}

class Page extends React.Component<IPageProps, IPageState> {    
    componentDidMount() {
        
        this.props.getStudentFromServerToEdit(this.props.studentId);
    }
    
    render() {
        const isStudentRegistered = this.props.student.registered;
        
        return (
            <LayoutPage title={this.props.student.name} subtitle="student edition">
                <StudentEditForm student={this.props.student} onSubmit={this.onFormSubmit} />
            </LayoutPage>
        );
    }
    
    onFormSubmit = (student: IStudent): void => {
        this.props.updateStudentOnServer(student);
    }
}

const mapStateToProps = (state: IState, props) => ({ 
    studentId: props.params.id,
    student: state.studentToEdit
});

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
    getStudentFromServerToEdit: (studentId: string) => dispatch(getStudentFromServerToEdit(studentId)),
    updateStudentOnServer: (student: IStudent) => dispatch(updateStudentOnServer(student))
});

export const StudentEditPage = connect(mapStateToProps, mapDispatchToProps)(Page);