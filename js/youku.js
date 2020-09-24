/**
 * 功能：优酷网站净化
 * 作者：叶遮沉阳
 * 创建时间：2020-8-30 09:03:40
 */

// 开通VIP div.u-vip_3-BwE
let uVip = document.querySelector('div.u-vip_3-BwE');
if(uVip) {
	uVip.remove();
	console.log('不好意思，开通VIP按钮被移除！！！匹配规则：div.u-vip_3-BwE');
} 


(function(){
	// 选择需要观察变动的节点
	// const targetNode = document.querySelector('.u-login_PEt-Q');
	const targetNode = document;
	// 观察器的配置（需要观察什么变动）
	// const config = { attributes: true, childList: true, subtree: true };
	const config = { childList: true, subtree: true };
	// 当观察到变动时执行的回调函数
	const callback = function(mutationsList, observer) {
		// Use traditional 'for loops' for IE 11
		// for(let mutation of mutationsList) {
		// 	console.log(mutation.type)
		// }
		
		//---------------------  在这里添加自定义内容 start
		
		// 登录提示框 div.panel_asGkf.u-panel_3C81k,div.info-bottom_3C0mQ,div.information-tips
		let loginTipBox = document.querySelectorAll("div.panel_asGkf.u-panel_3C81k, div.info-bottom_3C0mQ, div.information-tips");
		if(loginTipBox && loginTipBox.length && loginTipBox.length > 0) {
			Array.from(loginTipBox).forEach(i => i.remove());
			console.log("不好意思，"+loginTipBox.length+"个登录提示框被干掉了！！！匹配规则：[div.panel_asGkf.u-panel_3C81k,div.info-bottom_3C0mQ,div.information-tips]");
		}
		
		//---------------------  在这里添加自定义内容 end
	};
	// 创建一个观察器实例并传入回调函数
	const observer = new MutationObserver(callback);
	// 以上述配置开始观察目标节点
	observer.observe(targetNode, config);
})();