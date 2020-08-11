/*
	功能：CSDN博客净化
	作者：叶遮沉阳
	创建时间：2020/07/08
*/

//div#addAdBox
let addAdBox = document.getElementById("addAdBox");
if(addAdBox) addAdBox.style['display']='none';

//div.csdn-tracking-statistics.mb8.box-shadow
let div_track = document.querySelectorAll('div.csdn-tracking-statistics.mb8.box-shadow');
if(div_track.length > 0){
	Array.from(div_track).forEach(ele => ele.style['display']='none');
}


//slide-outer
let slide_outer = document.getElementsByClassName('slide-outer');
if(slide_outer.length > 0){
	Array.from(slide_outer).forEach(ele => ele.style['display']='none');
}

//banner-ad-box
let banner_ad_box = document.getElementsByClassName('banner-ad-box');
if(banner_ad_box.length > 0) banner_ad_box[0].style["display"]="none";

//close-guide-btn
let close_guide_btn = document.getElementById('close-guide-btn');
if(close_guide_btn) close_guide_btn.click();

//recommendAdBox
let recommendAdBox = document.getElementById('recommendAdBox');
if(recommendAdBox) recommendAdBox.style["display"]="none";

function hideDom(){

	//广告容器
	let adDivs1 = document.getElementsByClassName('adsbygoogle');

	//footerRightAds
	let adDivs3 = document.getElementById('footerRightAds');

	let arr = Array.from(adDivs1);
	if(adDivs3) arr.push(adDivs3);

	if(arr.length > 0){
		arr.forEach(ele => ele.style['display']='none');
	}
}

//第一次加载调用
hideDom();

//点击阅读全文
var btn = document.getElementById('btn-readmore-zk');
if(btn) btn.click();

// MutationObserver 监听 document 中的元素是否发生改变
let mutationObserver = window.MutationObserver;
let observer = new MutationObserver(hideDom);
observer.observe(document, { childList: true, subtree: true });