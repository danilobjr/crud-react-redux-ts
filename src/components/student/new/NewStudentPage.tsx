import * as React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { LayoutPage } from './../../common/LayoutPage';
import { NewStudentForm } from './NewStudentForm';
import { IStudentModel } from './../../../models/IStudentModel';
import { addStudent } from './../../../flux/student/actions';

class Page extends React.Component<any, any> {    
    render() {
        return (
            <LayoutPage title="New Student">
                <Row>
                    <Col md={12}>
                        <NewStudentForm onSubmit={this.onFormSubmit} />
                    </Col>
                </Row>
            </LayoutPage>
        );
    }
    
    onFormSubmit = (newStudent: IStudentModel) => {
        this.props.dispatch(addStudent(newStudent));
        hashHistory.push('/students');
    }
}

export const NewStudentPage = connect()(Page);
