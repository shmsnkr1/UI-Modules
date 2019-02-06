import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/html/search.scss';

const propTypes = {
  name: PropTypes.string,
};

/* eslint-disable */
class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;
    return (
      <div className="wnHeaderBottom">
        <div className="inlineTextBox">
        <div className="wnHeaderSearch">
          <form action="" name="" method="">
            <dl className="wnSearch">
              <dt><input type="text" name={name} value="" placeholder="Search" onChange={this.props.onChange} /></dt>
              <dd><button onClick={this.props.onClick}><span></span></button></dd>
            </dl>
          </form>
        </div>
      </div>
      <div className="inlineButtonBox">  <ul className="wnHeaderViewButtons">
        <li></li>
        <li></li>
        </ul>
      </div>

      </div>
    );
  }
}

Search.propTypes = propTypes;

export default Search;
