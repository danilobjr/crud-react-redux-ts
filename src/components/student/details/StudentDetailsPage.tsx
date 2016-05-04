import * as React from 'react';
import * as _ from 'lodash';
import * as Redux from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { LayoutPage } from './../../common';
import { IStudent } from './../../../models';
import * as commonActionCreators from './../../../flux/common';
import { DataSource } from './../../../dataSource';

interface IPageProps {
    studentId: string;
    dispatch: Redux.Dispatch;
}

interface IPageState {
    student: IStudent;
}

class Page extends React.Component<IPageProps, IPageState> {
    constructor(props) {
        super(props);
    
        this.state = {
            student: {
                id: '',
                registrationNumber: '',
                name: '',
                registered: false
            }
        };
    }
    
    componentDidMount() {
        const { dispatch } = this.props;
        
        dispatch(commonActionCreators.talkingToTheServer());
        
        DataSource.students.get(this.props.studentId).then(student => {
            dispatch(commonActionCreators.finishTalkingToTheServer());
            this.setState({ student });
        });
    }
    
    render() {
        return (
            <LayoutPage 
                title={this.state.student.name}
                subtitle="student details"
            >
                <Row>
                    <Col md={12}>
                        <Row>
                            <Col md={12}>
                                <label>Registration Number</label>
                                <p>{this.state.student.registrationNumber}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <label>Name</label>
                                <p>{this.state.student.name}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <label>Registered?</label>
                                <p>{this.registeredToString()}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Link className="btn btn-default" to="/students">Back</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </LayoutPage>
        );
    }
    
    registeredToString() {
        return this.state.student.registered ? 'Yes' : 'No';
    }
}

const mapStateToProps = (state, props) => {
    return {
        studentId: props.params.id
    };
};

export const StudentDetailsPage = connect(mapStateToProps)(Page);