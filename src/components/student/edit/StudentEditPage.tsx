import * as React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { LayoutPage } from './../../common';
import { IStudentModel, IState } from './../../../models';
import { StudentEditForm } from './StudentEditForm';

interface IProps {
    student: IStudentModel;
}

class StudentEditPageComponent extends React.Component<IProps, any> {
    render() {
        const isStudentRegistered = this.props.student.registered;
        
        return (
            <LayoutPage title={this.props.student.name} subtitle= "student edition">
                <StudentEditForm student={this.props.student} />
            </LayoutPage>
        );
    }
}

const mapStateToProps = (state: IState, props) => {
    const student = _.find<IStudentModel>(state.students, student => {
        return student.registrationNumber === props.params.registrationNumber
    });    
    
    return { student };
};

export const StudentEditPage = connect(mapStateToProps)(StudentEditPageComponent);