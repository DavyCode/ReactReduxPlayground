import React, { Component } from 'react';
import Booklist from '../containers/book-list'
require('../../scss/style.scss');


export default class App extends Component {
    render() {
        return ( 
            <div>
                <h1> welcome to the app</h1>
                <Booklist />
            </div>
        );
    }
}