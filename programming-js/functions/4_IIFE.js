/**
* Immediately invoked functions
* Often used to create a new scope to encapsulate modules
* 
* In the below example what we have achieved is
* - we were able to pass the outside info (global)
	- created a scope(all variables declared are within this scope) 
	- and returned an object which uses those vars in encapsulated way
	
	The IIFE lets you encapsulate scope, so you can assign to regular variables, 
	instead of just the prototype
	This gives you more flexibility and the ability to hide state inside 
	the function closure
	
*/

//constructor
var LightBulb = function () {
	//property
	this.isOn = false;
};

var lightBulb = new LightBulb();

//methods
LightBulb.prototype.toggle = function () {
	this.isOn = !this.isOn;
	return this.isOn;
};

//methods
LightBulb.prototype.getState = function () {
	//implementation
};



//////////////////////////////

var global={
	key: 'global',
	isOn:false
};

var lightBulb=(function (aliasGlobal) {
	
	var isOn = aliasGlobal.isOn;

	var toggle = function () {
		isOn = !isOn;
		
		return isOn;
	};

	var getState = function () {
		//implementation
	}


	//methods
	var lightBulb = {
		toggle: toggle,
		getState: getState
	};
	
	return lightBulb;
	//implementation 
	//console.log(lightBulb.toggle());
	//console.log(lightBulb.toggle());
}(global));


console.log(lightBulb.toggle());
console.log(lightBulb.toggle());



/**
My Note:
This approach is suitable for singleton which gets invoked on run. 
The object cannot be instantiated with new* to get a new similar instance

This is similar to require in nodejs

One difference is IIFE can be initialised with a global object at runtime
can require modules do? 


*/
