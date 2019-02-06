import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DialogBox from './DialogBox';

const buttonStyle = { border: '1px solid #00bcd4' };

/* eslint-disable */
class DialogBoxTemp extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }
  handleSave() {
    this.setState({open: false});
  }

  handleClose() {
    this.setState({open: false});
  }
  handleOpen() {
    this.setState({open: true});
  }
  render() {
    return (
        <MuiThemeProvider>
        <div>
        <RaisedButton style={buttonStyle} label={this.props.label} onClick={this.handleOpen.bind(this)} />
      <DialogBox
        handleClose={this
        .handleClose
        .bind(this)}
        handleSave={this
        .handleSave
        .bind(this)}
        open={this.state.open}
        title={this.props.title}>
        <div>
        {this.props.children}
        </div>
      </DialogBox>
      </div>
      </MuiThemeProvider>

    );
  }
}
DialogBoxTemp.propTypes = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string,
    children: PropTypes.node
  };
export default DialogBoxTemp;