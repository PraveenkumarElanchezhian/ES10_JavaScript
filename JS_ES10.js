// flat method -->

var array = [1,[2,[3]]];
console.log(array.flat());
console.log(array.flat(1));
console.log(array.flat(2));

// flat map method -->

var arr = [1.4,2.5,5,6];
console.log(arr.map(value=>[Math.round(value)]));
console.log(arr.flatMap(value=>[Math.round(value)]));

// String trim start -->

const name = "  Praveen  ";
console.log(name.trimStart());
console.log(name.trimEnd());