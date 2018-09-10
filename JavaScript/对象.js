var arr = [1,2,3];
arr["3"] = 4;
arr.a = "test";

/*for(var k in arr){
	console.log(k, arr[k]);
}

for(var i = 0; i < arr.length; i++){
	console.log(i, arr[i]);
}*/

for(var v of arr){
	console.log(v);
}