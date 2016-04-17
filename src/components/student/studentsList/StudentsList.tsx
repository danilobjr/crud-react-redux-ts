import * as React from 'react';
import { Link } from 'react-router';
import { Table } from './../../common/Table';
import { IStudentModel } from './../IStudentModel';

interface IStudentsTableListProps {
    students: IStudentModel[];
    onSearch: (searchTerm: string) => void;
    onRemove: (studentToRemove: IStudentModel) => void;
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
                    {this.renderTableRows()}
                </tbody>
            </Table>
        );
    }
    
    renderTableRows() {
        const thereIsNoStudents = _.isEmpty(this.props.students);
        
        if (thereIsNoStudents) {
            return [
                <tr key="0">
                    <td className="text-center" colSpan="4">
                        Empty data
                    </td>
                </tr>
            ];
        }
        
        return this.props.students.map(student => {
            var registrationIconClass = this.getRegistrationIconClass(student.registered);
            
            return (
                <tr key={student.registrationNumber}>
                    <td><span className={registrationIconClass}></span></td>
                    <td>{student.name}</td>
                    <td>{student.registrationNumber}</td>
                    <td>
                        <Link to={`/students/details/${student.registrationNumber}`}>
                            <span className="fa fa-search fa-fw"></span>
                        </Link>
                        <Link to={`/students/edit/${student.registrationNumber}`}>
                            <span className="fa fa-pencil fa-fw"></span>
                        </Link>
                        <a href="#" onClick={() => this.onRemove(student)}>
                            <span className="fa fa-times fa-fw"></span>
                        </a>
                    </td>
                </tr>
            );
        });
    }
    
    getRegistrationIconClass(isStudentRegistered: boolean) {
        var registrationIconClass = ['fa'];
            (isStudentRegistered) 
                ? registrationIconClass.push('fa-check-circle')
                : registrationIconClass.push('fa-exclamation-circle');
                
        return registrationIconClass.join(' ');
    }
    
    onRemove(studentToRemove: IStudentModel) {
        this.props.onRemove(studentToRemove);
    };
}
