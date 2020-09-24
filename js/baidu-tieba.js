/*
	功能：百度贴吧去广告
	作者：叶遮沉阳
	创建时间：2020/07/07
*/
	
//div[ad-dom-img]
// let ads = document.querySelectorAll('div[ad-dom-img]');
// if(ads.length > 0){
// 	Array.from(ads).forEach(ele => ele.style['display']='none');
// }

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




(function () {
	// ================================贴吧主页优化	
	// 顶部滚动图片包含广告,所以消失
	let recLeft = document.getElementById("rec_left");
	if(recLeft) {
		recLeft.remove();
		console.log("不好意思，顶部滚动图片消失了！！！匹配规则：#rec_left");
	}
	
	// 顶部推荐吧没营养，所以消失
	let rTopSec = document.getElementsByClassName("r-top-sec");
	if(rTopSec && rTopSec.length > 0){
		rTopSec[0].remove();
		console.log("顶部推荐吧已消失，匹配规则：.r-top-sec");
	}
	
	// 直播也没必要留
	let spageLiveshowSlide = document.getElementById("spage_liveshow_slide");
	if(spageLiveshowSlide) {
		spageLiveshowSlide.remove();
		console.log("不好意思，直播也消失了！！！匹配规则：#spage_liveshow_slide");
	}
	
	// 二维码客户端
	let appDownloadBox = document.getElementsByClassName("app_download_box");
	if(appDownloadBox && appDownloadBox.length > 0){
		appDownloadBox[0].remove();
		console.log("客户端二维码已消失，匹配规则：.app_download_box");
	}
	
	// 贴吧娱乐面板 #media_item
	let mediaItem = document.getElementById("media_item");
	if(mediaItem) {
		mediaItem.remove();
		console.log("不好意思，贴吧娱乐面板也消失了！！！匹配规则：#media_item");
	}
	
	let spageGameTabWrapper = document.getElementById("spage_game_tab_wrapper");
	// 我的游戏面板 #spage_game_tab_wrapper
	if(spageGameTabWrapper) {
		spageGameTabWrapper.remove();
		console.log("不好意思，我的游戏面板也消失了！！！匹配规则：#spage_game_tab_wrapper");
	}
	
	// ================================贴吧个人主页优化
	let matchStr = "#headinfo_wrap";
	let removeObjs = document.querySelectorAll(matchStr);
	Array.from(removeObjs).forEach(i => {
		i.remove();
		console.log("我的贴吧主页元素移除，匹配规则：" + matchStr);
	});
	
	//纠正个人主页头像logo显示 #userinfo_wrap
	let userinfoWrap = document.getElementById("userinfo_wrap");
	if(userinfoWrap) {
		userinfoWrap.style['margin-top'] = '50px';
		console.log("已纠正主页贴吧logo显示，#userinfo_wrap.style['margin-top'] = '50px'");
	}
	
	// 爱逛的吧全部展示
	// 显示的吧 #forum_group_wrap
	let forumGroupWrap = document.getElementById("forum_group_wrap");
	if(forumGroupWrap){
		// 移除更多收起按钮
		let more = forumGroupWrap.querySelector(".more");
		if(more) {
			more.click();
			more.remove();
		}
		// 隐藏的吧 #forumscontainer>.tbui_panel_content.j_panel_content 
		let forumscontainer = document.querySelector("#forumscontainer .tbui_panel_content.j_panel_content");
		//将隐藏的吧添入显示的吧
		if(forumscontainer){
			Array.from(forumscontainer.childNodes).forEach(i => {
				forumGroupWrap.appendChild(i);
			});
			document.querySelector(".pop-up-frame").remove();
			console.log("已成功整合爱逛的吧。。。");
		}
	}
	
	// ================================具体某吧主页优化
	// 解决部分贴吧logo显示
	//https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/
	let headImg = document.querySelector(".card_head_img");
	if(headImg){
		headImg.src = headImg.src.replace('http://m.tiebaimg.com','https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG');
	}
	
	// 自动签到
	let cancelFocus = document.querySelector(".cancel_focus");
	if(cancelFocus){
		let canSign = document.querySelector(".j_cansign");
		if(canSign) canSign.click();
	}
	
	// 解决帖子列表图片左右箭头显示
	// let preAndNext = document.querySelectorAll(".small_btn_pre.j_small_pic_pre, .small_btn_next.j_small_pic_next");
	// if(preAndNext) Array.from(preAndNext).forEach(i => i.style.display='');
	
	// 动态内容处理
	function callback(){
		// ================================具体某吧主页动态内容优化
		// 解决帖子列表图片显示
		let listPic = document.querySelectorAll(".threadlist_pic.j_m_pic");
		// if(listPic) Array.from(listPic).forEach(i => i.style.cssText='display: inline; width: auto; height: 135px;');
		if(listPic) Array.from(listPic).forEach(i => i.style.cssText='');
		
		// .j_retract
		let retract = document.querySelectorAll(".j_retract");
		if(retract) Array.from(retract).forEach(i => i.style.cssText='');
	}
	let observer = new MutationObserver(callback);
	observer.observe(document, { childList: true, subtree: true });
})();


