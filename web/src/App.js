import React, { Component } from 'react';
import './App.css';
import store from './redux/redux'
import axios from '../lib/axios'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="qw">
      </div>
    );
  }
}

export default App;

// ReactDom.render(<App />,document.getElementById('root'));