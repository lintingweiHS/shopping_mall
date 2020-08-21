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
    this.getData();
  }
  getData = () => {
    axios.Post('api/passport/login', {
      username: 123,
      password: 132
    }).then(res => {
      console.log('aaa')
    })
  }
  render() {
    return (
      <div className="qw">
        123123
      </div>
    );
  }
}

export default App;

// ReactDom.render(<App />,document.getElementById('root'));