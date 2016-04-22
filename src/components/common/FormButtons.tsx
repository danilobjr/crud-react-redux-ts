import * as React from 'react';

interface IFormButtonsProps extends React.HTMLAttributes {
    noMargin?: boolean;
}

export class FormButtons extends React.Component<IFormButtonsProps, any> {    
    render() {
        return <div {...this.props} className={this.getClassName()}>{this.props.children}</div>;
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