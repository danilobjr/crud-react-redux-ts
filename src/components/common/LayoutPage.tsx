import * as React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, PageHeader } from 'react-bootstrap';
import { Container } from './Container';

interface ILayoutPageProps {
    title: string;
    subtitle?: string;
}

export class LayoutPage extends React.Component<ILayoutPageProps, any> {
    render() {
        return (
            <div>
                {this.renderNavbar()}

                <Container>
                    {this.renderPageHeader()}
                    {this.props.children}
                </Container>
            </div>
        );
    }

    renderNavbar() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">CRUD</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Students" id="students-dropdown">
                            <MenuItem>Show List</MenuItem>
                            <MenuItem>Add New</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    renderPageHeader() {
        const subtitle = (this.props.subtitle) ? <small>{' '}{this.props.subtitle}</small> : '';

        return <PageHeader>{this.props.title}{subtitle}</PageHeader>;
    }
}
