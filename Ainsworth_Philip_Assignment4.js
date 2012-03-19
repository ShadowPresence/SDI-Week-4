var validator = function (regEx, string) {
	var phone = /\(?\d{3}\)?\.?\s?-?\.?\s?\d{3}\s?-?\.?\s?\d{4}/; // -- regular expression to check for typical US phone number.
	var email = /[\w.-]+@[\w.-]+\.\w{2,4}/; // -- regular expression to check for email address.
	var web = /https?:\/\// // -- regular expression to check for url.
	var opt = prompt("What do you want to test for? Phone, email or web")
	if (opt=="web") {
		regEx = web;
	} else if (opt=="email"){
		regEx = email;
	} else {
		regEx = phone;
	};
	var i = 0
	while (!regEx.test(string)) { // -- set up this way to allow loop. Basically requires valid phone number to move on.
		if (i==0) {
			i++
		} else {
			console.log("The info you entered was not formatted properly, please try again.");
		};
	var string = prompt(opt + ": Please enter valid input."); // -- a phone argument could be passed as a substitute for this prompt.
	};
	console.log("Thank you for entering a valid " + opt + " input.");};

var validate = {
	phone: function (string) {
		var regEx = /\(?\d{3}\)?\.?\s?-?\.?\s?\d{3}\s?-?\.?\s?\d{4}/; // -- regular expression to check for typical US phone number.
		var opt = "phone"
		test(regEx, string, opt);
	},
	email: function (string) {
		var regEx = /[\w.-]+@[\w.-]+\.\w{2,4}/; // -- regular expression to check for email address.
		var opt = "email"
		test(regEx, string, opt);
	},
	web: function (string) {
		var regEx = /https?:\/\//; // -- regular expression to check for url.
		var opt = "web"
		test(regEx, string, opt);
	}
};


var test = function (regEx, string, opt) {
	if (opt=="web" && regEx.test(string)) {
		console.log("The url you entered was valid.");
	} else if (opt=="email" && regEx.test(string)){
		console.log("The email address you entered was valid.");
	} else if (opt=="phone" && regEx.test(string)){
		console.log("The phone number you entered was valid.");
	} else {
		console.log("The info you entered was not formatted properly.");
	};
};


// validator(); // -- If an argument is included, the prompt above is bypassed.

validate.web("http://")
