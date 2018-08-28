export function getParameterFromUrl(name) {
  let result = {};
  let url = window.location.href;
  url = url.substr(url.lastIndexOf('?') + 1);
  let urls = url.split('&');
  for (var i in urls) {
    let tem = urls[i];
    result[tem.split('=')[0]] = tem.split('=')[1];
  }
  return result[name] ? result[name] : '';
}
export function isJSON(str) {
  if (typeof str == 'string') {
    try {
      var obj = JSON.parse(str);
      console.log('转换成功：', obj);
      return true;
    } catch (e) {
      console.log('error：' + str + '!!!' + e);
      return false;
    }
  }
  console.log('It is not a string!');
}
export function timestamp2Date(timestamp) {
  var date = new Date(timestamp);
  var Y, M, D, h, m, s;
  Y = date.getFullYear() + '-';
  M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-';
  D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
  h =
    date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
  m =
    date.getMinutes() < 10
      ? '0' + date.getMinutes() + ':'
      : date.getMinutes() + ':';
  s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
}
