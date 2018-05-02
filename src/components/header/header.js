import React from 'react';
import './header.css';
 
class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="bar bar-nav bar-standard">
            <a className="button button-link button-nav pull-left back" href="javascript:history.back(-1)">
                <span className="icon iconfont icon-fenxiang"></span>
                返回
            </a>
            <h1 className="title">{this.props.dataTitle}</h1>
        </nav>
        <div style={{paddingTop:'2.2rem'}}></div>
      </div>
    );
  }
}
 
export default Header;