// DATE对象是1970年1月1日到现在的毫秒数
let date = new Date()
console.log(date.getYear()); // The getYear method returns the year minus 1900 已废弃,最好别用
console.log(date.getFullYear());
console.log(date.getMonth()); // 获取当前月份(0-11,0代表1月)
console.log(date.getMonth()+1);
console.log(date.getDate());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 

function getTime () {
    let time = new Date();
    let y = time.getFullYear();
    let mm = time.getMonth() + 1;
    mm = mm < 10 ? '0' + mm : mm;
    let dd = time.getDate();
    dd = dd < 10 ? '0' + dd : dd;
    let h = time.getHours();
    h = h < 10 ? '0' + h : h
    let m = time.getMinutes();
    m = m < 10 ? '0' + m : m
    let s = time.getSeconds();
    s = s < 10 ? '0' + s : s
    return y + '-' + mm + '-' + dd + '/' + h + ':' + m + ':' + s
}
console.log(getTime());