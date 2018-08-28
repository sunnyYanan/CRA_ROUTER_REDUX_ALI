var cdnbuild = require('@ali/cdn-build');
var cp = require('child_process');
var fs = require('fs')
var env = cdnbuild.getEnv(); //"local"|"development"|"production"
var isProduction = cdnbuild.isProduction();
var version = cdnbuild.getVersion();

var ws = fs.createWriteStream('.env');

var result = 'PUBLIC_URL=';
if(isProduction) {
	result+= 'http://g.alicdn.com/tmallperf/test-front/';
}else {
	result+= 'http://g-assets.daily.taobao.net/tmallperf/test-front/';
}

result +=version;
console.log('route:'+result,+' args:'+JSON.stringify(cdnbuild.getArgs()));

ws.write(result)