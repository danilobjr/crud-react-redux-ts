import * as React from 'react';
import { Link } from 'react-router';
import { Col, Form, FormGroup, FormControl, ControlLabel, 
         Radio, Button } from 'react-bootstrap';
import { FormButtons } from './../../common';
import { IStudentModel } from './../../../models';

interface IProps {
    student: IStudentModel;
}

export class StudentEditForm extends React.Component<IProps, any> {
    render() {
        const isStudentRegistered = this.props.student.registered;
        
        return (
            <Form horizontal>
                <FormGroup controlId="name">
                    <Col componentClass={ControlLabel} md={2}>Name</Col>
                    <Col md={10}>
                        <FormControl placeholder="Another name" value={this.props.student.name} />
                    </Col>
                </FormGroup>
                
                <FormGroup controlId="registered">
                    <Col componentClass={ControlLabel} md={2}>Registered?</Col>
                    <Col md={10}>
                        <Radio name="registered" checked={isStudentRegistered}>Yes</Radio>
                        <Radio name="registered" checked={!isStudentRegistered}>No</Radio>
                    </Col>
                </FormGroup>
                
                <FormButtons>
                    <Button bsStyle="primary">Save</Button>
                    <Link className="btn btn-default" to="/students">Cancel</Link>
                </FormButtons>
            </Form>
        );
    }
}