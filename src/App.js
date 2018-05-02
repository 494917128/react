import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header'
import Tabbar from './tabbar/tabbar'
 
class App extends React.Component {
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
        <Tabbar />
      </div>
    );
  }
}
 
export default App;