/*
	功能：脚本之家净化
	作者：叶遮沉阳
	创建时间：2020-7-10 19:43:14
*/

//移除logo右边的广告
let logomAds = document.getElementsByClassName('logom');
if(logomAds.length > 0) logomAds[0].style["display"]="none";
let logorAds = document.getElementsByClassName('logor');
if(logorAds.length > 0) logorAds[0].style["display"]="none";

//移除菜单下的广告 pt10
let pt10 = document.getElementsByClassName('pt10');
if(pt10.length > 0) pt10[0].style["display"]="none";

//lbd
let lbd = document.getElementsByClassName('lbd');
if(lbd.length > 0){
	Array.from(lbd).forEach(ele => ele.style['display']='none');
}

//lbd_bot
let lbd_bot = document.getElementsByClassName('lbd_bot');
if(lbd_bot.length > 0) lbd_bot[0].style["display"]="none";

//r300
let r300 = document.getElementsByClassName('r300');
if(r300.length > 0){
	Array.from(r300).forEach(ele => ele.style['display']='none');
}

//sidebox-recomm
let sidebox_recomm = document.getElementsByClassName('sidebox-recomm');
if(sidebox_recomm.length > 0) sidebox_recomm[0].style["display"]="none";
