import * as React from 'react';
import { LayoutPage } from './../../common/LayoutPage';

export class StudentEditPage extends React.Component<any, any> {
    render() {
        return (
            <LayoutPage title="Fulano de Tal" subtitle= "student edition">
                <p>content here</p>
            </LayoutPage>
        );
    }
}