import * as React from 'react';
import { Link } from 'react-router';
import { Grid, Navbar, Nav, NavDropdown, MenuItem, PageHeader } from 'react-bootstrap';

interface ILayoutPageProps {
    title: string;
    subtitle?: string;
    headerButton?: JSX.Element;
}

export class LayoutPage extends React.Component<ILayoutPageProps, any> {
    render() {
        return (
            <div>
                {this.renderNavbar()}

                <Grid>
                    {this.renderPageHeader()}
                    {this.props.children}
                </Grid>
            </div>
        );
    }

    renderNavbar() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">CRUD</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Students" id="students-dropdown">
                            <MenuItem href="#/students">Show List</MenuItem>
                            <MenuItem href="#/students/new">Add New</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    renderPageHeader() {
        const subtitle = (this.props.subtitle) ? <small>{' '}{this.props.subtitle}</small> : '';
        let pageHeaderClassName = '';
        let headerButton: JSX.Element;
        
        if (this.props.headerButton) {
            headerButton = <div className="header-button">{this.props.headerButton}</div>;
        }

        return (
            <PageHeader>{this.props.title}{subtitle}{headerButton}</PageHeader>
        );
    }
}
