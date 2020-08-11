/**
 * 功能：站长平台净化
 * 作者：叶遮沉阳
 * 创建时间：2020-7-29
 */


//div.xbox.bgwhite
let xbox = document.querySelectorAll('div.xbox.bgwhite');
if(xbox.length > 0){
	Array.from(xbox).forEach(ele => ele.style['display']='none');
}

//div.recomdlist>div
let recomdlist_child_div = document.querySelectorAll("div.recomdlist>div");
if(recomdlist_child_div.length > 0) {
	Array.from(recomdlist_child_div).forEach(ele => ele.style['display']='none');
}

//隐藏动态加载的内容
function hideDom(){

}
let observer = new MutationObserver(hideDom);
observer.observe(document, { childList: true, subtree: true });
