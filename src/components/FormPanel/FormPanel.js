import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class FormPanel extends Component{
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDay: null,
        };
    }

    handleDayClick(day, { selected }) {
        this.setState({
            selectedDay: selected ? undefined : day,
        });
    }

    render() {
        return (
            <div className="form-block">
                <div className="form-block__heading">
                    Select a Date & Time
                </div>
                <div className="form-block__container">
                    <div className="form-block__datepicker">
                        <DayPicker
                            initialMonth={new Date(2019, 9)}
                            disabledDays={[
                                new Date(2019, 9, 12),
                                new Date(2019, 9, 2),
                                {
                                    after: new Date(2019, 9, 20),
                                    before: new Date(2019, 9, 25),
                                },
                                { daysOfWeek: [0, 6] }
                            ]}
                            selectedDays={this.state.selectedDay}
                            onDayClick={this.handleDayClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default FormPanel;
