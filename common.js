/**
 * 功能：通用网站净化
 * 作者：叶遮沉阳
 * 创建时间：2020年7月29日
 * 注入时间，可选值： "document_start", "document_end", or "document_idle"
 */
(function(){


    //隐藏动态加载的内容
    function hideDom(){

        //class:header-ads,adsbygoogle,ads_in_hot_article,
        //ad-block,ad-widget Banner_ad
        let ads = document.querySelectorAll('[class^=ad-],[class^=ads],[class$=ads],[class$=_ad],[class$=-ad],[class*=advert]');
        if(ads.length > 0){
            Array.from(ads).forEach(ele => ele.style['display']='none');
        }

        //iframe[src*="pos.baidu.com"],iframe[src*=googleads]
        //iframe[onload="___baidu_union_callback(3, '6816481_0', this);"]
        let iframe_ads = document.querySelectorAll('[src*="pos.baidu.com"]' +
            ',iframe[src*=ads],iframe[onload*=baidu_union_callback]');
        if(iframe_ads.length > 0){
            Array.from(iframe_ads).forEach(ele => ele.style['display']='none');
        }


        //移除id为adframe的广告容器
        let adframe = document.getElementById('adframe');
        if(adframe){
            adframe.style['display']='none'
        }

        //div[adposition]
        let adposition = document.querySelectorAll('[adposition]');
        if(adposition.length > 0){
            Array.from(adposition).forEach(ele => ele.style['display']='none');
        }
    }
    let observer = new MutationObserver(hideDom);
    observer.observe(document, { childList: true, subtree: true });

})();