import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../../style/grid/drawer.scss';
import Drawer from './DrawerConfig';
import '../../style/dialog/dialog.scss';

/* eslint-disable */
const buttonStyle = {
  border: '1px solid #00bcd4'
};

class DrawerBox extends Component {
  constructor() {
    super();
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false
    };
  }
  toggleDrawer(side, open) {
    this.setState({[side]: open});
  };

  render() {
    const { name, label, type, value, drawerStyle } = this.props;
    let openValue = '';
    let topPx = '';
    let leftPx = '';
    let rightPx = '';
    let bottomPx = '';
    let transform = false;
    let height = '';
    let width = '';
    let marginTop = '';
    let marginLeft = '';
    let marginRight = '';
    let marginBottom = '';

    if (type === "top") {
      openValue = this.state.top;
      topPx = '0px';
      leftPx = '0px';
      transform = false;
      height = '350px';
      width = '100%';
    } else if (type === "left") {
      openValue = this.state.left;
      topPx = '0';
      leftPx = '0px';
      transform = false;
      height = '100%';
      width = '350px';
    } else if (type === "right") {
      openValue = this.state.right;
      topPx='0';
      rightPx = '0px';
      transform = true;
      height = '100%';
      width = '350px';
    } else if (type === "bottom") {
      openValue = this.state.bottom;
      bottomPx = '0px';
      leftPx = '0px';
      transform = true;
      height = '350px';
      width = '100%';
    }

    if (drawerStyle) {
      topPx = drawerStyle.top?drawerStyle.top:topPx;
      leftPx = drawerStyle.left?drawerStyle.left:leftPx;
      height = drawerStyle.height?drawerStyle.height:height;
      width = drawerStyle.width?drawerStyle.width:width;
      marginTop = drawerStyle.marginTop?drawerStyle.marginTop:0;
      marginLeft = drawerStyle.marginLeft?drawerStyle.marginLeft:0;
      marginRight = drawerStyle.marginRight?drawerStyle.marginRight:0;
      marginBottom = drawerStyle.marginBottom?drawerStyle.marginBottom:0;
    }
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <div className="alignStyle">
            <div className="divStylebox">
              <RaisedButton
                name={name}
                style={buttonStyle}
                label={label}
                onClick={() => this.toggleDrawer(type, true)}/>
            </div>
          </div>
          <Drawer
            transform={transform}
            anchor={type}
            height={height}
            width={width}
            top={topPx}
            bottom={bottomPx}
            right={rightPx}
            left={leftPx}
            marginTop={marginTop}
            marginLeft={marginLeft}
            marginRight={marginRight}
            marginBottom={marginBottom}
            open={openValue}
            onClose={() => this.toggleDrawer(type, true)}>
            <div
              tabIndex={0}
              role="button"
            >
              <div style={{
                height: '350px'
              }}>
                 <div className="wnDialogHeader">
                   <button type="button" className="wnDialogClose" onClick={() => this.toggleDrawer(type, false)}>Close</button>
                 </div>
                   {value}
              </div>
            </div>
          </Drawer>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

DrawerBox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.object,
  drawerStyle: PropTypes.object,
};

export default DrawerBox;
