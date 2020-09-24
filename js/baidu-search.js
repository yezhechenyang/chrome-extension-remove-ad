/*
	功能：百度搜索页面去广告
	作者：叶遮沉阳
	创建时间：2020/07/08
*/

let filter_words = ['女优'
	,'飞机杯']

//隐藏广告
function hideDom(){
	//搜索结果列表
	let list = document.querySelectorAll('#content_left>div');
	//是否为置顶帖子和普通帖子
	let flag = false;
	//c-container下的广告
	let adList;
	//遍历搜索结果列表
	for(let i = 0; i < list.length; i++){
		//普通搜索结果
		flag = hasClass(list[i], 'c-container');
		//c-container下的广告
		adList = list[i].querySelectorAll('span.ec_tuiguang_pplink');
		//保证c-container下没有广告
		flag = flag && (adList.length === 0);
		//如果不是正常搜索结果
		if(!flag){
			//隐藏
			hideObj(list[i]);
		}
		
		//再加一层广告过滤
		if(hasAdText(list[i])){
			hideCContainerAd(list[i], '成功隐藏广告');
		}
		
		// 隐藏保障企业
		if(list[i].querySelectorAll('[class*=baozhang]').length > 0){
			hideCContainerAd(list[i], '成功隐藏保障企业');
		}

		//关键字过滤搜索结果列表
		let text = list[i].innerText;
		let contain_word = filter_words.filter(n=>text.indexOf(n)>-1).length>0;
		if(contain_word) hideObj(list[i]);
	}

	//右侧广告净化
	let divRight = document.querySelector('#content_right>div');
	hideObj(divRight);




}

// 搜索结果列表广告隐藏
function hideCContainerAd(obj, msg){
	obj.style.display='none';
	console.log(msg + '，div#'+obj.getAttribute('id')+'.'+obj.getAttribute('class').replace(/\s+/g, '.'));
}

// 判断是否包含广告文本，一般<span>中的innerText为广告
function hasAdText(obj){
	let oSpan = obj.getElementsByTagName("span");
	if(oSpan && oSpan.length > 0){
		let spanArr=Array.from(oSpan).reverse();
		for(let i = 0;i < spanArr.length;i++){
			if(spanArr[i].innerText == '广告') return true;
		};
	}
	return false;
}

//第一次加载调用
hideDom();

// MutationObserver 监听 document 中的元素是否发生改变
let observer = new MutationObserver(hideDom);
observer.observe(document, { childList: true, subtree: true });



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