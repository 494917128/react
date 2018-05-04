import React from 'react';
import { Link } from 'react-router-dom';
import Tabbar from '../components/tabbar'

import $ from '../js/jquery-3.3.1.min'
import Swiper from '../js/swiper'


class App extends React.Component {
	// 这个方法名称是已经定义好的，不能改名称。用于定义初始状态
    constructor(props){
        super(props);
		this.state = {
			mySwiper_progress:'',
			title:["精选","动态","频道"],
			swiper_img:[{img:require("../images/bg_wo.jpg"),href:''},{img:require("../images/bg_wo.jpg"),href:''}],
			content1_nav:[
				{icon:require("../images/bg_wo.jpg"),text:'话题',href:''},
				{icon:require("../images/bg_wo.jpg"),text:'专题',href:''},
				{icon:require("../images/bg_wo.jpg"),text:'文章',href:''},
				{icon:require("../images/bg_wo.jpg"),text:'认证号',href:''}
			],
			page_list:[{
				name: '名字名字名字名字名字名字名字名字名字名字名字',
				address: '浙江 杭州杭州杭州杭州杭州杭州',
				photo: require("../images/bg_wo.jpg"),
				pet:{
					name: '名字名字名字名字名字名字名字名字名字名字名字',
					type: '类别',
					photo: require("../images/bg_wo.jpg"),
					sex: 'female'
				},
				image: require("../images/bg_wo.jpg"),
				like:{
					people:[{photo:require("../images/bg_wo.jpg")},{photo:require("../images/bg_wo.jpg")},{photo:require("../images/bg_wo.jpg")}],
					num:159
				},
				comment:[{
					name: "名字名字名字名字名字名字名字名字",
					text: "评论评论评论评论评论评论评论评论评论评论评论评论评论评论"
				},{
					name: "名字",
					text: "评论评论"
				},{
					name: "名字",
					text: "评论评论"
				}],
				comment_more:false
			},{
				name: '名字2',
				address: '浙江 温州',
				photo: require("../images/bg_wo.jpg"),
				pet:{
					name: '名字',
					type: '类别',
					photo: require("../images/bg_wo.jpg"),
					sex: 'female'
				},
				image: require("../images/bg_wo.jpg"),
				like:{
					people:[{photo:require("../images/bg_wo.jpg")},{photo:require("../images/bg_wo.jpg")},{photo:require("../images/bg_wo.jpg")}],
					num:159
				},
				comment:[{
					name: "名字",
					text: "评论评论"
				},{
					name: "名字",
					text: "评论评论"
				},{
					name: "名字",
					text: "评论评论"
				}],
				comment_more:10
			}],
			index:'',
			fix_top: 0,
		}
	}
	slideTo (index){
		this.mySwiper.slideTo(index)
	}
	handleScroll(){
		var that = this
		var change1 = false,change2 = false
		$('.container1_content').map(function() {
			if($(this).offset().top<50&&($(this).offset().top+$(this).outerHeight(true)>50)){
				that.setState({
					index: $(this).attr("data-index")
				})
				change1 = true
			}
			
			if($(this).offset().top<119&&($(this).offset().top+$(".container1_content_fixed").outerHeight(true)>104)){
				that.setState({
					fix_top: -54
				})
				change2 = true
			}
		})
		if(!change1){
			this.setState({
				index: ""
			})
		}
		if(!change2){
			this.setState({
				fix_top: 0
			})
		}
	}
	touchstart (e){
		this.startX = e.changedTouches[0].pageX;
		this.startY = e.changedTouches[0].pageY;
	}
	touchmove (e){

	    var endX = e.changedTouches[0].pageX,
	    endY = e.changedTouches[0].pageY;

	    var distanceX = endX-this.startX;
	    var distanceY = endY-this.startY;

	    if(Math.abs(distanceX)<Math.abs(distanceY)&&!this.isdetachEvents){
        	this.mySwiper.detachEvents(); 
        	this.isdetachEvents = true
	    }
	}
	touchend (){
		if(this.isdetachEvents){
			this.mySwiper.attachEvents();
			this.isdetachEvents = false
    	}
	}
	//在渲染前调用,在客户端也在服务端
	componentWillMount (){
		console.log('调用前')
		
	}
	// 在第一次渲染后调用，只在客户端
	componentDidMount (){
		console.log("第一次渲染")
		// 轮播初始化
		var that = this
		this.startX = ''
		this.startY = ''
		this.isdetachEvents = ''
		setTimeout(()=>{
			that.mySwiper = new Swiper('#index_swiper', {
				autoplay: false,//可选选项，自动滑动
				resistanceRatio:0,
				watchSlidesProgress: true,
				threshold : 20,
				on:{
				    progress: function(progress){
				    	that.setState({
							mySwiper_progress: progress
						})
				    }
			    }
			})
			new Swiper('#content_swiper',{
				autoplay: true,
				loop : true,
				pagination: {
					el: '.swiper-pagination',
				},
			})
		},400)


		// 下拉刷新初始化
		// mui.init()
		// mui('#content1').pullRefresh({
		// 	container: '#content1',
		// 	down: {
		// 			height:50,//可选,默认50.触发下拉刷新拖动距离,
		// 			callback: function(){console.log(1);setTimeout(()=>{mui('#content1').pullRefresh().endPulldownToRefresh()},1500)}
		// 		},
		// 	up: {
		// 			contentrefresh: '正在加载...',
		// 			callback: function(){}
		// 		}
		// })
		// mui('#content2').pullRefresh({
		// 	container: '#content2',
		// 	down: {
		// 			height:50,//可选,默认50.触发下拉刷新拖动距离,
		// 			callback: function(){console.log(1);setTimeout(()=>{mui('#content2').pullRefresh().endPulldownToRefresh()},1500)}
		// 		},
		// 	up: {
		// 			contentrefresh: '正在加载...',
		// 			callback: function(){}
		// 		}
		// })
		// mui('#content3').pullRefresh({
		// 	container: '#content3',
		// 	down: {
		// 			height:50,//可选,默认50.触发下拉刷新拖动距离,
		// 			callback: function(){console.log(1);setTimeout(()=>{mui('#content3').pullRefresh().endPulldownToRefresh()},1500)}
		// 		},
		// 	up: {
		// 			contentrefresh: '正在加载...',
		// 			callback: function(){}
		// 		}
		// })

	  	// 滚动监听
	  	document.querySelector('#content1').addEventListener('scroll', function(e) {
			that.handleScroll()
		});
		document.querySelector('#content1').addEventListener('scrollend', function(e) {
			that.handleScroll()
		});
	}
	// 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
	componentWillReceiveProps (){

	}
	// 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
	componentWillUpdate (){

	}
	// 在组件完成更新后立即调用。在初始化时不会被调用。
	componentDidUpdate (){
		console.log("完成更新")
	}
	// 在组件从 DOM 中移除的时候立刻被调用。
	componentWillUnmount (){
		console.log("删除DOM")
	}
	
	render() {
		return <div className="page">

			<div className="index_header main_bg flex_row">
				<div className="flex_row">
					{this.state.title.map((item,index) =>
					  <div className="index_header_item" onClick={this.slideTo.bind(this,index)} key={index}>{item}</div>
					)}
					<div className="index_header_active" style={{left:'calc(10px + 17vw + ( '+this.state.mySwiper_progress*2+' ) * 22vw)'}}></div>
				</div>

				<i className="iconfont icon-friend_add index_header_button"></i>
			</div>

			<div className="swiper-container" id="index_swiper">
			  <div className="swiper-wrapper">
			  	
				<div className="swiper-slide" onTouchMove={this.touchmove.bind(this)} onTouchStart={this.touchstart.bind(this)} onTouchEnd={this.touchend.bind(this)}>
				
					{(this.state.index||this.state.index===0) &&
						<div className="container1_content_title flex_between container1_content_fixed" style={{top:this.state.fix_top}}>
							<img src={this.state.page_list[this.state.index].photo} className="container1_content_photo" />
							<div className="container1_content_info flex_column">
								<div className="flex_row" style={{alignItems: 'flex-end',width: '100%'}}>
									<div className="container1_content_name one_line">{this.state.page_list[this.state.index].name}</div>
									<div className="container1_content_address one_line">{this.state.page_list[this.state.index].address}</div>
								</div>
								<div className="container1_content_pet flex_row" style={{alignSelf: 'self-start'}}>
									<img src={this.state.page_list[this.state.index].pet.photo} className="container1_content_pet_photo" />
									<div className="container1_content_pet_name one_line">{this.state.page_list[this.state.index].pet.name}</div>
									<div className="container1_content_pet_type one_line">{this.state.page_list[this.state.index].pet.type}</div>
									<i className="iconfont icon-pets container1_content_pet_sex" style={{color:this.state.page_list[this.state.index].pet.sex=='male'?'#A4D3EE':'#EE7AE9'}}></i>
								</div>
							</div>
							<div className="container1_content_attention main_color">+ 关注</div>
						</div>
					}
					
					<div className="container" id="content1">
						<div className="mui-scroll">
							
							<div className="swiper-container" id="content_swiper">
							  <div className="swiper-wrapper">

								{this.state.swiper_img.map((item,index) =>
									<img src={item.img} className="swiper-slide swiper_img" key={index} />
								)}
							  </div>
							  <div className="swiper-pagination"></div>
							</div>
							
							<div className="container1_nav flex_row">
								{this.state.content1_nav.map((item,index) =>
									<div className="container1_nav_item flex_column" key={index}>
										<img src={item.icon} className="container1_nav_icon" />
										{item.text}
									</div>
								)}
							</div>
							
							
							{[5,4,3,2,1].map(()=>this.state.page_list.map((items,index) =>
								<div className="container1_content" data-index={index} key={index}>
									<div className="container1_content_title flex_between">
										<img src={items.photo} className="container1_content_photo" />
										<div className="container1_content_info flex_column">
											<div className="flex_row" style={{alignItems: 'flex-end',width: '100%'}}>
												<div className="container1_content_name one_line">{items.name}</div>
												<div className="container1_content_address one_line">{items.address}</div>
											</div>
											<div className="container1_content_pet flex_row" style={{alignSelf: 'self-start'}}>
												<img src={items.pet.photo} className="container1_content_pet_photo" />
												<div className="container1_content_pet_name one_line">{items.pet.name}</div>
												<div className="container1_content_pet_type one_line">{items.pet.type}</div>
												<i className="iconfont icon-pets container1_content_pet_sex" style={{color:items.pet.sex=='male'?'#A4D3EE':'#EE7AE9'}}></i>
											</div>
										</div>
										<div className="container1_content_attention main_color">+ 关注</div>
									</div>
									<img src={items.image} className="container1_content_img" />
									<div className="container1_content_more flex_between">
										<div className="flex_row">
											{items.like.people.map((item,index) =>
												<img src={item.photo} className="container1_content_more_photo" key={index} />
											)}
											<div className="container1_content_likeNum">{items.like.num} 赞</div>
										</div>
										<div className="flex_row">
											<i className="iconfont icon-like1"></i>
											<i className="iconfont icon-weibiaoti-"></i>
											<i className="iconfont icon-web-icon-"></i>
										</div>
									</div>
									{items.comment.map((item,index) =>
										<div className="container1_content_comment" key={index}>
											<span style={{color: '#007AFF'}}>{item.name}</span>
											<span> 回复 </span>
											<span style={{color: '#007AFF'}}>{item.name}</span>
											<span>：{item.text}</span>
										</div>
									)}
									{items.comment_more &&
										<div className="container1_content_comment_more">查看所有{items.comment_more}条评论</div>
									}
									{(this.state.fix_top==-54&&index==this.state.index) &&
										<div className="container1_content_title flex_between" style={{position: 'absolute',bottom: 0}}>
											<img src={items.photo} className="container1_content_photo" />
											<div className="container1_content_info flex_column">
												<div className="flex_row" style={{alignItems: 'flex-end',width: '100%'}}>
													<div className="container1_content_name one_line">{items.name}</div>
													<div className="container1_content_address one_line">{items.address}</div>
												</div>
												<div className="container1_content_pet flex_row" style={{alignSelf: 'self-start'}}>
													<img src={items.pet.photo} className="container1_content_pet_photo" />
													<div className="container1_content_pet_name one_line">{items.pet.name}</div>
													<div className="container1_content_pet_type one_line">{items.pet.type}</div>
													<i className="iconfont icon-pets container1_content_pet_sex" style={{color:items.pet.sex=='male'?'#A4D3EE':'#EE7AE9'}}></i>
												</div>
											</div>
											<div className="container1_content_attention main_color">+ 关注</div>
										</div>
									}
								</div>
							))}
							

						</div>
					</div>
				</div>
				
				<div className="swiper-slide">
					<div className="container mui-content mui-scroll-wrapper" id="content2">
						<div className="mui-scroll">
							<ul className="mui-table-view mui-table-view-chevron">
							 	 动态
							</ul>
						</div>
					</div>
				</div>
				
				<div className="swiper-slide">
					<div className="container mui-content mui-scroll-wrapper" id="content3">
						<div className="mui-scroll">
							<ul className="mui-table-view mui-table-view-chevron">
							 	 频道
							</ul>
						</div>
					</div>
				</div>
			  </div>
			</div>

			<Tabbar dataSelect="" />
			
		</div>;
	}
};

export default App;