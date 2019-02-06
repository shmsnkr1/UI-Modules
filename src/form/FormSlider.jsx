import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Slider, RangeSlider } from 'reactrangeslider'; // eslint-disable-line import/no-unresolved
import styles from './sliders';
import '../../style/form/slider.scss';

/* eslint-disable */
class FormSlider extends Component {

  constructor(props) {
    super(props);

    let slidervalue = 40;
    let rangeValue = { start: 20, end: 80 };

    const { type, value, rvalue } = this.props;
    if (type === 'range') {
      if (value) {
        rangeValue = { start: value.start, end: value.end };
      }
    } else {
      if (rvalue) {
        slidervalue = rvalue;
      }
    }

    this.state = {
      slidervalue: slidervalue,
      rangeValue: rangeValue,
    };
    this.onChange = this.onChange.bind(this);
    this.slideronChange = this.slideronChange.bind(this);
  }
  onChange(value) {
    this.setState({
      rangeValue: {
        start: value.start,
        end: value.end,
      },
    });
  }
  slideronChange(value) {
    this.setState({ slidervalue: value });
  }
  render() {
    const { name, type, size } = this.props;
    let min = 0;
    let max = 100
    let step = 5;
    if (size) {
      min = size.min;
      max = size.max;
      step = size.step;
    }
    return (
      <div>
        {(() => {
          if (type === 'range') {
            return (
              <div>
                <div>
                  <RangeSlider
                    name={name}
                    highlightedTrackStyle={styles.highlightedTrackStyle}
                    trackStyle={styles.trackStyle}
                    handleStyle={styles.handleStyle}
                    hoveredHandleStyle={styles.hoveredHandleStyle}
                    activeHandleStyle={styles.activeHandleStyle}
                    focusedHandleStyle={styles.focusedHandleStyle}
                    value={this.state.rangeValue}
                    onChange={this.onChange}
                    min={min}
                    max={max}
                    step={step}
                  />
                </div>

                <div className="wnSliderTextboxWrapper">
                  <div className="wnSliderTextbox">
                    <input
                      className="wnFormText wnSliderInputMin"
                      type="text"
                      placeholder="min"
                      readOnly
                      value={this.state.rangeValue.start}
                    />
                  </div>
                  <div className="wnSliderTextbox">
                    <input
                      className="wnFormText wnSliderInputMax"
                      type="text"
                      placeholder="min"
                      readOnly
                      value={this.state.rangeValue.end}
                    />
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div>
              <div>
                <Slider
                  name={name}
                  trackStyle={styles.trackStyle}
                  hoveredHandle={styles.hoveredHandleStyle}
                  handleStyle={styles.handleStyle}
                  activeHandle={styles.activeHandleStyle}
                  hoveredHandleStyle={styles.hoveredHandleStyle}
                  focusedHandleStyle={styles.focusedHandleStyle}
                  activeHandleStyle={styles.activeHandleStyle}
                  value={this.state.slidervalue}
                  onChange={this.slideronChange}
                  defaultValue={10}
                  step={5}
                />
              </div>
              <div className="wnSliderTextboxWrapper">
                <div className="wnSliderTextbox">
                  <input
                    className="wnFormText wnSliderInputMin"
                    type="text"
                    placeholder="min"
                    readOnly
                    value={this.state.slidervalue}
                  />
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    );
  }
}

FormSlider.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.object,
  value: PropTypes.shape({
    start:PropTypes.number,
    end:PropTypes.number
  }),
  rvalue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  

};

export default FormSlider;

