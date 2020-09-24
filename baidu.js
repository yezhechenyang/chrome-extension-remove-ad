/**
 * 功能：百度网站净化
 * 作者：叶遮沉阳
 * 创建时间：2020-7-25
 */
		// ,{
		// 	"matches": ["*://*.baidu.com/*"],
		// 	"js": ["baidu.js"],
		// 	"run_at": "document_idle"
		// }

(function(){


    //class: spread-wrap
    let spread_wrap = document.getElementsByClassName('spread-wrap');
    if(spread_wrap.length > 0){
        Array.from(spread_wrap).forEach(ele => ele.style['display']='none');
    }

    //隐藏动态加载的内容
    function hideDom(){
        //id: side_box_unionAd
        // let side_box_unionAd = document.getElementById("side_box_unionAd");
        // if(side_box_unionAd){
        //     side_box_unionAd.style['display']='none';
        // }

        //class: trans-side-ad-wrap
        // let trans_side_ad_wrap = document.getElementsByClassName('trans-side-ad-wrap');
        // if(trans_side_ad_wrap.length > 0){
        //     Array.from(trans_side_ad_wrap).forEach(ele => ele.style['display']='none');
        // }
    }
    let observer = new MutationObserver(hideDom);
    observer.observe(document, { childList: true, subtree: true });

})();