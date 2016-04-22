import * as React from 'react';
import { Col, FormGroup } from 'react-bootstrap';

interface IFormButtonsProps extends React.HTMLAttributes {
    noMargin?: boolean;
}

export class FormButtons extends React.Component<IFormButtonsProps, any> {    
    render() {
        return (
            <FormGroup {...this.props} className={this.getClassName()}>
                <Col md={10} mdOffset={2}>
                    {this.props.children}
                </Col>
            </FormGroup>
        );
    }
    
    getClassName() {
        let className = ['form-buttons'];        
        
        if (this.props.className) {
            className.push(...this.props.className.split(' '));
        }
        
        if (this.props.noMargin) {
            className.push('no-margin');
        }
        
        return className.join(' ');
    }
}