import * as React from 'react';
import * as _ from 'lodash';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { LayoutPage } from './../../common/LayoutPage';
import { IStudentModel } from './../../../models';

interface IPageProps {
    student: IStudentModel;
}

class Page extends React.Component<IPageProps, any> {
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

const mapStateToProps = (state, props) => {
    const student = _.find<IStudentModel>(state.students, s => s.registrationNumber === props.params.registrationNumber);
    
    return {
        student
    };
};

export const StudentDetailsPage = connect(mapStateToProps)(Page);