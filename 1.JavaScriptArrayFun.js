//1.迭代器和for-of循环
//let myArray = [{name:'ttt',value:'90'},2,4,5,6,7,8,8,6,223,54,5,4,34,4]
/*
for (var index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}
*/

/*
myArray.forEach(function(val){
    console.log(val)
})

for (var index in myArray) { // 千万别这样做
    console.log(myArray[index]);
}

for(var val of myArray){
    console.log(val)
}*/
/*for (var chr of "every") {
    console.log(chr);
}*/
/*setTimeout(function() {
    console.log(1)
}, 0);
new Promise(function executor(resolve) {
    console.log(2);
    for( var i=0 ; i<10000 ; i++ ) {
        i == 9999 && resolve();
    }
    console.log(3);
}).then(function() {
    console.log(4);
});
console.log(5);*/
/*
 function* quips(name) {
 yield "你好 " + name + "!";
 yield "希望你能喜欢这篇介绍ES6的译文";
 if (name.startsWith("王")) {
 yield "你的名字 " + name + "  姓王，这很酷！";
 }
 yield "我们下次再见！";
 }
 var iter = quips('王斌彦');

 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());*/
/*function* range(start, stop){
    for (var i = start; i < stop; i++)
        yield i;
}
var iter = range(2,10)*/
/*
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)*/

/*function repeatString(str, n){
    return new Array(n + 1).join(str);
}
console.log(repeatString("live",3))*/

/*
 var arr = [1,3,5,7,9,11];
 /!*var arrRemoved = arr.splice(0,2);
 console.log(arr); //[5, 7, 9, 11]
 console.log(arrRemoved); //[1, 3]
 var arrRemoved2 = arr.splice(2,0,4,6);
 console.log(arr); // [5, 7, 4, 6, 9, 11]
 console.log(arrRemoved2); // []*!/
 var arrRemoved3 = arr.splice(3,1,2,4);
 console.log(arr); // [5, 2, 4, 4, 6, 9, 11]
 console.log(arrRemoved3); //[7]*/
//var arr = [32, 12, 3, 1, 4, 36, 37, 28, 19, 110];
//var arr2 = arr.filter(function(x,index){
//    console.log(index);
//    return index % 3 === 0 || x >= 20;
//})
