import React, { Component } from 'react';

class RoundedBlock extends Component {
    render() {
        return (
            <div className="rounded-block">
                { this.props.children }
            </div>
        );
    }
}

export default RoundedBlock;
