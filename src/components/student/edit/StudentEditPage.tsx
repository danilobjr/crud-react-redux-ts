import * as React from 'react';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { LayoutPage } from './../../common/LayoutPage';
import { IStudentModel, IState } from './../../../models';

interface IProps {
    student: IStudentModel;
}

class StudentEditPageComponent extends React.Component<IProps, any> {
    render() {
        return (
            <LayoutPage title={this.props.student.name} subtitle= "student edition">
                <p>{this.props.student.registrationNumber}</p>
            </LayoutPage>
        );
    }
}

const mapStateToProps = (state: IState, props) => {
    const student = _.find<IStudentModel>(state.students, student => student.registrationNumber === props.params.registrationNumber);    
    return { student };
};

export const StudentEditPage = connect(mapStateToProps)(StudentEditPageComponent);