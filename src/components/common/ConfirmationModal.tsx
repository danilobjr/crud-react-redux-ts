import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface IConfirmationModalProps {
    text: string;
    onPositiveAnswer: () => void;
    onNegativeAnswer?: () => void;
}

interface IConfirmationModalState {
    showModal: boolean;
}

export class ConfirmationModal extends React.Component<IConfirmationModalProps, IConfirmationModalState> {
    constructor(props) {
        super(props);
        
        this.state = {
            showModal: false
        };
    }
    
    render() {
        return (
            <Modal show={this.state.showModal} onHide={this.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{this.props.text}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.onPositiveAnswer}>Yes</Button>
                    <Button onClick={this.onNegativeAnswer}>No</Button>
                </Modal.Footer>
            </Modal>            
        );
    }
    
    show() {
        this.setState({ showModal: true });
    }
    
    hide = (): void => {
        this.setState({ showModal: false });
    }
    
    onPositiveAnswer = (): void => {
        this.props.onPositiveAnswer();
    }
    
    onNegativeAnswer = (): void => {
        this.hide();
        this.props.onNegativeAnswer();
    }
}