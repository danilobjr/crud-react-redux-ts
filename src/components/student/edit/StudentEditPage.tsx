import * as React from 'react';
import * as Redux from 'redux';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { LayoutPage } from './../../common';
import { IStudent, IState } from './../../../models';
import { StudentEditForm } from './StudentEditForm';
import { DataSource } from './../../../dataSource';
import { updateStudentOnServer, getStudentToEditionFromServer } from './../../../flux/student';

interface IPageProps {
    studentId: string;
    student: IStudent;
    dispatch: Redux.Dispatch;
}

interface IPageState {
    student: IStudent;
}

class Page extends React.Component<IPageProps, IPageState> {    
    componentDidMount() {
        const { dispatch, studentId } = this.props;
        dispatch(getStudentToEditionFromServer(studentId));
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
        this.props.dispatch(updateStudentOnServer(student));
    }
}

const mapStateToProps = (state: IState, props) => {
    const studentId = props.params.id;
    const studentToEdit = state.studentToEdit;
        
    return { 
        studentId,
        student: studentToEdit
    };
};

export const StudentEditPage = connect(mapStateToProps)(Page);