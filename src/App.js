import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import request from './utils/Request';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    request('http://3hours.tmall.net/getPoplayer.json').then(response =>
      console.log(response)
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <span>your first hello world! </span>
          <Link to="/user">
            <Button type="primary">user</Button>
          </Link>
          <Link to="/home">
            <Button type="primary">home</Button>
          </Link>
          <Link to="/home">
            <Button type="primary">home</Button>
          </Link>
        </p>
        <Button onClick={this.fetch}>测试fetch</Button>
      </div>
    );
  }
}

export default App;
