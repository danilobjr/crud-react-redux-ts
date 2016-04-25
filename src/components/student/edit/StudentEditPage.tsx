import * as React from 'react';
import * as Redux from 'redux';
import * as _ from 'lodash';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { LayoutPage } from './../../common';
import { IStudentModel, IState } from './../../../models';
import { StudentEditForm } from './StudentEditForm';
import { editStudent } from './../../../flux/student/actions';

interface IComponentProps {
    student: IStudentModel;
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
    
    onFormSubmit = (student: IStudentModel): void => {
        this.props.dispatch(editStudent(student));
        hashHistory.push('/students');
        toastr.success('Student updated');
    }
}

const mapStateToProps = (state: IState, props) => {
    const student = _.find<IStudentModel>(state.students, student => {
        return student.registrationNumber === props.params.registrationNumber
    });    
    
    return { student };
};

export const StudentEditPage = connect(mapStateToProps)(StudentEditPageComponent);