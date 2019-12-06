export function getQueryString(name: string, url = window.location.search) {
  let search = url.substr(url.indexOf('?') + 1);
  search = search.split('#')[0];
  let matched = search.match(new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'));
  return (matched && matched[2]) || '';
}

export function formateDate(date = new Date(), format = 'yyyy-MM-dd hh:mm:ss') {
  const Y = date.getFullYear();
  const M = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  return format
    .replace('yyyy', String(Y))
    .replace('MM', M > 9 ? String(M) : '0' + M)
    .replace('dd', d > 9 ? String(d) : '0' + d)
    .replace('hh', h > 9 ? String(h) : '0' + h)
    .replace('mm', m > 9 ? String(m) : '0' + m)
    .replace('ss', s > 9 ? String(s) : '0' + s);
}
