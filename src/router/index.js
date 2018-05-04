import React from 'react';
import { Provider,connect } from 'react-redux';
import store from '../store';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import App1 from '../App';
import Index from '../pages/index';
import Count from '../pages/count'
import Shop from '../pages/shop';
import My from '../pages/my';
import Setting from '../pages/setting';


import '../style/swiper-4.2.0.min.css';
import '../style/mui.min.css';
import '../fonts/iconfont.css'
import '../style/app.css';
import '../style/shop.css'
import '../style/index.css'

// redux的传参
const mapStateToProps = (state, ownProps) => {
  return {
    animateCls: state.animateCls
  }
}

class MyRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route render={({ location }) => {
          return(
            <ReactCSSTransitionGroup
                transitionName={this.props.animateCls?this.props.animateCls:'normal'}
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={this.props.animateCls?300:1}
                transitionLeaveTimeout={this.props.animateCls?300:1}
            >
              <div className="Router" key={location.pathname}>
                <Route location={location} exact path='/' component={Index}/>
                <Route location={location} exact path='/count' component={Count}/>
                <Route location={location} exact path='/shop' component={Shop}/>
                <Route location={location} exact path='/my' component={My}/>
                <Route location={location} exact path='/setting' component={Setting}/>
                <Route location={location} exact path='/app' component={App1}/>
              </div>
            </ReactCSSTransitionGroup>
          )
        }}/>

      </HashRouter>
    )
  }
}

// 将redux的方法和数据加载
MyRouter = connect(
  mapStateToProps
)(MyRouter)

export default MyRouter