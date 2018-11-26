/**
Method vs functions
A function is independent on the global space
Method is a function inside a context/Object

Method invocation applies the function/method to the object/context to 
which it is attached 
	- context.method
	- method.call(context)
	
Summary:
	when a function/Method has 'this' it takes the context of the caller object/context
	context supplied to the method 'call'
	
*/

//function independent on global space
function highPass(number,cutoff){
	cutoff =  cutoff || this.cutoff;
	return (number >= cutoff);
}

//context
var filter1 = {
	highPass: highPass,
	cutoff: 5
};

//context
var filter2 = {
	//no highPass here
	cutoff: 3
};


var result1 = filter1.highPass(3) //true
var result2 = highPass.call(filter2,3) //true
var result3 = filter1.highPass(6) //false


/*
	method.call(context,arg1,arg2,..);
	method.apply(context,arrayOfArgs);
	
Note:
'call' method is available from Function.prototype
*/



/*
Note:
	Unless for method invocation ie. dot notation/square bracket notation
	"this" generally refers to the global object.	Eg: window for browser
	
	Also Assignments to properties on "this" will pollute the global space
	
	Make sure you have a valid object/context if u r planning on using 
	this in the function. If there is a chance for the function to be
	 invoked on its own x();
	
*/



//Illustration of 'this' polluting the global space if not called with a 
//valid object/context

function x () {
	this.sandeep="navin";
}

x();
//global context
window.sandeep; // == "navin"




/**
	Function.prototype.bind()
		
	Drawabacks with call() and apply() method
		For invoking the above u need context and the method.period.
		But when you are in a different scope say event handlers. 
	
*/


//Object which can act as a context
var lightbulb = {
	toggle: function toggle() {
		this.isOn = !this.isOn;
		return this.isOn;
	},
	isOn: false
};

//toggle is a reference to the toggle method which has 'this'.
var toggle = lightbulb.toggle;

//this says wherever the toggle method/function is used it 
//takes the context of the lightbulb
var toggle = lightbulb.toggle.bind(lightbulb);
var lightswitch = document.getElementById('lightswitch');

lightswitch = document.getElementById('getElementById');



lightswitch.addEventListener('click',lightbulb.toggle,false);
//the above code is similar to 
/*
lightswitch.addEventListener('click',function toggle(){
	this.isOn = !this.isOn;
	return this.isOn;
});

Here 'this' refers to which context ? 
In the above case(browser) this refers to the lightswitch element object context

*/












