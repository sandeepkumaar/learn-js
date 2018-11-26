/*
Method Design:
	Several techniques exists in JS to design method API's
	Javascript supports
		- Named Parameter lists
		- Function Polymorphism
		- Method Chaining 
		- Lambda Expression
		
Note:
Priciple:
	- Keep It Simple, Stupid (KISS)
	- Do One Thing (DOT),and do it well
	- Don't Repeat Yourself (DRY)
*/

/*
Named Parameters
*/


//Default User properties
var userProto = {
	name: '',
	email: '',
	alias: '',
	showInSearch: true,
	colorScheme: 'light'
};

function createUser(option) {
	return Object.assign({},userProto,option)
}

//Instantiation

var newUser = createUser({
	name: 'Mike',
	showInSearch: false
});


console.log('New User',newUser);

/*
Note: In a typical constructor you need all the  params to be mentioned
to get instantiated
Eg:
createUser('Tonya', '', '', '', 'dark');
Instead we can send only the known params

*/


