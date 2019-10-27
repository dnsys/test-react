import React, { Component } from 'react';

class FormPanel extends Component{
    render() {
        return (
            <div className="form-block">
                <div className="form-block__heading">
                    Select a Date & Time
                </div>
                <div className="form-block__container">
                    <div className="form-block__datepicker">

                    </div>
                </div>
            </div>
        );
    }
}

export default FormPanel;
