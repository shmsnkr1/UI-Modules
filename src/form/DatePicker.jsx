import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePickers from 'react-datepicker';
import Select from './FormSelect';
import { isNotEmpty } from '../../utils/ObjectUtils';
import img from '../../img/form/datepicker/datepicker.png';
import '../../style/form/datepicker.scss';
import TimeOptionList from '../../data/form/TimeOptionList.json';

/* eslint-disable */
class DatePicker  extends Component {
  constructor(props) {
    super(props);

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.formatValue = this.formatValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.buttonOnClick = this.buttonOnClick.bind(this);
    this.state = { date:'', formatDate:this.props.value, time: this.props.time, isOpen: false , placeholder:''};
  }

  formatValue(date) {
    const { dateFormat } = this.props;
    let value = '';

    if (isNotEmpty(date)) {
        value = `${moment(date).format(dateFormat)}`;
    }

    return value;
  }

  buttonOnClick() {
    this.setState({placeholder : "____/__/__", isOpen: !this.state.isOpen});
  }

  handleChange (date) {

    this.setState({placeholder : "____/__/__", date: date, formatDate: this.formatValue(date), isOpen: !this.state.isOpen});
  }

  mouseOver() {
    this.setState({placeholder : "____/__/__"});
  }

  mouseOut() {
    this.setState({placeholder : ""});
  }

  handleChangeText(e) {
    this.setState({date: e.target.value, formatDate: e.target.value});
  }

  render() {
    const {
      name, value, label, labelStyle, validate, dateFormat,
      onChange = (e) => { this.setState({ formatDate: e.target.value }) }
    } = this.props;

    const errorMessage = validate && validate(value);
    const timeList = TimeOptionList.TimeList;
    let time = [];
    Object.keys(timeList).forEach(function (key, val) {
      time.push(val);
    });
    return (
      <div>
        <div className="formDateTime">
          {label && <label className="formDateTimeLabel" style={labelStyle} htmlFor={`${label}${name}`}>{label}</label>}
          <div className="react-datepicker-wrapper">
          <div className="react-datepicker__input-container">
            <input
              type="text"
              className="datepickerst"
              value={this.state.formatDate}
              onClick={this.buttonOnClick}
              onMouseOver={this.mouseOver}
              onMouseOut={this.mouseOut}
              placeholder={this.state.placeholder}
              onChange={(e) => this.setState({ formatDate: e.target.value })}
              maxLength="10"
          />
          </div>
          </div>
          {
            this.state.isOpen && (
              <DatePickers
                selected={this.state.date}
                onChange={this.handleChange}
                onClickOutside={this.buttonOnClick}
                inline
              />
            )
          }
          <button type="button" className="uiDatepickerTrigger" onClick={this.buttonOnClick}>
            <img className="imgbttnStyle" src={img} width='20px' height="20px" />
          </button>
        </div>
        <div className="errorMessage">{errorMessage}</div>
        <br />
        <div className="selectStyle">
         <Select
            optionList={timeList}
            name="select1"
            selectValue={this.props.time}
          />
        </div>
      </div>
    );
  }
}

DatePicker.defaultProps = {
  onChange: () => {},
  dateFormat: 'YYYY/MM/DD',
  valueFormat: 'YYYY-MM-DD',
};

const propTypes = {
  value: PropTypes.string,
  time: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelStyle: PropTypes.objectOf(PropTypes.string),
  validate: PropTypes.func,
  onChange: PropTypes.func,
  dateFormat: PropTypes.string,
  valueFormat: PropTypes.string,
  onClick: PropTypes.func,
};
DatePicker.propTypes = propTypes;
export default DatePicker;
