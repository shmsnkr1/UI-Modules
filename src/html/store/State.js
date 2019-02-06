import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */

class State extends Component {
    constructor(props) {
        super(props);
        this.stateStore = this.props.store;
        this.state = this.stateStore.state;
    }

    componentDidMount() {
        this.subscription = this.stateStore.subscribe(state =>
            this.setState(state)
        );
    }

    componentWillUnmount() {
        this.stateStore.unSubscribe(this.subscription);
    }

    render() {
        const state = this.props.parseState ? this.props.parseState(this.state) : this.state;

        return (
            <div>
                {cloneElement(this.props.children, state)}
            </div>
        );
    }
}
State.propTypes = {
    children: PropTypes.element,
    parseState: PropTypes.func,
    store: PropTypes.object
};
export default State;