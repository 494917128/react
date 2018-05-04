import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header'

var style={
	page:{
		backgroundColor: '#f2f2f2',
	},
	container:{
	  height: 'calc(100vh - 50px)',
	  overflow: 'scroll',
	},
	mui_table_view:{
		marginTop: '15px',
		fontSize: '15px',
		position: 'inherit',
	},
	mui_badge:{
		right: '35px',
	},
	setting_iconfont:{
		position: 'absolute',
		top: '0',
		bottom: '0',
		right: '15px',
		margin: 'auto',
		fontSize: '13px',
		color: '#C0C0C0',
		lineHeight: '1',
		display: 'flex',
		alignItems: 'center',
	},

	setting_button:{
		margin: '1.17647059em 0',
		textAlign: 'center',
	}
}

class Setting extends React.Component {
	// 这个方法名称是已经定义好的，不能改名称。用于定义初始状态
    constructor(props){
        super(props);
		this.state = {
	    	title: '设置',
	    	setting_list:[
	    		[{
	    			text: '个人资料',
	    			href: '',
	    			content: '',
	    		},{
	    			text: '账号安全',
	    			href: '',
	    			content: '',
	    		}],
	    		[{
	    			text: '消息提醒',
	    			href: '',
	    			content: '',
	    		},{
	    			text: '视频播放设置',
	    			href: '',
	    			content: '',
	    		},{
	    			text: '黑名单',
	    			href: '',
	    			content: '',
	    		},{
	    			text: '通用',
	    			href: '',
	    			content: '',
	    		}],
	    		[{
	    			text: '小技巧',
	    			href: '',
	    			content: '',
	    		},{
	    			text: '打个分呗',
	    			href: '',
	    			content: '',
	    		},{
	    			text: '检测新版本',
	    			href: '',
	    			content: '当前版本1.0.0',
	    		},{
	    			text: '清除缓存',
	    			href: '',
	    			content: '',
	    		},{
	    			text: '关于我',
	    			href: '',
	    			content: '',
	    		}]
	    	]
		}
	}
	// 在第一次渲染后调用，只在客户端
	componentDidMount (){
		console.log("第一次渲染")

	}

	render() {
		return <div style={style.page}>
			<Header title={this.state.title} back={true}></Header>

			<div className="container" style={style.container}>
				
				{this.state.setting_list.map((items,index)=>
					<ul className="mui-table-view" style={style.mui_table_view} key={index}>

						{items.map((item,index)=>
							<li className="mui-table-view-cell" key={index}>
								<Link to={item.href}>
									{item.content && 
										<span className="mui-badge" style={style.mui_badge}>{item.content}</span>
									}
									{item.text}
									<i className="iconfont icon-right" style={style.setting_iconfont}></i>
								</Link>
							</li>
						)}
					</ul>
				)}

				
			  <ul className="mui-table-view" style={style.setting_button}>
			  	<li className="mui-table-view-cell">
				      	退出登录
			  	</li>
			  </ul>

			</div>

		</div>
	}
};
  
export default Setting;

