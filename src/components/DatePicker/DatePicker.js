import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

class DatePicker extends Component{
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        selected: null,
        availableDates: [
            {
                dayLabel: 'Friday, October 25',
                day: 25,
                time: [
                    '10:00',
                    '10:30',
                    '15:30'
                ]
            },
            {
                dayLabel: 'Monday, October 28',
                day: 28,
                time: [
                    '11:00',
                    '12:30',
                    '14:30',
                    '16:00',
                    '11:00',
                    '12:30',
                    '14:30',
                    '16:00',
                    '11:00',
                    '12:30',
                    '14:30',
                    '16:00',
                ]
            },
            {
                dayLabel: 'Tuesday, October 29',
                day: 29,
                time: [
                    '10:00'
                ]
            }
        ]
    };

    handleChange(day) {
        let selectedDay = this.state.availableDates.find(item => item.day === day);
        this.setState({
            selected: selectedDay
        }, () => {
            this.props.change(this.state.selected);
        });
    }

    render() {
        return (
            <div className="date-picker">
                <div className="date-picker__header">
                    <div className="date-picker__date">
                        October 2019
                    </div>
                    <div className="date-picker__month-switch">
                        <button className="date-picker__switch-arrow" disabled>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button className="date-picker__switch-arrow">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
                <div className="date-picker__calendar">
                    <div className="date-picker__calendar-head">
                        <div className="date-picker__calendar-row">
                            <div className="date-picker__calendar-head-day date-picker__calendar-cell">Sun</div>
                            <div className="date-picker__calendar-head-day date-picker__calendar-cell">Mon</div>
                            <div className="date-picker__calendar-head-day date-picker__calendar-cell">Tue</div>
                            <div className="date-picker__calendar-head-day date-picker__calendar-cell">Wed</div>
                            <div className="date-picker__calendar-head-day date-picker__calendar-cell">Thu</div>
                            <div className="date-picker__calendar-head-day date-picker__calendar-cell">Fri</div>
                            <div className="date-picker__calendar-head-day date-picker__calendar-cell">Sat</div>
                        </div>
                    </div>
                    <div className="date-picker__calendar-body">
                        <div className="date-picker__calendar-row">
                            <div className="date-picker__calendar-cell"/>
                            <div className="date-picker__calendar-cell"/>
                            <div className="date-picker__calendar-cell">
                                <button disabled>1</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>2</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>3</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>4</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>5</button>
                            </div>
                        </div>
                        <div className="date-picker__calendar-row">
                            <div className="date-picker__calendar-cell">
                                <button disabled>6</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>7</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>8</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>9</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>10</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>11</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>12</button>
                            </div>
                        </div>
                        <div className="date-picker__calendar-row">
                            <div className="date-picker__calendar-cell">
                                <button disabled>13</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>14</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>15</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>16</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>17</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>18</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>19</button>
                            </div>
                        </div>
                        <div className="date-picker__calendar-row">
                            <div className="date-picker__calendar-cell">
                                <button disabled>20</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>21</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>22</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>23</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>24</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button className="is-free is-today" onClick={() => this.handleChange(25)}>25</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>26</button>
                            </div>
                        </div>
                        <div className="date-picker__calendar-row">
                            <div className="date-picker__calendar-cell">
                                <button disabled>27</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button className="is-free" onClick={() => this.handleChange(28)}>28</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button className="is-free" onClick={() => this.handleChange(29)}>29</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>30</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button disabled>31</button>
                            </div>
                            <div className="date-picker__calendar-cell"/>
                            <div className="date-picker__calendar-cell"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DatePicker;
