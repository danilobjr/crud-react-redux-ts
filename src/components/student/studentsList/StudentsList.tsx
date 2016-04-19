import * as React from 'react';
import { IStudentModel } from './../IStudentModel';
import { Link } from 'react-router';
import { Table } from './../../common/Table';
import { StudentItem } from './StudentItem';

interface IStudentsListProps {
    students: IStudentModel[];
    onSearch: (searchTerm: string) => void;
    onRemove: (studentToRemove: IStudentModel) => void;
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
    
    onRemove = (studentToRemove: IStudentModel) => {
        this.props.onRemove(studentToRemove);
    };
}
