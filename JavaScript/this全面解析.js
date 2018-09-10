//this四种绑定优先级（默认绑定，隐式绑定，显示绑定，new绑定）


/*
// 显示绑定高于隐式绑定
function foo() {
	console.log(this.a);
}

var obj1 ={
	a: 2,
	foo: foo
}

var obj2 = {
	a: 3,
	foo: foo
}

obj1.foo();
obj2.foo();

obj1.foo.call(obj2);  //3
obj2.foo.call(obj1);  //2
*/



// new绑定高于隐式绑定
function foo(something){
	this.a = something;
}

var obj1 = {
	a: 2,
	foo: foo
}

var obj2 = new obj1.foo(4);
console.log(obj1.a); //2
console.log(obj2.a); //4
