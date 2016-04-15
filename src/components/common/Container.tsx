import * as React from 'react';

export class Container extends React.Component<any, any> {
    render() {
        return <div {...this.props} className={this.getClassName()}>{this.props.children}</div>;
    }

    getClassName() {
        let className = ['container'];

        if (this.props.className) {
            className = [...className, this.props.className.split(' ')];
        }

        return className.join(' ');
    }
}
