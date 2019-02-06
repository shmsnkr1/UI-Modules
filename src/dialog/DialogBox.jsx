import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog/Dialog';
import '../../style/dialog/dialog.scss';

  /* eslint-disable */
const contentStyle = {
  width: '80%',
  maxWidth: 'none',
};
const backgroundstyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  overflowY: 'scroll',
};
const bodyStyle  = {
  backgroundColor: '#f8f8f8',
  overflowY: 'scroll',
};
const buttonStyle = { border: '1px solid #00bcd4',};
class DialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  handleSave() {
    this.props.handleSave();
  }

  handleClose() {
    this.props.handleClose();
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <Dialog
            id={this.props.name}
            name={this.props.name}
            style= {backgroundstyle}
            bodyStyle={bodyStyle}
            title={
              <div className="wnDialogHeader">
                <h4>{this.props.title}</h4>
                <button type="button" className="wnDialogClose" onClick={this.handleClose.bind(this)}>Close</button>
              </div>
            }
            actions={<div className="wnDialogFooter">
              <button type="button" className="wnDialogAction" onClick={this.handleSave.bind(this)}>Save</button>
              <button type="button" className="wnDialogCancel" onClick={this.handleClose.bind(this)} >Cancel</button>
              </div>
            }
            modal={true}
            contentStyle={contentStyle}
            open={this.props.open}
          >
            <div>
              {this.props.children}
            </div>
          </Dialog>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default DialogBox;