import * as React from 'react';
import { LayoutPage } from './../common/LayoutPage';
import { Container } from './../common/Container';

export class Home extends React.Component<any, any> {
    render() {
        return (
            <LayoutPage title="Home">
                <p>Home page content</p>
            </LayoutPage>
        );
    }
}
