import * as React from 'react';
import { Link } from 'react-router';
import { Col, Form, FormGroup, FormControl, ControlLabel, 
         Radio, Button } from 'react-bootstrap';
import { FormButtons } from './../../common';
import { IStudentModel } from './../../../models';

interface IComponentProps {
    student: IStudentModel;
    onSubmit: (student: IStudentModel) => void;
}

interface IComponentState {
    student: IStudentModel;
}

export class StudentEditForm extends React.Component<IComponentProps, IComponentState> {
    constructor(props) {
        super(props);
    
        this.state = {
            student: this.props.student
        };
    }
    
    render() {
        const isStudentRegistered = this.state.student.registered;
        
        return (
            <Form horizontal onSubmit={this.onSubmit}>
                <FormGroup controlId="name">
                    <Col componentClass={ControlLabel} md={2}>Name</Col>
                    <Col md={10}>
                        <FormControl 
                            placeholder="Another name" 
                            value={this.state.student.name}
                            onChange={(e) => this.onChange('name', (e.target as HTMLInputElement).value)} 
                        />
                    </Col>
                </FormGroup>
                
                <FormGroup controlId="registered">
                    <Col componentClass={ControlLabel} md={2}>Registered?</Col>
                    <Col md={10}>
                        <Radio 
                            name="registered" 
                            checked={isStudentRegistered}
                            onChange={(e) => this.onChange('registered', true)}
                        >Yes</Radio>
                        <Radio 
                            name="registered" 
                            checked={!isStudentRegistered}
                            onChange={(e) => this.onChange('registered', false)}
                        >No</Radio>
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
    
    onSubmit = (e): void => {
        e.preventDefault();        
        this.props.onSubmit(this.state.student);
    }
}