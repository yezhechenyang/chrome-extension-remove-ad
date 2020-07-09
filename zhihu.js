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