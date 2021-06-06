
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]); 
    else 
        return null; 
} 
function setCookie(name,value, seconds) 
{ 
    var Seconds = seconds || 1800; 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + Seconds*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 
// 用于生成uuid
function guid() {
  function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function param2args(params){
	var args ='';
	for(var i in params) {
		if(args != '') {
			args += '&';
		}   
		args += i + '=' + encodeURIComponent(params[i]);
	}
	return args;
}

var _maq = _maq || [];
var jsrc = document.currentScript.src;
if (jsrc.indexOf("?") != -1) { var account = jsrc.split('?')[1]};
var account = account || "bs-track";
_maq.push(['_setAccount', account]);

(function () {
  //设置永久性cookie - long-life-cookie
  if(document.cookie.indexOf('llc=') == -1 ){
    setCookie('llc',"bs"+guid(),36500*24*60*60);
  }
  //设置临时性cookie - short-life-cookie, 无操作半小时后释放
  if(document.cookie.indexOf('slc=') == -1 ){
    setCookie('slc',"bs"+guid(),1800);
  }else{
    setCookie('slc',getCookie('slc'),1800);
  }
    var params = {};
    //Document对象数据
    if(document) {
        params.domain = document.domain || ''; 
        params.url = document.URL || ''; 
        params.title = document.title || ''; 
        params.referrer = document.referrer || ''; 
        params.llc = getCookie('llc') || '';
        params.slc = getCookie('slc') || '';
    }   
    //Window对象数据
    if(window && window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }   
    //navigator对象数据
    if(navigator) {
        params.lang = navigator.language || ''; 
    }   
    //解析_maq配置
    if(_maq) {
        for(var i in _maq) {
            switch(_maq[i][0]) {
                case '_setAccount':
                    params.account = _maq[i][1];
                    break;
                default:
                    break;
            }   
        }   
    }   
    //自定义记录属性
    params.su = getCookie('llc') || '';
    if(typeof(tk)!="undefined"){
      for(var e in tk){
        params[e] = tk[e]
      }
    }else{
      params.su = getCookie('llc') || '';
    }
      params.st = Date.now(); // 记录时间戳

    //拼接参数串
    var args = ''; 
    for(var i in params) {
        if(args != '') {
            args += '&';
        }   
        args += i + '=' + encodeURIComponent(params[i]);
    }
 
    //通过Image对象请求后端脚本
    var img = new Image(1, 1); 
    img.src = 'http://www.track.bunshinn.cn/1.gif?' + args;
    //点击记录
    $(document).click(function (e) {
      if(e.target.tagName=='A'){
        params.st = Date.now(); // 记录时间戳

        params.ck = $(e.target).attr('data-ck') || '';
        params.cku = $(e.target).attr('href') || '';
        args = param2args(params);
        var img = new Image(1, 1); 
        img.src = 'http://www.track.bunshinn.cn/1.gif?' + args;
      }
    })
})();