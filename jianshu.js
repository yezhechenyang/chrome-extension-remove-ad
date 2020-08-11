/**
 * 功能：简书网站净化
 * 作者：叶遮沉阳
 * 创建时间：2020-7-25
 */


//隐藏动态加载的内容
function hideDom(){
    //google-ad
    let google_ad = document.querySelectorAll('[aria-label="google-ad"]');
    if(google_ad.length > 0){
        Array.from(google_ad).forEach(ele => ele.style['display']='none');
    }

    //aria-label="youdao-ad"
    let youdao_ad = document.querySelectorAll('[aria-label="youdao-ad"]');
    if(youdao_ad.length > 0){
        Array.from(youdao_ad).forEach(ele => ele.style['display']='none');
    }
}
let observer = new MutationObserver(hideDom);
observer.observe(document, { childList: true, subtree: true });