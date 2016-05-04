import * as React from 'react';
import { Link } from 'react-router';
import { Table } from './../../common';
import { IStudent } from './../../../models';

interface IStudentItemProps {
    student: IStudent;
    onRemove: (studentToRemove: IStudent) => void;
}

export class StudentItem extends React.Component<IStudentItemProps, any> {
    render() {
        var registrationIconClass = this.getRegistrationIconClass(this.props.student.registered);
        
        return (
            <tr>
                <td><span className={registrationIconClass}></span></td>
                <td>{this.props.student.name}</td>
                <td>{this.props.student.registrationNumber}</td>
                <td>
                    <Link to={`/students/details/${this.props.student.id}`}>
                        <span className="fa fa-search fa-fw"></span>
                    </Link>
                    <Link to={`/students/edit/${this.props.student.id}`}>
                        <span className="fa fa-pencil fa-fw"></span>
                    </Link>
                    <a href="#" onClick={() => this.onRemove(this.props.student)}>
                        <span className="fa fa-times fa-fw"></span>
                    </a>
                </td>
            </tr>
        );
    }
    
    getRegistrationIconClass(isStudentRegistered: boolean) {
        var registrationIconClass = ['fa'];
            (isStudentRegistered) 
                ? registrationIconClass.push('fa-check-circle')
                : registrationIconClass.push('fa-exclamation-circle');
                
        return registrationIconClass.join(' ');
    }
    
    onRemove(studentToRemove: IStudent) {
        this.props.onRemove(studentToRemove);
    };
}
