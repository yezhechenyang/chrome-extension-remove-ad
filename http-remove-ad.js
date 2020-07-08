/*
	功能：HTTP请求过滤
	作者：叶遮沉阳
	创建时间：2020/07/07
*/

function hideDom(){

	//移除id为adframe的广告容器
	var adframe = document.getElementById('adframe');

	if(adframe){
		adframe.style['display']='none'
	}
}

//第一次加载调用
hideDom();

// MutationObserver 监听 document 中的元素是否发生改变
let mutationObserver = window.MutationObserver;
let observer = new MutationObserver(hideDom);
observer.observe(document, { childList: true, subtree: true });