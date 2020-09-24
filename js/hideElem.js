// ADBlock，CSS规则命中实现，广告隐藏
var hideElem = {
    init: function() {
        var url = window.location.href;
        var selectorRules = [];
        for (var i = 0; i < cssRules.length; i++) {
            var cssRule, params = cssRules[i].split("##");
            if (params.length > 1) {
                cssRule = params[1];
                // 匹配特定域名, ~开头的，根据ADBlock规则跳过隐藏
                var flagMatch = (new RegExp(params[0]).test(url)),
                    flagExcept = (new RegExp("~").test(params[0]));
                if (!flagMatch || (flagMatch && flagExcept)) {
                    continue;
                }
            } else {
                cssRule = params[0];
            }
			
			// 动态生成的元素是查不到的
            // var selectors = document.querySelectorAll(cssRule);
            // if (selectors.length) {
            //     selectorRules.push(cssRule);
            // }     
			
			selectorRules.push(cssRule);
        }
        this.elemHideEmulation(selectorRules);
    },
    elemHideEmulation: function(selectors)
    {
      if (!selectors || !selectors.length)
        return;
      var selector = selectors.join(", ");
      this.insertStyleRule(selector + "{display: none !important;}");
    },
    insertStyleRule: function(rule){
        var styleElement;
        var styleElements = document.head.getElementsByTagName("style");
        if (styleElements.length) {
            styleElement = styleElements[0];
        }
        else {
            styleElement = document.createElement("style");
            document.head.appendChild(styleElement);
        }
        styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
		console.log("成功添加元素隐藏规则："+rule);
    }
};

hideElem.init();



// 优酷和爱奇艺去广告
var siteLink = window.location.href;
if(new RegExp("v.youku.com").test(siteLink)) {
	var timerTask = window.setInterval(function (){
		//$(".h5-ext-layer").find("div").remove();$(".control-play-icon").click()
		var oDiv = document.querySelectorAll(".h5-ext-layer div");
		if(oDiv && oDiv.length > 0){
			console.log(oDiv.length);
			Array.from(oDiv).forEach(i => i.remove());
			console.log("成功移除元素：.h5-ext-layer div")
			var oIcon = document.getElementsByClassName("control-play-icon");
			if(oIcon && oIcon.length>0) oIcon[0].click();
			console.log("成功点击：.control-play-icon");
			window.clearInterval(timerTask);
		}else{
			console.log(".h5-ext-layer div 尚未加载！！！")
		}
	}, 1000);
} else if(new RegExp("iqiyi.com").test(siteLink)) {
	callIqyTask();
	var itemTask = window.setInterval(function(){
		var oTime = document.querySelectorAll(".cd-time");
		if(oTime && oTime.length>0 && parseInt(oTime[0].innerText) > 1) {
			console.log('==========================================' + oTime[0].innerText);
			callIqyTask();
			//window.clearInterval(itemTask);
		}else{
			console.log('================== 大王叫我来巡山，我把人间转一转 ========================' + oTime[0].innerText);
		}
	}, 1000)
}

function callIqyTask() {
	console.log('callIqyTask...')
	var iqyTask = window.setInterval(function (){
		//$(".skippable-after").click()
		var oDiv = document.querySelectorAll(".skippable-after");
		if(oDiv && oDiv.length > 0){
			console.log(oDiv.length);
			oDiv[0].click();
			console.log("成功点击 .skippable-after");
			let oTime = document.querySelectorAll(".cd-time");
			if(oTime && oTime.length>0 && parseInt(oTime[0].innerText) > 1) { oTime[0].innerText=1 }
			window.clearInterval(iqyTask);
		}else{
			console.log(".skippable-after 尚未加载！！！")
		}
	}, 1000);
}

// 移除屏幕超链接广告
(function(){
	let oLink = document.querySelectorAll("a");
	Array.from(oLink).forEach(i => {
		let matchStyle = i.style.display == 'block'
			&& i.style.position == 'absolute'
			&& i.style.left.substr(0, 1) == '0'
			&& i.style.top.substr(0, 1) == '0'
			&& i.style.zIndex > 10;
		if(matchStyle) {
			i.remove();	
			console.log("成功移除全屏超链接广告，link：" + i.href);
		}
	});
})();

// 恢复误杀元素
// (function(){
// 	// 避免多个 onload 时间冲突
// 	var oldFn = window.onload;
// 	if(typeof oldFn != "function") {
// 		window.onload = callback;
// 	}else {
// 		window.onload = function() {
// 			oldFn();
// 			callback();
// 		}
// 	}
// 	// window.onload=callback;
// 	
// 	function callback(){
// 		let oblock = document.querySelectorAll(resumeEle.join());
// 		if(oblock) {
// 			Array.from(oblock).forEach(i =>{
// 				i.style.setProperty('display', 'inherit', 'important');
// 				console.log("已成功恢复元素：" + i.outerHTML.substr(0,100));
// 			})
// 		}
// 	}
// 	let observer = new MutationObserver(callback);
// 	observer.observe(document, { childList: true, subtree: true });
// })();


// 针对不规范拥有相同id的元素处理
// (function(){
// 	function callback(){
// 		let ids = ['sub-frame-error'];
// 		let idContainers = ['div'];
// 		let oIdContainers = document.querySelectorAll(idContainers.join());
// 		Array.from(oIdContainers).forEach(i => {
// 			let text = i.getAttribute('id') || '';
// 			let contain_ids = ids.filter(n=>text.indexOf(n)>-1).length>0;
// 			if(contain_ids) {
// 				i.style.display = 'none';
// 				console.log('命中匹配规则：' + ids.join() + '，隐藏改元素：' + i.outerHTML.substr(0,100));
// 			}
// 		});
// 	}
// 	callback();
// 	// let observer = new MutationObserver(callback);
// 	// observer.observe(document, { childList: true, subtree: true });
// })();