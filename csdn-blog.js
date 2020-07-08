/*
	功能：CSDN博客净化
	作者：叶遮沉阳
	创建时间：2020/07/08
*/

function hideDom(){

	//广告容器
	var adDivs1 = document.getElementsByClassName('adsbygoogle');
	var adDivs2 = document.getElementsByClassName('csdn-tracking-statistics');
	//footerRightAds
	var adDivs3 = document.getElementById('footerRightAds');

	var arr = Array.from(adDivs1).concat(Array.from(adDivs2));
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