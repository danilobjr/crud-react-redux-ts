import * as React from 'react';
import { connect,  } from 'react-redux';
import { ToasterMessageType } from './../../models/ToasterMessageType';
import { IMessage } from './../../models/IMessage';
import { ToasterMessagePosition } from './../../models/ToasterMessagePosition';
import { hideToasterMessage } from './../../flux/common/actions';

interface IToasterMessageProps {
    message: IMessage;
    position?: ToasterMessagePosition;
    dispatch?: any;
}

class ToasterElement extends React.Component<IToasterMessageProps, any> {
    render() {
        if (!this.props.message) {
            return null;
        }
        
        return (
            <div className={this.getClassName()}>
                {this.props.message.text} <span className="fa fa-times close-button" onClick={this.close}></span>
            </div>
        );
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
        if (this.props.message && this.props.message.type) { 
            return `toaster-${ToasterMessageType[this.props.message.type].toLowerCase()}`; 
        }
        
        return 'toaster-success';
    }
    
    close = () => {
        this.props.dispatch(hideToasterMessage());
    }
}

export const ToasterMessage = connect()(ToasterElement);