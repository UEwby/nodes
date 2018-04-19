//字符串字符串就是一个或多个排列在一起的字符，放在单引号或双引号之中。

//1.length
//2.chart(),返回字符串的第n个字符，如果不在0 - str.length之间，则返回一个空字符串
var str = 'javascript';
console.log(str.charAt(9));//t
console.log(str.charAt(12));//''

//3.indexOf(substr[,start]),返回substr在字符串str中首次出现的位置，从start位置开始查找，如果不存在则返回-1。
