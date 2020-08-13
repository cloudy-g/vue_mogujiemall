export function debounce(fn, delay) {
  let timer = null;
  let self = this;
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(self, args);
      console.log(1);
    }, delay);
  };
}

export function dateFormat(date, format) {
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (const k in o) {
      if (new RegExp(`(${k})`).test(format)) {
        let str = o[k] + '';
        format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? str : padLeftZero(str))          
      }
  }
  return format;
}
//  左侧补 0
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
