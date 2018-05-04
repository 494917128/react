export function MP(ak) {  
  
	return new Promise(function (resolve, reject) {  
		if( ! function(){try{return BMap,true}catch(e){}}() ){
			window.BMap_loadScriptTime = (new Date).getTime();
			window.BMap=window.BMap||{};
			window.BMap.apiLoad=function(){
				resolve(BMap)
				delete window.BMap.apiLoad;
				if(typeof init=="function"){
					init()
				}
			};
			var s=document.createElement('script');
			s.src='http://api.map.baidu.com/getscript?v=2.0&ak='+ak+'&services=&t=20180323171755';
			s.onerror = reject;
			document.body.appendChild(s);
		}else{
			resolve(BMap)
		}
  	})  

  
}

