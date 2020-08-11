/*
	功能：百度知道去广告
	作者：叶遮沉阳
	创建时间：2020-8-7
*/

//#qbleftdown-container
let qbleftdown = document.getElementById("qbleftdown-container");
if (qbleftdown) qbleftdown.style['display'] = 'none';

function hideDom(){

}

hideDom();

let observer = new MutationObserver(hideDom);
observer.observe(document, { childList: true, subtree: true });