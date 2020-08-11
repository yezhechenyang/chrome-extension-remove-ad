/*
	功能：百度贴吧去广告
	作者：叶遮沉阳
	创建时间：2020/07/07
*/

//div[ad-dom-img]
let ads = document.querySelectorAll('div[ad-dom-img]');
if(ads.length > 0){
	Array.from(ads).forEach(ele => ele.style['display']='none');
}

function hideDom(){
	//帖子容器ul
	let ulItem = document.getElementById('thread_list');

	//帖子列表li
	let liArr = (ulItem && ulItem.children) ? ulItem.children : [];

	//是否为置顶帖子和普通帖子
	let flag = false;

	for(let i = 0; i < liArr.length; i++){
		flag = hasClass(liArr[i], 'thread_top_list_folder'); //置顶帖子
		flag = flag || hasClass(liArr[i], 'j_thread_list'); //普通帖子

		if (!flag) {  // 其他视为广告，隐藏之
			css(liArr[i], 'display', 'none');
		}
	}
}

hideDom();

let observer = new MutationObserver(hideDom);
observer.observe(document, { childList: true, subtree: true });

//判断对象是否存在指定css样式的class
function hasClass(obj, cls) {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

//给对象添加css样式，或者获取对象的css样式
function css(obj, attr, value) {
	switch (arguments.length) {
		case 2:
			//读取属性值
			return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
		case 3:
			//设置属性
			obj.style[attr] = value;
			break;
		default:
			return "";
	}
}