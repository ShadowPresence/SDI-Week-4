var liebreary = function () {
	var phone = function (string) {
		var regEx = /\(?\d{3}\)?[.\s-]\d{3}[.\s-]\d{4}/; // -- \(?\d{3}\)? this section tests for 3 numerical digits, parenthesis are optional, [.\s-] this tests for a dot, a space or a dash, followed by \d{3} which tests for another 3 digits and [.\s-]\d{4} which is again a dot, a space or a dash preceeding the last 4 digits.
		var opt = "phone"
		test(regEx, string, opt);
	};
	var email = function (string) {
		var regEx = /[\w.-_]+@[\w.-_]+\.\w{2,4}/; // -- [\w.-_]+ This tests for 0+ instances of alphanumeric chars as well as dot, dash and underscore. followed by the @ symbol another [\w.-_]+ which is again 0+ instances followed by a dot and \w{2,4} 2-4 alphanumeric chars.
		var opt = "email"
		test(regEx, string, opt);
	};
	var url = function (string) {
		var regEx = /https?:\/\//; // -- this tests for http:// with an optional s in https://.
		var opt = "url"
		test(regEx, string, opt);
	};
	var title = function () {
		fgfgdf;
	};
	var replace = function () {
		fgfgdf;
	};
	var money = function (string) {
		something;
	};
	var fuzzy = function () {
		fgfgdf;
	};
	var date = function () {
		fgfgdf;
	};
	var strnumconv = function (string) {
		var result = Number(string);
		console.log(isNaN(result));
	};
	var range = function () {
		fgfgdf;
	};
	var sum = function () {
		fgfgdf;
	};
	var sort = function () {
		fgfgdf;
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
		"url": url,
		//"title": title,
		//"replace": replace,
		//"money": money,
		//"fuzzy": fuzzy,
		//"date": date,
		"strnumconv": strnumconv,
		//"range": range,
		//"sum": sum,
		//"sort": sort
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
library.strnumconv("42")
library.strnumconv("123 456")
