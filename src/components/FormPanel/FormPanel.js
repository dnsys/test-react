import React, { Component } from 'react';

class FormPanel extends Component{
    render() {
        return (
            <div className="form-block">
                { this.props.children }
            </div>
        );
    }
}

export default FormPanel;
