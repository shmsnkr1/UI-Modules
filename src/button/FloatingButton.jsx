import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Add from '../../img/floating/icon_setting_dashboard.png';
import Close from '../../img/floating/icon_setting_close.png';
import '../../style/button/floatingbutton.scss';
import widgetIcon from '../../img/floating/icon_setting_widget.png';
import dashboardIcon from '../../img/floating/icon_setting_packages.png';
import FloatingMenuItem from './FloatingMenuItem';

/* eslint-disable */
class FloatingButton extends Component {
  constructor() {
    super();
    this.state = {
      toggled: false,
      menuicon: Add,
      popWidgetMenu: false,
      popDashboardMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.init = this.init.bind(this);
    this.onWidgetClick = this.onWidgetClick.bind(this);
    this.onDashboardClick = this.onDashboardClick.bind(this);
  }

  toggleMenu() {
    this.setState({
      toggled: !this.state.toggled,
      menuicon: ((this.state.toggled === true)
        ? Add
        : Close)
    });
  }

  init() {
    this.setState({
      popDashboardMenu: false,
      popWidgetMenu: false
    });
  }

  onWidgetClick() {
    this.setState({
      popWidgetMenu: true
    });
  }
  onDashboardClick() {
    this.setState({
      popDashboardMenu: true
    });
  }
  render() {
    let menubttn = [];
    const menuItemData = this.props.menuItemList.ItemList;
    const {popWidgetMenu, popDashboardMenu} = this.state;
    const onWidgetClick = this.onWidgetClick;
    const onDashboardClick = this.onDashboardClick;
    let className = "floatingMenu";

    if (this.state.toggled) {
      className += ' open ';
      Object.keys(menuItemData).forEach(function (key, val) {

          if (menuItemData[key].id == "widget") {
            menubttn.push(
              <FloatingMenuItem
                label={menuItemData[key].label}
                icon={widgetIcon}
                action={menuItemData[key].hasAction?onWidgetClick:() => {}}
                key={key}
              />
            );

          }

          if (menuItemData[key].id == "dashboard") {
            menubttn.push(
              <FloatingMenuItem
                label={menuItemData[key].label}
                icon={dashboardIcon}
                action={menuItemData[key].hasAction?onDashboardClick:() => {}}
                key={key}
              />
            );

          }
        });
      }
    menubttn.push(<FloatingMenuItem
      label=""
      icon={this.state.menuicon}
      action={this.toggleMenu}
      key="m"/>);

    if (this.props.isNoFix) {
        className = "";
    }
    const items = this.props.items;
    return <div className="container">
        <div className={className}>
          {menubttn}
        </div>
        {(() => {
          if (popWidgetMenu) return items.Widget?<items.Widget init={this.init} />:"";
          if (popDashboardMenu) return items.Dashboard?<items.Dashboard init={this.init} />:"";
          return (
            <div>&nbsp;</div>
          );
        })()}
      </div>;
  }
}


FloatingButton.propTypes = {
  menuItemList :PropTypes.object.isRequired,
  items :PropTypes.object,
  isNoFix :PropTypes.bool,
  init :PropTypes.func
};

export default FloatingButton;