// ADBlock，网络资源阻塞，阻止广告脚本下载

// 需要阻塞的网络请求url
var blockUrl = [
    // "*://d1.sina.com.cn/litong/zhitou/sspnew.js*",
    // "*://d5.sina.com.cn/litong/zhitou/sinaads/release/sinaads.js*",
    // "*://d7.sina.com.cn/litong/zhitou/sinaads/src/spec/sinaads_ck.js*",
    // "*://www.sinaimg.cn/unipro/pub/suda_s_v851c.js*",
    // "*://d8.sina.com.cn/litong/zhitou/sinaads/release/spec/getSinaadsExParamsForBlog.js*",
    // "*://d8.sina.com.cn/litong/zhitou/sinaads/demo/changwy/link/blog_bottom_float.js*",
    // "*://pagead2.googlesyndication.com/pagead/show_ads.js*",
    // "*://m.69shu.com/app/app_down_ad_logo.png*",
    // "*://www.piaohua.com/js/yzz/*"
	
	"*://icws.jb51.net/good/arc2019.js",
	// "*://tb1.bdstatic.com/*ad_stats*.js*",
	"*://feed-image.baidu.com/*",
	"*://pos.baidu.com/*",
	"*://pagead2.googlesyndication.com/pagead/show_ads.js*",
	"*://*/**adsbygoogle.js",
	"*://*/**shebao.html",
	"http://10.72.25.13:9099/*",
	"https://vali-g1.cp31.ott.cibntv.net/*",
	"https://c.v4dwkcv.com/js/c/23389_5611_1.js",
	"https://j.sdqoi2d.com/r/er_18203_7798.js",
	"*://*.dlads.cn/*",
	"*://*.woskj2.com/*",
	"http://www.diezhan.me/js/fast.js",
	"https://pc.cathaycentury.com/pc/rich-tf.js",
	"*://*/**crystal-min.js",
	"https://h5.ssp.qq.com/static/web/websites/pcnewsplugin/sspad_20200821.js",
	"*://21ic.antdsp.com/*",
	"https://securepubads.g.doubleclick.net/tag/js/gpt.js",
	"*://adaccount.csdn.net/*",
	"*://*.mediav.com/*",
	"https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/435e1db9-342a-486e-b9df-f576a7c00a5a.js",
	"https://js.t.sinajs.cn/t4/apps/publicity/static/wbad.js*",
	"https://vj.jisuoping.com/*",
	"http://imgbdb3.bendibao.com/img/20168/25/2016825095522_94814.png",
];
chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: blockUrl},
    ["blocking"]
);