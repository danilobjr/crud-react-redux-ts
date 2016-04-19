import * as React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { LayoutPage } from './../../common/LayoutPage';

export class StudentDetailsPage extends React.Component<any, any> {
    render() {
        return (
            <LayoutPage title="Get student name from router">
                <Row>
                    <Col md={12}>
                        <Row>
                            <Col md={12}>
                                <label>Registration Number</label>
                                <p>123456789</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <label>Name</label>
                                <p>Fulano</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <label>Registered?</label>
                                <p>Yes</p>
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
}