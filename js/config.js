// 最前面的两个“##”是分隔符，分隔符前面是域名，后面是css匹配规则
// 域名前面的“~”，表示在该域名下，后面的css匹配规则不生效
var cssRules = [
	//"###MsnDialog.ad",
    //"m.69shu.com###footer_appDownAd2",
    //"~hkcsl.com###gg1",
	
	// 运行商劫持广告
	"###adframe",
	
	// id
	"[id*='-ad-']","[class^='ad-']","[data-type='ad']",
	
	// iframe
	"iframe[src*='21ic.antdsp.com']","iframe[src*='pos.baidu.com']",
	
	// CSDN 首页推荐列表
	"csdn.net###feedlist_id>li:not([data-type='blog'])",
	
	// 首页右侧新闻列表第一个元素广告
	"jb51.net##li.first",
	// 文章右侧的站长推荐
	"jb51.net##.sidebox-recomm",
	
	// 回答列表之间的广告
	"zhihu.com##.Pc-word",
	
	//贴吧帖子广告
	"tieba.baidu.com##[ad-dom-img='true']",
	"tieba.baidu.com###pc2client",
	
	// 必应搜索提示下载Edge浏览器
	"cn.bing.com###b_notificationContainer_bop",
	// 是否切换至国际版提示
	"cn.bing.com##.tipContainer.b_cards",
	// 搜索结果下的广告
	"cn.bing.com###b_results>.b_ad",
	
	// 百科右侧下方的广告
	"baike.baidu.com###side_box_unionAd",
	// 百度翻译右侧广告#sideAdContainer
	"fanyi.baidu.com###sideAdContainer",
	// 百度翻译底部横幅广告.spread-wrap
	"fanyi.baidu.com##.spread-wrap",
	
	// 简书文章右侧上方的广告
	"jianshu.com##section[aria-label=baidu-ad]",
	
	// w3cSchool右侧广告 sp_sidebar
	"w3school.com.cn###sp_sidebar",

];


// var resumeEle = [
// 	"[class*='upload-']","[class*='head-']","li.thread-even","li.thread-odd",".unread-num"
// ]