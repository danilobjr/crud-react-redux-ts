import * as React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Button, Table, MenuItem } from 'react-bootstrap';
import * as uuid from 'node-uuid';
import { LayoutPage } from './../common/LayoutPage';
import { IStudentModel } from './IStudentModel';

interface IStudentsListPageState {
    filter: string;
    students: IStudentModel[];
}

export class StudentsListPage extends React.Component<any, IStudentsListPageState> {
    constructor() {
        super();
        
        this.state = {
            filter: '',
            students: [
                {
                    registrationNumber: uuid.v4(),
                    name: 'Fulano',
                    registered: true
                },
                {
                    registrationNumber: uuid.v4(),
                    name: 'Cicrano',
                    registered: false
                },
                {
                    registrationNumber: uuid.v4(),
                    name: 'Silva',
                    registered: true
                }
            ]
        };
    }
    
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
                                    {this.state.students.map(student => {
                                        var registrationIconClass = ['fa'];
                                        (student.registered) 
                                            ? registrationIconClass.push('fa-check-circle')
                                            : registrationIconClass.push('fa-exclamation-circle');
                                        
                                        return (                                            
                                            <tr key={student.registrationNumber}>
                                                <td><span className={registrationIconClass.join(' ')}></span></td>
                                                <td>{student.name}</td>
                                                <td>{student.registrationNumber}</td>
                                                <td>
                                                    <Link to={`/students/details/${student.registrationNumber}`}>
                                                        <span className="fa fa-search fa-fw"></span>
                                                    </Link>
                                                    <Link to={`/students/edit/${student.registrationNumber}`}>
                                                        <span className="fa fa-pencil fa-fw"></span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row> 
                </div>   
            </LayoutPage>
        );
    }
}
