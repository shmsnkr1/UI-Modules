import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/html/colortheming.scss';

/* eslint-disable */

class ColorTheming extends Component {
  render() {
    let renderEl = '';
    if (this.props.baseType === 'client') {
      renderEl = (<div className="clientcolor" >{this.props.baseValue}</div>);
    } else if (this.props.baseType === 'box') {
      renderEl = (<div className={this.props.className} >{this.props.baseValue}</div>);
     }
    return (
      <div>
        { renderEl }
      </div>
    );
  }
}
ColorTheming.propsTypes = {
  baseType: PropTypes.string,
  baseValue: PropTypes.string,
  className: PropTypes.string,
};
export default ColorTheming;
