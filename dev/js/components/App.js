import React, { Component } from 'react';
import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail';
require('../../scss/style.scss');


export default class App extends Component {
    render() {
        return ( 
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10'>
                        <h1> Welcome select a book</h1>
                    <hr/>
                    </div>
                    <BookList />
                    <BookDetail />
                </div>
            </div>
        );
    }
}