export function debounce(fn, delay) {
  let timer = null;
  let self = this;
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(self, args);
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

export function deepCopy(initial, final) {
  let obj = final || {};
  for (let i in initial) {
    let prop = initial[i];
    if (prop == initial) {
      continue;
    }
    if (typeof initial[i] == 'object') {
      obj[i] = Array.isArray(initial[i]) ? [] : {};
      deepCopy(initial[i], obj[i]);
    } else {
      obj[i] = initial[i];
    }
  }
  return obj;
}

export function priceFormat(price) {
  let pri = new Number(price).toFixed(2);
  return `￥${pri}`;
}

export function getIndexByiid(arr, item) {
  let index;
  arr.some((el, i) => {
    if (el.iid == item.iid) {
      index = i;
      return true;
    }
    return false;
  })
  return index;
}
