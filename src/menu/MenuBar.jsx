import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Popover, PopoverBody } from 'reactstrap';
import '../../style/menu/menubar.scss';

/* eslint-disable */
let menuHeader = [];
let colheader=[];
class MenuBar extends Component {
  constructor() {
   super();
   this.state = { Items:'menuu', isOpen: false };
   this.openSubMenu = this.openSubMenu.bind(this);
   this.handleRequestClose = this.handleRequestClose.bind(this);
   this.creatSubitem = this.creatSubitem.bind(this);

  }

  openSubMenu(key) {
    this.setState({
      Items: key, isOpen: !this.state.isOpen });

  }
  handleRequestClose() {
    this.setState({isOpen: false,});
  }

  creatSubitem(id){
    const menuData = this.props.menuData;
    let createElement = [];
    for (var i = 0; i < menuData.length; i++) {
      let children = []
      if(id === menuData[i].id){
        for (var j = 0; j < colheader.length; j++) {
          children.push(<p key={j} >{menuData[i][colheader[j]]}</p>);
        }
        createElement.push(<PopoverBody key={i}  ><div  className="divelement">{children}</div></PopoverBody>);
        return createElement;
      }
    }
    return createElement;
  }
  render() {
    const { menuData } = this.props;
    const { isOpen, Items } = this.state;

    for (var i = 0; i < menuData.length; i++) {
      for (var key in menuData[i]) {
        if (colheader.indexOf(key) === -1) {
          colheader.push(key);
        }
      }
    }

    for (var i = 0; i < menuData.length; i++) {
      menuHeader.push(menuData[i].id);
    }
    var settings = {
      dots: false,
      infinite: false,
      speed: 50,
      slidesToShow: 6,
      slidesToScroll: 6,
    };

    const menuItems = Object.keys(menuHeader).map((key,i) => (
      <div key={i} >
        <div className="divelement" id={'Popover-' + key} onClick={() => {this.openSubMenu(key);}} >
          { menuHeader[key] }
        </div>
        <div key={i} className="menuElement" >
          <Popover key={i}  className="popOverStyle" placement="bottom" isOpen={(key === Items && this.state.isOpen)? true : false} target={'Popover-' + key} toggle={this.handleRequestClose}>
            {this.creatSubitem(menuHeader[key])}
          </Popover>
        </div>
     </div>
    ));
    return (
      <div style={{ width: '80%', marginLeft: '50px' }}>
        <Slider {...settings}>
          {menuItems}
        </Slider>
        <div className="menuElement" id="elementPopover">
        </div>
      </div>
    );
  }
}
MenuBar.propTypes = {
  menuData: PropTypes.array,
};

export default MenuBar;
