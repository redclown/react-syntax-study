import React from 'react';
import logo from './logo.svg';
import './App.css';

class HelloWorld extends React.Component {
    render () {
        const MAX_NUMBER = 11111;
        return <div>Hello World ... 
            <br></br>
            <span className={MAX_NUMBER} tabIndex="22222">number</span>
            <br></br>
            <span>{MAX_NUMBER}</span> 
        </div>;
    }
}

export default HelloWorld;
