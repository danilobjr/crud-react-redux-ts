import * as React from 'react';
import { Button } from 'react-bootstrap';
import { LayoutPage } from './../common/LayoutPage';
import { Container } from './../common/Container';

export class StudentList extends React.Component<any, any> {
    render() {
        return (
            <LayoutPage 
                title="Students"
                headerButton={<Button bsStyle="primary">Add New</Button>}
            >
                
            </LayoutPage>
        );
    }
}
