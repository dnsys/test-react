import React, { Component } from 'react';
import {DatePicker} from '../../components/DatePicker';

class FormPanel extends Component{
    render() {
        return (
            <div className="form-block">
                <div className="form-block__heading">
                    Select a Date & Time
                </div>
                <div className="form-block__container">
                    <div className="form-block__datepicker">
                        <DatePicker/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormPanel;
