import React, { Component } from 'react';
import {Modal, Button as ButtonBootstrap} from 'react-bootstrap';
import {DatePicker} from '../../components/DatePicker';
import {Button} from '../../components/Button';

class FormPanel extends Component{
    constructor(props) {
        super(props);

        this.setSelectedDay = this.setSelectedDay.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    state = {
        selectedDayTime: null,
        selectedDayLabel: '',
        showModal: false
    };

    setSelectedDay(selectedDay) {
        this.setState({
            selectedDayTime: selectedDay.time,
            selectedDayLabel: selectedDay.dayLabel
        });
    }

    handleModal() {
        console.log('handleModal');
        this.setState({
            showModal: !this.state.showModal
        })
    }

    renderTime() {
        let time = [];

        if(this.state.selectedDayTime) {
            this.state.selectedDayTime.forEach((item, index) => {
                time.push(
                    <div className="form-block__timepicker-row" key={index} onClick={this.handleModal}>
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
                <Modal show={this.state.showModal} onHide={this.handleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Book day</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        To book this day you need to have a <b>PRO</b> account. Just for $9999 per day.
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonBootstrap onClick={this.handleModal}>
                            Close
                        </ButtonBootstrap>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default FormPanel;
