import * as React from 'react';
import * as Redux from 'redux';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { LayoutPage } from './../../common';
import { IStudentViewModel, IState } from './../../../models';
import { StudentEditForm } from './StudentEditForm';
import { updateStudentOnServer } from './../../../flux/student';

interface IComponentProps {
    student: IStudentViewModel;
    dispatch: Redux.Dispatch;
}

class StudentEditPageComponent extends React.Component<IComponentProps, any> {
    render() {
        const isStudentRegistered = this.props.student.registered;
        
        return (
            <LayoutPage title={this.props.student.name} subtitle= "student edition">
                <StudentEditForm student={this.props.student} onSubmit={this.onFormSubmit} />
            </LayoutPage>
        );
    }
    
    onFormSubmit = (student: IStudentViewModel): void => {
        this.props.dispatch(updateStudentOnServer(student));
    }
}

const mapStateToProps = (state: IState, props) => {
    const student = _.find<IStudentViewModel>(state.students, student => {
        return student.registrationNumber === props.params.registrationNumber
    });    
    
    return { student };
};

export const StudentEditPage = connect(mapStateToProps)(StudentEditPageComponent);