import * as React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Button, Table, MenuItem } from 'react-bootstrap';
import { LayoutPage } from './../common/LayoutPage';

export class StudentsListPage extends React.Component<any, any> {
    render() {        
        return (
            <LayoutPage 
                title="Students"
                headerButton={<Button href="#/students/new"><span className="fa fa-plus"></span> Add New</Button>}
            >
                <div className="table-component">
                    <Row>
                        <Col md={12}>                                    
                            <div className="filter">                                
                                <input className="form-control" type="search" placeholder="Search" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
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
                                        <td><span className="fa fa-check-circle"></span></td>
                                        <td>123456789</td>
                                        <td>Foolaknow the Tall</td>
                                        <td>
                                            <Link to="/students/details/123456789">
                                                <span className="fa fa-search fa-fw"></span>
                                            </Link>
                                            <Link to="/students/edit/123456789">
                                                <span className="fa fa-pencil fa-fw"></span>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fa fa-check-circle"></span></td>
                                        <td>123456789</td>
                                        <td>Foolaknow the Tall</td>
                                        <td>
                                            <Link to="/students/details/123456789">
                                                <span className="fa fa-search fa-fw"></span>
                                            </Link>
                                            <Link to="/students/edit/123456789">
                                                <span className="fa fa-pencil fa-fw"></span>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fa fa-check-circle"></span></td>
                                        <td>123456789</td>
                                        <td>Foolaknow the Tall</td>
                                        <td>
                                            <Link to="/students/details/123456789">
                                                <span className="fa fa-search fa-fw"></span>
                                            </Link>
                                            <Link to="/students/edit/123456789">
                                                <span className="fa fa-pencil fa-fw"></span>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row> 
                </div>   
            </LayoutPage>
        );
    }
}
