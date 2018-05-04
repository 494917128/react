import React from 'react';
import { connect } from 'react-redux'
import { currentAnimate } from '../../store/actions'
import { Link } from 'react-router-dom';
import './index.css';

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

// redux的传函数
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // 页面跳转的模式
    currentAnimate: (type=null) => {
      dispatch(currentAnimate(type))
    }
  }
}
 
  class Tabbar extends React.Component {
    render() {
      return <footer className="footer_nav">
        <Link onClick={() => this.props.currentAnimate()} to="/" className={"nav_list "+(this.props.dataSelect==''?'main_color':'nav_list_color')}>
          <div className="icon iconfont icon-index nav_list_img">
          </div>
          <span>首页</span>
        </Link>
        <Link onClick={() => this.props.currentAnimate()} to="/count" className={"nav_list "+(this.props.dataSelect=='2'?'main_color':'nav_list_color')}>
          <div className="icon iconfont icon-index nav_list_img">
          </div>
          <span>redux</span>
        </Link>
        <Link onClick={() => this.props.currentAnimate()} to="/shop" className={"nav_list "+(this.props.dataSelect=='3'?'main_color':'nav_list_color')}>
          <div className="icon iconfont icon-store_icon nav_list_img">
          </div>
          <span>商城</span>
        </Link>
        <Link onClick={() => this.props.currentAnimate()} to="/my" className={"nav_list "+(this.props.dataSelect=='4'?'main_color':'nav_list_color')}>
          <div className="icon iconfont icon-wode nav_list_img">
          </div>
          <span>我的</span>
        </Link>
      </footer>
    }
  }
 
Tabbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabbar)

export default Tabbar;