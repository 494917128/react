import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Tabbar from './components/tabbar'

 
class App1 extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>欢迎来到菜鸟教程</h2>
        </div>
        <p className="App-intro">
          你可以在 <code>src/App.js</code> 文件中修改。
        </p>
        <Link to="/index">About</Link>
        <Tabbar />
      </div>
    );
  }
}
 
export default App1;