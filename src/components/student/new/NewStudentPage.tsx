import * as React from 'react';
import { 
    Row, Col, FormGroup, 
    ControlLabel, FormControl, HelpBlock,
    Radio, Form, Button
} from 'react-bootstrap';
import { LayoutPage } from './../../common/LayoutPage';
import { FormButtons } from './../../common/FormButtons';

export class NewStudentPage extends React.Component<any, any> {
    render() {
        String;
        return (
            <LayoutPage title="New Student">
                <Row>
                    <Col md={12}>
                        <Form>
                            <FormGroup controlId="name">
                                <ControlLabel>Name</ControlLabel>
                                <FormControl
                                    type="text"
                                    value="Hello"
                                    placeholder="Enter text"
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Message</HelpBlock>
                            </FormGroup>
                            
                            <FormGroup validationState="error">
                                <ControlLabel>Registered?</ControlLabel>
                                <div>
                                    <Radio name="registered" inline>Yes</Radio>
                                    <Radio name="registered" inline>No</Radio>
                                </div>
                            </FormGroup>
                            
                            <FormButtons>
                                <Button bsStyle="primary" type="submit">Save</Button>
                                <Button>Cancel</Button>
                            </FormButtons>
                        </Form>
                    </Col>
                </Row>
            </LayoutPage>
        );
    }
}
