import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/html/typography.scss';

const propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

/* eslint-disable */
class Typography extends Component {

  getHeaderItems(tag, value) {
    switch(tag) {
      case 'h1': return <h1 className="siteHeading1">{value}</h1>;
      case 'h2': return <h2 className="siteHeading2">{value}</h2>;
      case 'h3': return <h3 className="siteHeading3">{value}</h3>;
      case 'h4': return <h4 className="siteHeading4">{value}</h4>;
      case 'h5': return <h5 className="siteHeading5">{value}</h5>;
      case 'h6': return <h6 className="siteHeading6">{value}</h6>;
      default : return '';
    }
  }
  getBodyItems(tag, value) {
    switch(tag) {
      case 'h1': return <h1 className="siteHeading1">{value}</h1>;
      case 'h2': return <h2 className="siteHeading2">{value}</h2>;
      case 'h3': return <h3 className="siteHeading3">{value}</h3>;
      case 'h4': return <h4 className="siteHeading4">{value}</h4>;
      case 'h5': return <h5 className="siteHeading5">{value}</h5>;
      case 'h6': return <h6 className="siteHeading6">{value}</h6>;
      case 'large': return <div className="wnTextLarge">{value}</div>;
      case 'small': return <div className="wnTextSmall">{value}</div>;
      case 'min': return <div className="wnTextMin">{value}</div>;
      case 'bold': return <div className="wnTextBold">{value}</div>;
      default : return <div>{value}</div>;
    }
  }
  render() {
    const { type, value, tag } = this.props;
    let item = '';
    if (type === 'header') {
      item = this.getHeaderItems(tag, value);
    } else if (type === 'body') {
      item = this.getBodyItems(tag, value);
    }
    return (
      <div>
        {item}
      </div>
    );
  }
}

Typography.propTypes = propTypes;
export default Typography;
