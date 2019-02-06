  import Drawer from 'material-ui/Drawer/Drawer';

 /* eslint-disable */

class DrawerConfig extends Drawer {

  getStyles() {
    var muiTheme = this.context.muiTheme;
    var theme = muiTheme.drawer;

    var x = this.getTranslateMultiplier() * (this.state.open ? 0 : this.getMaxTranslateX());
    var y = this.getTranslateMultiplier() * (this.state.open ? 0 : this.getMaxTranslateY());

    var styles = {
      root: {
        height: this.props.height,
        width: this.props.width,
        position: 'fixed',
        zIndex: muiTheme.zIndex.drawer,
        left: this.props.left,
        top: this.props.top,
        bottom: this.props.bottom,
        right: this.props.right,
        marginTop: this.props.marginTop,
        marginLeft: this.props.marginLeft,
        marginRight: this.props.marginRight,
        marginBottom: this.props.marginBottom,
        transform: 'translate(' + x + 'px,' + y + 'px )',
        backgroundColor: '#fafafa',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch' // iOS momentum scrolling
      },
      overlay: {
        zIndex: muiTheme.zIndex.drawerOverlay,
        pointerEvents: this.state.open ? 'auto' : 'none' // Bypass mouse events when left nav is closing.
      },
    };

    return styles;

  }
  getTranslateMultiplier() {
    return this.props.transform ? 1 : -1;
  }
   getTranslatedWidth() {
      if (typeof this.props.width === 'string') {
        var width = parseFloat(this.props.width) / 100.0;
        return typeof window !== 'undefined' ? width * window.innerWidth : 10000;
      } else {
        return this.props.width;
      }
    }
    getTranslatedHeight() {
      if (typeof this.props.height === 'string') {
        var height = parseFloat(this.props.height) / 100.0;
        return typeof window !== 'undefined' ? height * window.innerHeight : 10000;
      } else {
        return this.props.height;
      }
    }
   getMaxTranslateX() {
    if(this.props.anchor == ("top" || "bottom"))
    return 0;
     var width = this.getTranslatedWidth();
     return width + 10;
    }
    getMaxTranslateY() {
      if(this.props.anchor == ("left" || "right"))
      return 0;
      var height = this.getTranslatedHeight();
      return height + 10;
     }

}

export default DrawerConfig;
