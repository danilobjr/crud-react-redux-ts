import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { LayoutPage } from './../../common';
import { NewStudentForm } from './NewStudentForm';
import { IStudent } from './../../../models';
import { saveStudentOnServer } from './../../../flux/student';

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
    
    onFormSubmit = (newStudent: IStudent) => {
        this.props.saveStudentOnServer(newStudent);
    }
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
    saveStudentOnServer: (newStudent: IStudent) => dispatch(saveStudentOnServer(newStudent))
});

export const NewStudentPage = connect(mapStateToProps, mapDispatchToProps)(Page);
