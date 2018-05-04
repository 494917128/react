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
    currentAnimate: (type) => {
      dispatch(currentAnimate(type))
    }
  }
}
 
class Header extends React.Component {
  render() {
    return (
      <div className="myHeader main_bg">
        {this.props.title}
        {this.props.back && 
          <a onClick={()=>{this.props.currentAnimate("right");window.history.back()}}>
            <span className="icon iconfont icon-fenxiang"></span>返回
          </a>
        }
      </div>
    );
  }
}

Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
 
export default Header;