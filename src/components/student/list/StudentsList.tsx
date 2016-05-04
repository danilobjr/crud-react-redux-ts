import * as React from 'react';
import { IStudent } from './../../../models';
import { Link } from 'react-router';
import { Table } from './../../common';
import { StudentItem } from './StudentItem';

interface IStudentsListProps {
    students: IStudent[];
    onSearch: (searchTerm: string) => void;
    onRemove: (studentToRemove: IStudent) => void;
}

export class StudentsList extends React.Component<IStudentsListProps, any> {
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
            return (
                <StudentItem key={student.registrationNumber} student={student} onRemove={this.onRemove} />
            );
        });
    }
    
    onRemove = (studentToRemove: IStudent) => {
        this.props.onRemove(studentToRemove);
    };
}
