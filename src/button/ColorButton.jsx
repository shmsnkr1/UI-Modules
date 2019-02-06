import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import css from '../../style/button/colorbutton.css';

class ColorButton extends Component {
  render() {
    return (
      <div className="inline">
        <MuiThemeProvider>
          <div className="bttnStyle">
            <button
              id={this.props.id}
              className={this.props.className}
              onClick={this.props.onClick}
            >{this.props.baseValue}</button>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
ColorButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  baseValue: PropTypes.string,
  onClick: PropTypes.func,
};

ColorButton.defaultProps = {
  className: css.button,
};
export default ColorButton;
