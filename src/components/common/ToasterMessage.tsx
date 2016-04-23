import * as React from 'react';
import { connect } from 'react-redux';
import { ToasterMessageType } from './../../models/ToasterMessageType';
import { IMessage } from './../../models/IMessage';

enum ToasterMessagePosition {
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight    
}

interface IToasterMessageProps {
    message: IMessage;
    position?: ToasterMessagePosition;
}

interface ITostaerMessage {
    visible: boolean;
}

export class ToasterMessage extends React.Component<IToasterMessageProps, any> {
    constructor() {
        super();
        
        this.state = {
            visible: false
        };
    }
        
    render() {
        if (!this.props.message) {            
            return null;
        }
        
        return <div className={this.getClassName()}>{this.props.message.text}</div>
    }
    
    getClassName() {
        let className = ['toaster'];
        const toasterType = this.getDefaultTypeClass();
        className.push(toasterType);
               
        switch (this.props.position) {
            case ToasterMessagePosition.TopLeft:
                className.push('toaster-top-left');
                break;
            case ToasterMessagePosition.BottomLeft:
                className.push('toaster-bottom-left');
                break;
            case ToasterMessagePosition.BottomRight:
                className.push('toaster-bottom-right');
                break;
            default:
                className.push('toaster-top-right');
                break;
        }
        
        return className.join(' ');
    }
    
    getDefaultTypeClass() {
        return (this.props.message.type) ? `toaster-${ToasterMessageType[this.props.message.type].toLowerCase()}` : 'toaster-success';
    }
}