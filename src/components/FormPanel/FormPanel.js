import React, { Component } from 'react';
import {DatePicker} from '../../components/DatePicker';
import {Button} from '../../components/Button';

class FormPanel extends Component{
    constructor(props) {
        super(props);

        this.setSelectedDay = this.setSelectedDay.bind(this);
    }

    state = {
        selectedDayTime: null,
        selectedDayLabel: ''
    };

    setSelectedDay(selectedDay) {
        this.setState({
            selectedDayTime: selectedDay.time,
            selectedDayLabel: selectedDay.dayLabel
        });
        console.log(selectedDay);
    }

    renderTime() {
        let time = [];

        if(this.state.selectedDayTime) {
            this.state.selectedDayTime.forEach((item, index) => {
                time.push(
                    <div className="form-block__timepicker-row" key={index}>
                        <Button>{item}</Button>
                    </div>
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
                        <div className="form-block__timepicker-label">
                            {this.state.selectedDayLabel}
                        </div>
                        <div className="form-block__timepicker-list">
                            <div className="form-block__timepicker-list-inner">
                                { this.renderTime() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormPanel;
