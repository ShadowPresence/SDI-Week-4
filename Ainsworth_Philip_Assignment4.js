var liebreary = function () {
	var phone = function (string) {
		var regEx = /\(?\d{3}\)?[.\s-]?\d{3}[.\s-]?\d{4}/; // -- regular expression to check for typical US phone number.
		var opt = "phone"
		test(regEx, string, opt);
	};
	var email = function (string) {
		var regEx = /[\w.-]+@[\w.-]+\.\w{2,4}/; // -- regular expression to check for email address.
		var opt = "email"
		test(regEx, string, opt);
	};
	var url = function (string) {
		var regEx = /https?:\/\//; // -- regular expression to check for url.
		var opt = "url"
		test(regEx, string, opt);
	};
	var test = function (regEx, string, opt) {
		if (regEx.test(string)) {
			console.log("The " + opt + " you entered was valid.");
		} else {
			console.log("The info you entered was not formatted properly.");
		};
	};
	return {
		"phone": phone,
		"email": email,
		"url": url
	};
};


// validator(); // -- If an argument is included, the prompt above is bypassed.
var library = liebreary();
library.phone("123.456.7890");
library.phone("(123) 456-7890");
library.phone("1234567890");
library.phone("456-7890");
library.phone("123-456-7890");
library.email("something@domain.com");
library.email("domain.com");
library.url("http://www.google.com");
library.url("https://www.google.com");
library.url("www.google.com");
