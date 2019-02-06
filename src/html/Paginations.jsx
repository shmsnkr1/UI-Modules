import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../style/html/pagination.scss';
import previcon from '../../img/form/icon_prev.png';
import nexticon from '../../img/form/icon_next.png';

const divider = '/';
/* eslint-disable */
const propTypes = {
  name: PropTypes.string,
  margin: PropTypes.number,
  startPage: PropTypes.number,
  page: PropTypes.number,
  count: PropTypes.number,
  onPageChange: PropTypes.func,
};

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { margin, page, count, startPage } = this.props;
    const endPage = page + margin > count ? count : page + margin;
    this.state = { startPage: startPage, endPage: endPage, count: count };

    this.onPageChange = this.onPageChange.bind(this);
    this.goFirstPage = this.goFirstPage.bind(this);
    this.goLastPage = this.goLastPage.bind(this);
    this.goPrevPage = this.goPrevPage.bind(this);
    this.goNextPage = this.goNextPage.bind(this);
  }

  onPageChange(index, state) {
    if (this.state.startPage == this.props.page && (state === 'next')) {
      return;
    } else if (this.state.startPage == this.props.startPage && (state === 'prev')) {
      return;
    }
    else {
      const value = (index + this.state.startPage);
      this.setState({ startPage: value });
    }
  }

  goFirstPage() {
    this.onPageChange(1);
  }

  goLastPage() {
    this.onPageChange(this.state.count);
  }

  goPrevPage() {
    this.onPageChange(-1, 'prev');
  }

  goNextPage() {
    this.onPageChange(1, 'next');
  }

  render() {
    const { startPage, endPage, count } = this.state;
    const { page, margin } = this.props;
    const pages = [];
    const prevPage = page === 1 ? null : <div className="pagination-button" onClick={this.goPrevPage}>
      <img className="imgStyle" src={previcon} role="presentation" /> </div>;
    const nextPage = page === count ? null
      : <div className="pagination-button" onClick={this.goNextPage}><img className="imgStyle" src={nexticon} role="presentation" /></div>;

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li
          key={i}
          onClick={this.onPageChange}
          className={classnames('pagination-list-item', 'pagination-button', {
            active: i === this.props.page
          })}>
          {i}
        </li>
      );
    }

    return (
      <div id="pagination-container">
        <div id="pagination">
          {prevPage}
          {/* {firstPage} */}
          <ul className="pagenumber" >
            {this.state.startPage} {divider} {this.props.page}
          </ul>
          {/* {lastPage} */}
          {nextPage}
        </div>
      </div>
    );
  }
}

Pagination.propTypes = propTypes;
export default Pagination;