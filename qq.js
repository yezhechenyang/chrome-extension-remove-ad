/**
 * 功能：QQ空间网站净化
 * 作者：叶遮沉阳
 * 创建时间：2020-7-12
 */

//隐藏游戏应用 tab_menu_list
let tab_menu_list = document.querySelectorAll('#tab_menu_list>li');
if(tab_menu_list.length > 0){
	Array.from(tab_menu_list).forEach(ele => {if(ele.type === 'app' || ele.type === 'mv' || ele.type === 'class') ele.style['display']='none'});
}

//tab_switch
let tab_switch = document.getElementById('tab_switch');
if(tab_switch) tab_switch.style['display']='none';
//tab_hide_list
let tab_hide_list = document.getElementById('tab_hide_list');
if(tab_hide_list) tab_hide_list.classList.remove('none');

//mod-side-nav-recently-used
let recently_used = document.getElementsByClassName('mod-side-nav-recently-used');
if(recently_used.length > 0){
	Array.from(recently_used).forEach(ele => ele.style['display']='none');
}

//icenter-right-ad
let icenter_right_ad = document.getElementsByClassName('icenter-right-ad');
if(icenter_right_ad.length > 0){
	Array.from(icenter_right_ad).forEach(ele => ele.style['display']='none');
}

//隐藏动态加载的内容
function hideDom(){
	//ck-act
	let ck_act = document.getElementsByClassName('ck-act');
	if(ck_act.length > 0){
		Array.from(ck_act).forEach(ele => ele.style['display']='none');
	}

	//fn_accessLog_tips
	let fn_accessLog_tips = document.getElementsByClassName('fn_accessLog_tips');
	if(fn_accessLog_tips.length > 0){
		Array.from(fn_accessLog_tips).forEach(ele => ele.style['display']='none');
	}

	//f-single-biz
	let f_single_biz = document.getElementsByClassName('f-single-biz');
	if(f_single_biz.length > 0){
		Array.from(f_single_biz).forEach(ele => ele.style['display']='none');
	}

	//tab_switch
	let tab_switch = document.getElementById('tab_switch');
	if(tab_switch) tab_switch.click();
}
let observer = new MutationObserver(hideDom);
observer.observe(document, { childList: true, subtree: true });
