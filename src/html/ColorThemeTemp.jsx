import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/html/colortheming.scss';
import ColorTheming from './ColorTheming';
import ColorButton from '../button/ColorButton';

const propTypes = {
  baseType: PropTypes.string,
  baseValue: PropTypes.string,
  className: PropTypes.string,
};

class ColorThemeTemp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      whitebttnStyle: 'siteButton active',
      darkbttnStyle: 'siteButton',
      servicebasecolordark: 'servicebasecolordark',
      servicebasecolorcore: 'servicebasecolorcore',
      servicebasecolorlight: 'servicebasecolorlight',
      servicekeycolordark: 'servicekeycolordark',
      servicekeycolorcore: 'servicekeycolorcore',
      servicekeycolorlight: 'servicekeycolorlight',
      serviceattention01: 'serviceattention01',
      serviceattention02: 'serviceattention02',
      notavailable: 'notavailable',
    };
    this.whitetheme = this.whitetheme.bind(this);
    this.darktheme = this.darktheme.bind(this);
  }
  whitetheme() {
    this.setState({
      whitebttnStyle: 'siteButton active',
      darkbttnStyle: 'siteButton',
      servicebasecolordark: 'servicebasecolordark',
      servicebasecolorcore: 'servicebasecolorcore',
      servicebasecolorlight: 'servicebasecolorlight',
      servicekeycolordark: 'servicekeycolordark',
      servicekeycolorcore: 'servicekeycolorcore',
      servicekeycolorlight: 'servicekeycolorlight',
      serviceattention01: 'serviceattention01',
      serviceattention02: 'serviceattention02',
      notavailable: 'notavailable',
    });
  }
  darktheme() {
    this.setState({
      whitebttnStyle: 'siteButton',
      darkbttnStyle: 'siteButton active',
      servicebasecolordark: 'servicebasecolordarkTheme',
      servicebasecolorcore: 'servicebasecolorcoreTheme',
      servicebasecolorlight: 'servicebasecolorlightTheme',
      servicekeycolordark: 'servicekeycolordarkTheme',
      servicekeycolorcore: 'servicekeycolorcoreTheme',
      servicekeycolorlight: 'servicekeycolorlightTheme',
      serviceattention01: 'serviceattention01Theme',
      serviceattention02: 'serviceattention02Theme',
      notavailable: 'notavailableTheme',
    });
  }
  render() {
    return (
      <div>
        <ColorButton
          className={this.state.whitebttnStyle}
          baseValue="White Theme"
          baseType="button"
          onClick={this.whitetheme}
        />
        <ColorButton
          className={this.state.darkbttnStyle}
          baseValue="Dark Theme"
          baseType="button"
          onClick={this.darktheme}
        />
        <ColorTheming baseType="client" baseValue="Client Color" />
        <table>
          <tbody>
            <tr style={{ width: '250px', height: '280px' }}>
              <td>
                <ColorTheming
                  className={this.state.servicebasecolordark}
                  baseType="box"
                  baseValue="Service Base color[DARK]"
                />
              </td>
              <td>
                <ColorTheming
                  className={this.state.servicebasecolorcore}
                  baseType="box"
                  baseValue="Service Base color[CORE]"
                />
              </td>
              <td>
                <ColorTheming
                  className={this.state.servicebasecolorlight}
                  baseType="box"
                  baseValue="Service Base color[LIGHT]"
                />
              </td>
            </tr>
            <tr>
              <td>
                <ColorTheming
                  className={this.state.servicekeycolordark}
                  baseType="box"
                  baseValue="Service Base color[DARK]"
                />
              </td>
              <td>
                <ColorTheming
                  className={this.state.servicekeycolorcore}
                  baseType="box"
                  baseValue="Service Base color[CORE]"
                />
              </td>
              <td>
                <ColorTheming
                  className={this.state.servicekeycolorlight}
                  baseType="box"
                  baseValue="Service Base color[LIGHT]"
                />
              </td>
            </tr>
            <tr>
              <td>
                <ColorTheming
                  className={this.state.serviceattention01}
                  baseType="box"
                  baseValue="Service Attention 01"
                />
              </td>
              <td>
                <ColorTheming
                  className={this.state.serviceattention02}
                  baseType="box"
                  baseValue="Service Attention 02"
                />
              </td>
              <td>
                <ColorTheming
                  className={this.state.notavailable}
                  baseType="box"
                  baseValue="Not Available"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ColorThemeTemp.propTypes = propTypes;
export default ColorThemeTemp;
