import * as React from 'react';
import * as _ from 'lodash';
import { Link } from 'react-router';
import { Col, FormGroup, ControlLabel, FormControl, HelpBlock, Radio, Form, Button } from 'react-bootstrap';
import { FormButtons } from './../../common';
import { IStudentModel } from './../../../models';

interface INewStudentFormProps {
    onSubmit: (newStudent: IStudentModel) => void;
}

interface INewStudentFormState {
    student: IStudentModel;
}

export class NewStudentForm extends React.Component<INewStudentFormProps, INewStudentFormState> {
    render() {
        return (
            <Form horizontal onSubmit={this.onSubmit}>
                <FormGroup controlId="name">
                    <Col md={2} componentClass={ControlLabel}>Name</Col>
                    <Col md={10}>
                        <FormControl
                            type="text"
                            placeholder="Student name"
                            onInput={(e) => this.onChange('name', (e.target as HTMLInputElement).value)}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Message</HelpBlock>
                    </Col>
                </FormGroup>
                
                <FormGroup controlId="registered">
                    <Col md={2} componentClass={ControlLabel}>Registered?</Col>                                
                    <Col md={10}>
                        <Radio 
                            inline 
                            name="registered"
                            onChange={() => this.onChange('registered', true)}>Yes</Radio>
                        <Radio 
                            inline 
                            name="registered" 
                            onChange={() => this.onChange('registered', false)}>No</Radio>
                    </Col>
                </FormGroup>
                
                <FormButtons>
                    <Button bsStyle="primary" type="submit">Save</Button>
                    <Link className="btn btn-default" to="/students">Cancel</Link>
                </FormButtons>
            </Form>
        );
    }
    
    onChange = (studentProperty: string, value) => {
        const student: IStudentModel = _.assign({}, this.state.student, { 
            [studentProperty]: value 
        }) as IStudentModel;
        
        this.setState({ student });
    }
    
    onSubmit = (e) => {
        e.preventDefault();        
        this.props.onSubmit(this.state.student);
    }
}