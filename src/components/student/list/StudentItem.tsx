import * as React from 'react';
import { Link } from 'react-router';
import { Table } from './../../common/Table';
import { IStudentModel } from './../IStudentModel';

interface IStudentItemProps {
    student: IStudentModel;
    onRemove: (studentToRemove: IStudentModel) => void;
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
                    <Link to={`/students/details`}>
                        <span className="fa fa-search fa-fw"></span>
                    </Link>
                    <Link to={`/students/edit/${this.props.student.registrationNumber}`}>
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
    
    onRemove(studentToRemove: IStudentModel) {
        this.props.onRemove(studentToRemove);
    };
}
