import * as React from 'react';
import * as _ from 'lodash';
import { Link } from 'react-router';
import { Col, FormGroup, ControlLabel, FormControl, HelpBlock, Radio, Form, Button } from 'react-bootstrap';
import { FormButtons } from './../../common/FormButtons';
import { IStudentModel } from './../../../models/IStudentModel';

interface INewStudentFormProps {
    onSubmit: (newStudent: IStudentModel) => void;
}

interface INewStudentFormState extends IStudentModel {    
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
                            onInput={(e) => this.onInput('name', (e.target as HTMLInputElement).value)}
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
                            onChange={() => this.onInput('registered', true)}>Yes</Radio>
                        <Radio 
                            inline 
                            name="registered" 
                            onChange={() => this.onInput('registered', false)}>No</Radio>
                    </Col>
                </FormGroup>
                
                <FormButtons>
                    <Button bsStyle="primary" type="submit">Save</Button>
                    <Link className="btn btn-default" to="/students">Cancel</Link>
                </FormButtons>
            </Form>
        );
    }
    
    onInput = (studentProperty, value) => {
        const newState: IStudentModel = _.assign({}, this.state, { 
            [studentProperty]: value 
        }) as IStudentModel;
        
        this.setState(newState);
    }
    
    onSubmit = (e) => {
        e.preventDefault();        
        this.props.onSubmit(this.state);
    }
}