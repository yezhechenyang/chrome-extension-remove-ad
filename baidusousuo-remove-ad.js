/*
	功能：百度搜索页面去广告
	作者：叶遮沉阳
	创建时间：2020/07/08
*/

//判断对象是否存在指定css样式的class
function hasClass(obj, cls) {
	if(obj.className){
		return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	}
}

//给对象添加css样式，或者获取对象的css样式
function css(obj, attr, value) {
	switch (arguments.length) {
		case 2:
			//读取属性值
			return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
			break;
		case 3:
			//设置属性
			if(obj && obj.style){obj.style[attr] = value;}
			break;
		default:
			return "";
	}
}

//隐藏元素
function hideObj(obj){
	css(obj, 'margin', '0');
	css(obj, 'padding', '0');
	css(obj, 'height', '0');
	css(obj, 'overflow', 'hidden');
}


//隐藏广告
function hideDom(){

	//搜索结果列表
	var list = document.querySelectorAll('#content_left>div');

	//是否为置顶帖子和普通帖子
	var flag = false;

	//c-container下的广告
	var adList;

	for(var i = 0; i < list.length; i++){
		flag = hasClass(list[i], 'c-container'); //普通搜索结果

		adList = list[i].querySelectorAll('span.ec_tuiguang_pplink');//c-container下的广告

		flag = flag && (adList.length == 0); //保证c-container下没有广告

		if(flag){
			continue;
		}else{  // 其他视为广告，隐藏之
			//css(list[i], 'display', 'none');

			//换种方式
			hideObj(list[i]);
		}
	}


	//右侧广告净化
	var divRight = document.querySelector('#content_right>div');
	hideObj(divRight);

}

//第一次加载调用
hideDom();

// MutationObserver 监听 document 中的元素是否发生改变
let mutationObserver = window.MutationObserver;
let observer = new MutationObserver(hideDom);
observer.observe(document, { childList: true, subtree: true });

