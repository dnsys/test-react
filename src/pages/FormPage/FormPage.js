import React, { Component } from 'react';
import {RoundedBlock} from '../../components/RoundedBlock';
import {Sidebar} from '../../components/Sidebar';
import {FormPanel} from '../../components/FormPanel';

import './style.scss';

class FormPage extends Component{
    render() {
        return (
            <div className="form-page">
                <div className="l-container">
                    <div className="l-container__row">
                        <div className="l-col l-col-md-4">
                            <RoundedBlock className="rounded-block--panel">
                                <Sidebar/>
                            </RoundedBlock>
                        </div>
                        <div className="l-col l-col-md-8">
                            <RoundedBlock className="rounded-block--panel rounded-block--content">
                                <FormPanel/>
                            </RoundedBlock>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormPage;
