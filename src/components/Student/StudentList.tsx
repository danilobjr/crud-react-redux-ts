import * as React from 'react';
import { Grid, Row, Col, Button, Table, Glyphicon } from 'react-bootstrap';
import { LayoutPage } from './../common/LayoutPage';

export class StudentList extends React.Component<any, any> {
    render() {
        return (
            <LayoutPage 
                title="Students"
                headerButton={<Button bsStyle="primary">Add New</Button>}
            >
                <Row>
                    <Col sm={12}>
                        <Table hover striped>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Registration Number</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox"/></td>
                                    <td>123456789</td>
                                    <td>Foolaknow the Tall</td>
                                    <td><span className="fa fa-gear"></span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox"/></td>
                                    <td>123456789</td>
                                    <td>Foolaknow the Tall</td>
                                    <td><span className="fa fa-gear"></span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox"/></td>
                                    <td>123456789</td>
                                    <td>Foolaknow the Tall</td>
                                    <td><span className="fa fa-gear"></span></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>    
            </LayoutPage>
        );
    }
}
