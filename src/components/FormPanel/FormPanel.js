import React, { Component } from 'react';
import {DatePicker} from '../../components/DatePicker';

class FormPanel extends Component{
    constructor(props) {
        super(props);

        this.setSelectedDay = this.setSelectedDay.bind(this);
    }

    state = {
        selectedDay: null
    };

    setSelectedDay(selectedDay) {
        this.setState({
            selectedDay
        });

        this.renderTime();
    }

    renderTime() {
        let time = [];

        if(this.state.selectedDay) {
            this.state.selectedDay.time.forEach((item, index) => {
                time.push(
                    <div key={index}>{item}</div>
                )
            });
        }

        return time;
    }

    render() {
        return (
            <div className="form-block">
                <div className="form-block__heading">
                    Select a Date & Time
                </div>
                <div className="form-block__container">
                    <div className="form-block__datepicker">
                        <DatePicker change={this.setSelectedDay}/>
                    </div>
                    <div className="form-block__timepicker">
                        { this.renderTime() }
                    </div>
                </div>
            </div>
        );
    }
}

export default FormPanel;
