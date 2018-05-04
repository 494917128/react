
(function ($, window, document, undefined) {
	window.page_tabbar = ['#/','#/demo2','#/shop','#/my']
	window.page_login = ['#/swiper','#/register','#/login']
	window.api = {
		// 判断是否在tabbar页面
		isTabbar:function(hash) {
			var boolean = false
			for(var i=0,len=page_tabbar.length;i<len;i++){
				if(hash == page_tabbar[i]){
					boolean = boolean||true
				}
			}
			return boolean
		},
		isLogin:function(hash,that){
			var boolean = false
			for(var i=0,len=page_login.length;i<len;i++){
				if(hash == page_login[i]){
					boolean = boolean||true
				}
			}
			if(boolean){
				api.haveUserId(that);
			}else{
				api.getUserId(that);
			}
		},
		// 没有userid跳到登录页
		getUserId:function(that) {
			if (!localStorage.getItem("userId")) {
				that.$router.goTo('swiper');
			}
		},
		// 有userid跳到首页(登录页)
		haveUserId:function(that){
			if (localStorage.getItem("userId")) {
				that.$router.goTo('/');
			}
		},
		// ajax提交form表单
		formsubmit:function (formid,success) {
		    var formData = $('#'+formid).serialize();
		    var formurl = $('#'+formid).attr('action');
		    var data = new FormData($('#flow_data')[0]);
		    $.ajax({
		        url:formurl,// 跳转到 action
		        data:formData,
		        type:'post',
		        cache:false,
		        dataType:'json',
		        success:function(data) {
		            if(data.state==1){
		                if(data.msg){
		                    alert(data.msg);
		                }
		                if(data.url){
		                    
		                }
		                success(data);
	
		            }else{
		                alert(data.msg);
		                //$.alert(data.msg,'错误提示');
		            }
		        },
		        error : function() {
		            alert('异常');
		        }
		    });
		    return false;
		},
		//获取页面参数（?后面的）
	    getUrlParam: function (name) {
	        var match = new RegExp('[?&]'+name+'=([^&]*)').exec(location.href);
	        return match&&decodeURIComponent(match[1]);
	    },
	
	};
})(jQuery, window, document);