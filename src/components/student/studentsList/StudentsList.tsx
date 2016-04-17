import * as React from 'react';
import { Link } from 'react-router';
import { Table } from './../../common/Table';
import { IStudentModel } from './../IStudentModel';

interface IStudentsTableListProps {
    students: IStudentModel[];
    onSearch: (searchTerm: string) => void;
}

export class StudentsList extends React.Component<IStudentsTableListProps, any> {
    render() {        
        return (
            <Table striped hover showSearch onSearch={this.props.onSearch}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Registration Number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.students.map(student => {
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
        );
    }
}
