/**
 * 功能：新浪净化
 * 作者：叶遮沉阳
 * 创建时间：2020-8-15
 */



//玩转邮箱
let tab0 = document.getElementById("tab0");
if(tab0) tab0.style["display"] = "none";
let pane0 = document.getElementById("pane0");
if(pane0) pane0.style["display"] = "none";
let pane1 = document.getElementById("pane1");
if(pane1) pane1.style["display"] = "";

//隐藏动态加载的内容
function hideDom(){
	//div.extendAd
	let extendAd = document.getElementsByClassName("extendAd");
	if(extendAd) Array.from(extendAd).forEach(i => i.style["display"] = "none");

	//div#sinaadToolkitBox1
	let sinaadToolkitBox = document.querySelectorAll("div[id^=sinaadToolkitBox]");
	if (sinaadToolkitBox) Array.from(sinaadToolkitBox).forEach(i => i.style["display"] = "none");

	//iframe#mailinfoAd1
	let mailinfoAd = document.querySelectorAll("iframe[id^=mailinfoAd]");
	if (mailinfoAd) Array.from(mailinfoAd).forEach(i => i.style["display"] = "none");
}
let observer = new MutationObserver(hideDom);
observer.observe(document, { childList: true, subtree: true });
