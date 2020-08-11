/**
 * 功能：知乎净化
 * 作者：叶遮沉阳
 * 创建时间：2020/07/09
 */

//解除流氓自动弹窗登录
window.onscroll = function(){
	let closeBtn = document.getElementsByClassName('Modal-closeButton');
	if(closeBtn && closeBtn[0]){
		closeBtn[0].click();
		console.log('哦豁，登录窗口丢了！')
	}
}

//.Question-sideColumnAdContainer
let Question_sideColumnAdContainer = document.getElementsByClassName('Question-sideColumnAdContainer');
if(Question_sideColumnAdContainer.length > 0){
	Array.from(Question_sideColumnAdContainer).forEach(ele => ele.style['display']='none');
}


//隐藏动态加载的内容
function hideDom(){
	//Pc-card
	let Pc_card = document.getElementsByClassName('Pc-card');
	if(Pc_card.length > 0){
		Array.from(Pc_card).forEach(ele => ele.style['display']='none');
	}
}
let observer = new MutationObserver(hideDom);
observer.observe(document, { childList: true, subtree: true });
