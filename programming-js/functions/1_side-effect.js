/**
*This is to demonstrate how side effects are the bane of code reuse
* story:
* I take a cart fill it with items im willing to purhcase
* Now I change my mind to add more items but i dont want to do it on the 
* same cart but on a new cart so at any point i can go back to the saved cart
* 
* Problem is when i take a new cart ,im filling it with items from the saved
* cart. Ideally this should be a copy of the saved cart but in javascript
* we are basically giving the reference of the items rather than the copy
*/

//var test = require('tape');


//a simple object that holds the list of items
//and has a method to add items to it
var cartProto={
	items:[],
	addItem:function addItem(item){
		this.items.push(item);
	}
};


//returns a cart with a list of items that is passed
var createCart=function(items){
	var cart = Object.create(cartProto);
	var itemsCopy=Object.create(items);
	cart.items=itemsCopy;
	//cart.items = items;
	return cart;
};

//saved cart is an object with items and addItem method
//cartObject
var savedCart = createCart(['apple','pear','orange']);


//object 
var session = {
	get:function get(){
		return this.cart;
	},
	cart:createCart(savedCart.items)
};




/*
test('Order WITH unintentional side effect.',function(assert){
	
	session.cart.addItem('grapefruit');
	
	
	const actual = session.cart.items.indexOf('grapefruit') !== -1;
	const expected = true;
	
	assert.equal(actual,expected,'grapefruit must be present');
	assert.end();
});


test('Order WITH unintentional side effect.',function(assert){
	session.cart.addItem('grapefruit');
	const actual = savedCart.items.indexOf('grapefruit') == -1;
	const expected = true;
	
	assert.equal(actual,expected,'item');
	assert.end();
});

*/

/**
* The best way to ensure your program contains few unintentional side effects
* is to avoid them in your functions
* Note:
* If your function operates on outside variables ie. 'createCart' (function) using 
* 'items' (outside variable) return a copy instead of the original (Object.create(items));
*  

* REST works this way: you get a copy of the data resource (response JSON) (called a representation)
* manipulate it (JSON manipulation which will not alter the server object),send a copy back 
* to the server (request json) which will either update or create a new one
*/

	
/**
 * What are the different ways to return/get a copy of a collection
 * What is immutablity
 
Immutability:
Note:
In javascript complex datatypes are arrays and objects 
They are pass by reference meaning they pass as address*

Arrays and Objects behave in the same way with some differences
	- Keys(string) in Object are Index(number) in arrays
	- we can assign/create Index like Key in arrays
	
var x = [];
x[20] = "sandeep"	;
x; // [empty,empty,.. ,20]
x[0] // undefined

Datastructures represented by these non-primitive types are called Collections
Objects --> Arrays 	// Object.keys(); Object.values()
Arrays --> Objects  // reduce
can be converted easily


Why immutability?
Inorder to minimize side effects we should clone the object,array,dataStruture

Directly this is not possible for deep dataStrutures
But we can enforce this when performing operations inside functions by 
cloning every possible bits into a cloned 
This way we can achieve immutability at max

some of the methods that return a new collection,array,object

Object:
	Object.create(); //simple objects

Arrays:
	slice();
	spread?
	map
	filter
	reduce
	other array methods
	
Note:

*/






