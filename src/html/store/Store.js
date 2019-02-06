import uuid from 'uuid';
import { Component } from 'react';

/* eslint-disable */
let state = {};
    let callbacks = [];

 class Store extends Component {
    constructor(state) {
        super();
        this.state = { ...state };
    }

    set(newState) {
        this.state = { ...this.state, ...newState };
        this.callbacks.forEach(callback => callback.callback(this.state));
    }

    get(key) {
        return this.state[key];
    }

    subscribe(callback) {
        const subscription = uuid();

        this.callbacks.push({ subscription, callback });

        return subscription;
    }

    unSubscribe(subscription) {
        this.callbacks.forEach((callback, index) => {
            if (callback.subscription === subscription) {
                this.callbacks.splice(index, 1);
            }
        });
    }
}

export default Store;