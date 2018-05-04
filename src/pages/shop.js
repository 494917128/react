import React from 'react';
import { Link } from 'react-router-dom';
import Tabbar from '../components/tabbar'

import Swiper from '../js/swiper'


class Shop extends React.Component {
	// 这个方法名称是已经定义好的，不能改名称。用于定义初始状态
    constructor(props){
        super(props);
		this.state = {
			swiper_img:[{img:require('../images/bg_wo.jpg'),href:''},{img:require('../images/bg_wo.jpg'),href:''}],
    		shop_nav:[
				{icon:'icon-meishi',color:'#F87F81',text:'主粮',href:''},
				{icon:'icon-lingshi',color:'#F4C380',text:'零食',href:''},
				{icon:'icon-qingjie',color:'#7FC9EC',text:'清洁',href:''},
				{icon:'icon-baojian',color:'#EBAAE1',text:'保健',href:''},
				{icon:'icon-riyongpin',color:'#FF9786',text:'日用品',href:''},
				{icon:'icon-pintuangou',color:'#F5827B',text:'拼团',href:''},
				{icon:'icon-youhuiquan',color:'#BB98DA',text:'优惠券',href:''},
				{icon:'icon-icon--',color:'#87D7C1',text:'全球购',href:''},
				{icon:'icon-duihuan',color:'#FDD738',text:'兑换专区',href:''},
				{icon:'icon-gengduo-tianchong',color:'#81C8EC',text:'更多',href:''}
			],
		}
	}
	// 在第一次渲染后调用，只在客户端
	componentDidMount (){
		console.log("第一次渲染")
		// 轮播初始化
		setTimeout(()=>{
			new Swiper('.swiper-container',{
				autoplay: true,
				loop : true,
				pagination: {
					el: '.swiper-pagination',
				},
			})
		},400)
		
	}

	render() {
		return <div className="page">
  	
			<div className="shop_header main_bg flex_between">
				<Link to="/" className="flex_column shop_header_button">
					<i className="iconfont icon-fenlei"></i>
					分类
				</Link>
				<Link to="/search" className="shop_header_input">
					<i className="iconfont icon-search"></i>
					搜索商品
				</Link>
				<Link to="/" className="flex_column shop_header_button">
					<i className="iconfont icon-tubiao15"></i>
					消息
				</Link>
			</div>
	  	
			<div className="container">
				<div className="swiper-container">
				  <div className="swiper-wrapper">
				  		{this.state.swiper_img.map((item,index) =>
				  			<Link to={"/"+item.href} key={index} className="swiper-slide">
				  				<img src={item.img} className="swiper_img" />
				  			</Link>
						)}
				    
				  </div>
				  <div className="swiper-pagination"></div>
				</div>
				
				<div className="shop_nav flex_row">
					{this.state.shop_nav.map((item,index) =>
					<Link to={"/"+item.href} className="shop_nav_item flex_column" key={index}>
						<i className={'iconfont shop_nav_icon '+item.icon} style={{color:item.color}}></i>
						{item.text}
					</Link>
					)}
				</div>
			</div>

			<Tabbar dataSelect="3"></Tabbar>
		</div>
	}
};
  
export default Shop;