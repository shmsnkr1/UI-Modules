import React, { Component } from 'react';
import '../../style/button/floatingbutton.scss';

 /* eslint-disable */
 class FloatingMenuItem extends Component {

  handleClick() {
    this.props.action();
  }
  render() {
    return <div
          onClick={this.handleClick.bind(this)}
          className="floatingMenuItem">
          <div className="floatingMenuIcon">
          <i className="materialIcons"><img className="settingbttn" src={this.props.icon} role="presentation" /> </i></div>
        </div>;
  }
}
export default FloatingMenuItem;