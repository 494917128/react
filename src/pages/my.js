import React from 'react'
import { connect } from 'react-redux'
import { currentAnimate } from '../store/actions'
import { Link } from 'react-router-dom';
import Tabbar from '../components/tabbar'

// redux的传参
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

var style={
  my_header:{
    fontSize: "18px",
    height: "50px",
    padding: "0 5px",
  },
  my_header_button:{
    alignSelf: "stretch",
    padding: "0 10px",
    fontSize: "24px",
    lineHeight: "1",
    display: "flex",
    alignItems: "center",
    color: "#fff",
  },
  hello:{
    backgroundColor: "#f2f2f2",
  },
  container:{
    height: "calc(100vh - 100px)",
    overflow: "scroll",
  },

  my_info:{
    backgroundColor: "#fff",
    color: "#333",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  my_info_photo:{
    height: "65px",
    width: "65px",
    borderRadius: "50%",
    marginRight: "10px",
    marginLeft: "5px",
    overflow: "hidden",
    backgroundColor: "#f2f2f2",
    flexShrink: "0",
  },
  my_info_view:{
    backgroundColor: "#fff",
    flex: "1",
    overflow: "hidden",
    padding: "7px",
  },
  my_info_name:{
    fontSize: "18px",
    lineHeight: "24px",
    padding: "3px 0",
    display: "flex",
    alignItems: "center",
  },
  icon_man:{
    fontSize: "13px",
    color: "#A4D3EE",
  },
  icon_woman:{
    fontSize: "13px",
    color: "#EE7AE9",
  },
  my_level:{
    fontSize: "12px",
    height: "14px",
    borderRadius: "7px",
    padding: "0 5px",
    backgroundColor: "#EEEEEE",
    display: "flex",
    alignItems: "center",
    marginLeft: "3px",
  },
  my_info_number:{
    fontSize: "12px",
    lineBreak: "15px",
    color: "#A0A0A0",
    padding: "3px 0",
  },
  my_info_home:{
    color: "#C0C0C0",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "5px",
  },
  icon_right:{
    fontSize: "14px",
    color: "#DCDCDC",
    paddingLeft: "3px",
  },


  my_message:{
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
  },
  my_message_item:{
    flex: "1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
  },
  my_message_span:{
    position: "relative",
    padding: "0 5px",
  },
  my_message_line:{
    height: "30px",
    width: "1px",
    backgroundColor: "#eee",
  },
  my_nav:{
    backgroundColor: "#fff",
    borderTop: "1px solid #EEEEEE",
    flexWrap: "wrap",
    alignItems: "center",
  },
  my_nav_item:{
    width: "calc(25% - 1px)",
    height: "70px",
    alignSelf: "stretch",
  },
  my_nav_num:{
    fontSize: "18px",
    lineHeight: "24px",
    paddingBottom: "3px",
  },
  my_nav_icon:{
    fontSize: "20px",
    height: "24px",
    width: "24px",
    paddingBottom: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  my_nav_text:{
    fontSize: "12px",
    lineHeight: "24px",
    color: "#666666",
  },
  my_nav_title:{
    backgroundColor: "#fff",
    borderTop: "10px solid #f2f2f2",
    fontSize: "14px",
    height: "40px",
    alignItems: "center",
    padding: "0 15px",
  },
  my_nav_title_more:{
    color: "#999999",
  },
  // my_nav .my_message_line:nth-child(8n){
  //   display: none;
  // }
}

class My extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: '我的',
      my_info: {
        id: 233333,
        name: '王王王王王王王王王王王王王王王王王王王',
        sex: 'man',
        photo: '',
        level: 1,
      },
      my_nav:[{text:'宠钻',num:0,href:''},{text:'宠币',num:0,href:''},{text:'优惠券',num:0,href:''},{text:'礼物',num:0,href:''}],
      nav_item:[
        {
          title: '日常管理',
          more: false,
          list: [{
            text: '宠物',
            icon: 'icon-cat',
            color: '#89B1FF',
            href: '',
          },{
            text:'宠友',
            icon: 'icon-gerenzhongxinlv',
            color: '#83B5FF',
            href: '',
          },{
            text:'社区',
            icon: 'icon-iconindexsel',
            color: '#73D7FF',
            href: '',
          },{
            text:'收藏',
            icon: 'icon-collection-b',
            color: '#7AD4FF',
            href: '',
          }]
        },{
          title: '商城购物',
          more: true,
          href: '',
          list: [{
            text: '购物车',
            icon: 'icon-gouwucheman',
            color: '#FF9582',
            href: '',
          },{
            text: '购物订单',
            icon: 'icon-dingdan',
            color: '#FC967F',
            href: '',
          },{
            text: '我的售后',
            icon: 'icon-shouhoufuwuicon',
            color: '#FFBA79',
            href: '',
          },{
            text: '收货地址',
            icon: 'icon-address',
            color: '#FFB880',
            href: '',
          }]
        },{
          title: '其他',
          more: false,
          list: [{
            text: '账户明细',
            icon: 'icon-zhanghuchongzhi-copy',
            color: '#FF7D92',
            href: '',
          },{
            text: '个性装扮',
            icon: 'icon-mofabang',
            color: '#FF87B8',
            href: '',
          },{
            text: '游戏中心',
            icon: 'icon-iconfontyouxihudong',
            color: '#FC87B8',
            href: '',
          },{
            text: '意见反馈',
            icon: 'icon-fankui-tianchong',
            color: '#D1A5F2',
            href: '',
          },{
            text: '公益广告',
            icon: 'icon-gongyizhongxin',
            color: '#FF7D91',
            href: '',
          },{
            text: '专业认证',
            icon: 'icon-renzheng',
            color: '#FCA485',
            href: '',
          },{
            text: '我的技术',
            icon: 'icon-shangjia',
            color: '#FCC78E',
            href: 'mySkill',
          },{
            text: '设置',
            icon: 'icon-shezhi-tianchong',
            color: '#BABABA',
            href: 'setting',
          }]
        }
      ]
    }
  }

  render() {
    return <div style={style.hello}>
      <div style={style.my_header} className="main_bg flex_between">
        <Link onClick={() => this.props.currentAnimate('left')} to="/">
          <i style={style.my_header_button} className="iconfont icon-erweima"></i>
        </Link>
        <div>{this.state.title}</div>
        <Link onClick={() => this.props.currentAnimate('left')} to="/">
          <i style={style.my_header_button} className="iconfont icon-friend_add"></i>
        </Link>
      </div>
    
      <div style={style.container} className="container">
        <Link onClick={() => this.props.currentAnimate('left')}to="/" style={style.my_info}>
          <img src={this.state.my_info.photo} style={style.my_info_photo} />
          <div style={style.my_info_view}>
            <div style={style.my_info_name}>
              <div className="one_line">{this.state.my_info.name}</div>
              <i className={'iconfont '+(this.state.my_info.sex=='man'?'icon-man':'icon-woman')} style={this.state.my_info.sex=='man'?style.icon_man:style.icon_woman}></i>
              <div style={style.my_level}>Lv{this.state.my_info.level}</div>
            </div>
            <div style={style.my_info_number} className="one_line">id：{this.state.my_info.id}</div>
          </div>
          <div style={style.my_info_home}>
            个人主页<i className="iconfont icon-right" style={style.icon_right}></i>
          </div>
        </Link>
        
        <div style={style.my_message}>
          <Link onClick={() => this.props.currentAnimate('left')} to="/" style={style.my_message_item}>签到</Link>
          <div style={style.my_message_line}></div>
          <Link onClick={() => this.props.currentAnimate('left')} to="/" style={style.my_message_item}><span style={{position:'relative',padding:'0 5px'}}>消息<div className="prompt main_bg">1</div></span></Link>
        </div>
        <div className="flex_row" style={style.my_nav}>
          {this.state.my_nav.map((item,index)=>
            <Link onClick={() => this.props.currentAnimate('left')} to="/" style={style.my_nav_item} className="flex_column" key={index}>
              <div style={style.my_nav_num}>{item.num}</div>
              <div style={style.my_nav_text}>{item.text}</div>
            </Link>
          )}
        </div>

        {this.state.nav_item.map((items,index)=>
          <div key={index}>
            <div style={style.my_nav_title} className="flex_between">
              <div>{items.title}</div>
              {items.more &&
                <Link onClick={() => this.props.currentAnimate('left')} to={'/'+items.href} style={style.my_nav_title_more}>更多<i className="iconfont icon-right"></i></Link>
              }
            </div>
            <div style={style.my_nav} className="flex_row">
              {items.list.map((item,index)=>

                  <Link onClick={() => this.props.currentAnimate('left')} to={'/'+item.href} style={style.my_nav_item} className="flex_column" key={index}>
                    <i className={'iconfont '+item.icon} style={{...style.my_nav_icon,color:item.color}}></i>
                    <div style={style.my_nav_text}>{item.text}</div>
                  </Link>
                  // <div style={style.my_message_line}></div>

              )}
            </div>
          </div>
        )}
        <div style={{height:'40px',width:'100%'}}></div>
      </div>

      <Tabbar dataSelect="4"></Tabbar>

    </div>
  }
};

My = connect(
  mapStateToProps,
  mapDispatchToProps
)(My)

export default My;