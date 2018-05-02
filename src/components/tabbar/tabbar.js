import React from 'react';
import './tabbar.css';
 
class Tabbar extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer-nav">
            <a href="#/" className={'box-flex nav-list '+(this.props.dataSelect==''?'nav-list-select':'')}>
              <div className="icon iconfont icon-index nav-list-img"></div>
              tabbar1
            </a>
            <a href="#/" className={'box-flex nav-list '+(this.props.dataSelect==''?'nav-list-select':'')}>
              <div className="icon iconfont icon-index nav-list-img"></div>
              tabbar2
            </a>
            <a href="#/" className={'box-flex nav-list '+(this.props.dataSelect==''?'nav-list-select':'')}>
              <div className="icon iconfont icon-index nav-list-img"></div>
              tabbar3
            </a>
            <a href="#/" className={'box-flex nav-list '+(this.props.dataSelect==''?'nav-list-select':'')}>
              <div className="icon iconfont icon-index nav-list-img"></div>
              tabbar4
            </a>
        </footer>
        <div style={{paddingBottom:"2.5rem"}}></div>
      </div>
    );
  }
}
 
export default Tabbar;