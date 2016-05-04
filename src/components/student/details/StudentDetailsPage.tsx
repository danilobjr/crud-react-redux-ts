import * as React from 'react';
import * as _ from 'lodash';
import * as Redux from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { LayoutPage } from './../../common';
import { IStudent, IState } from './../../../models';
import { getStudentFromServerToSeeDetails } from './../../../flux/student';

interface IPageProps {
    studentId: string;
    student: IStudent;
    getStudentFromServerToSeeDetails: (id: string) => void;
}

class Page extends React.Component<IPageProps, any> {    
    componentDidMount() {
        this.props.getStudentFromServerToSeeDetails(this.props.studentId);
    }
    
    render() {
        return (
            <LayoutPage 
                title={this.props.student.name}
                subtitle="student details"
            >
                <Row>
                    <Col md={12}>
                        <Row>
                            <Col md={12}>
                                <label>Registration Number</label>
                                <p>{this.props.student.registrationNumber}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <label>Name</label>
                                <p>{this.props.student.name}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <label>Registered?</label>
                                <p>{this.registeredToString()}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Link className="btn btn-default" to="/students">Back</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </LayoutPage>
        );
    }
    
    registeredToString() {
        return this.props.student.registered ? 'Yes' : 'No';
    }
}

const mapStateToProps = (state: IState, props) => ({    
    studentId: props.params.id,
    student: state.studentToSeeDetails
});

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
    getStudentFromServerToSeeDetails: (studentId: string) => dispatch(getStudentFromServerToSeeDetails(studentId))
});

export const StudentDetailsPage = connect(mapStateToProps, mapDispatchToProps)(Page);