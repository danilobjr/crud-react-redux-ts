import * as React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { LayoutPage } from './../../common';
import { IStudentModel, IState } from './../../../models';
import { StudentEditForm } from './StudentEditForm';

interface IComponentProps {
    student: IStudentModel;
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
        console.log(student);
        console.warn('TODO: go back to student list; show toastr; actions; reducer');
    }
}

const mapStateToProps = (state: IState, props) => {
    const student = _.find<IStudentModel>(state.students, student => {
        return student.registrationNumber === props.params.registrationNumber
    });    
    
    return { student };
};

export const StudentEditPage = connect(mapStateToProps)(StudentEditPageComponent);