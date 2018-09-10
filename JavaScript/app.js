/*function foo() {
	var a = 2;
	function bar(){
		console.log(a);
	}
	bar();
}

foo();*/

/*var fn;
function foo(){
	var a = 2;
	function baz(){
		console.log(a);
	}
	fn = baz;
}
function bar(){
	fn();
}

foo();
bar();*/

var obj = {
	a: 2
};
 Object.getOwnPropertyDescriptor(obj, "a");

Object.defineProperty(obj, "a", {
	value: 2,
	writable: true,
	configurable: false,
	enumerable: true
});

Object.defineProperty(obj, "a", {
	value: 3,
	writable: false,
	configurable: false,
	enumerable: true
});
b = 3;

console.log(obj.a);
console.log(b);