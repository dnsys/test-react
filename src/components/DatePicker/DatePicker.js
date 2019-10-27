import React, {Component} from 'react';

class DatePicker extends Component{
    render() {
        return (
            <div className="date-picker">
                <div className="date-picker__header">
                    <div className="date-picker__date">
                        October 2019
                    </div>
                    <div className="date-picker__month-switch">|</div>
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
                                <button>1</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>2</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>3</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>4</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>5</button>
                            </div>
                        </div>
                        <div className="date-picker__calendar-row">
                            <div className="date-picker__calendar-cell">
                                <button>6</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>7</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>8</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>9</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>10</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>11</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>12</button>
                            </div>
                        </div>
                        <div className="date-picker__calendar-row">
                            <div className="date-picker__calendar-cell">
                                <button>13</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>14</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>15</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>16</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>17</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>18</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>19</button>
                            </div>
                        </div>
                        <div className="date-picker__calendar-row">
                            <div className="date-picker__calendar-cell">
                                <button>20</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>21</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>22</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>23</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>24</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>25</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>26</button>
                            </div>
                        </div>
                        <div className="date-picker__calendar-row">
                            <div className="date-picker__calendar-cell">
                                <button>27</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>28</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>29</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>30</button>
                            </div>
                            <div className="date-picker__calendar-cell">
                                <button>31</button>
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
