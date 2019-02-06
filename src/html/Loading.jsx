import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/html/loading.scss';
import loading from '../../img/loading/loading.gif';

const styles = {
  relative: { position: 'relative' },
  absolute: {
  },
};

class Loading extends Component {
  render() {
    const container = this.props.isRelative ? styles.relative : styles.absolute;
    const img = this.props.isRelative ? styles.absolute : {};

    return (
      <div className="container" style={{ ...container, ...this.props.style }}>
        <img
          src={loading}
          alt="loadding"
          className="base"
          style={{ ...img, ...this.props.imgStyle }}
        />
      </div>
    );
  }
}

Loading.defaultProps = {
  isRelative: false,
};

Loading.propTypes = {
  style: PropTypes.objectOf(PropTypes.object),
  imgStyle: PropTypes.objectOf(PropTypes.string),
  isRelative: PropTypes.bool,
};

export default Loading;
