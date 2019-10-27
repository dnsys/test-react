import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import {RoundedBlock} from '../../components/RoundedBlock';
import {Sidebar} from '../../components/Sidebar';
import {FormPanel} from '../../components/FormPanel';

import './style.scss';

class FormPage extends Component{
    render() {
        return (
            <div className="form-page">
                <Container>
                    <Row>
                        <Col md={4}>
                            <RoundedBlock className="rounded-block--panel">
                                <Sidebar>
                                    Col md 4
                                </Sidebar>
                            </RoundedBlock>
                        </Col>
                        <Col md={8}>
                            <RoundedBlock>
                                <FormPanel/>
                            </RoundedBlock>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FormPage;
