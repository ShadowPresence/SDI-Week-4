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
	var titleCase = function (string) {
		var low = string.toLowerCase(); // -- converts string to all lowercase, just incase input is all caps or weird casing
		var tc = low.replace(/^(.)|\s(.)/g, function($1) {return $1.toUpperCase();});
		/* -- so much in such a small space...
		The regular expression above performs as follows: finds the first char at the beginning of the string and stores it.
		The | is equal to 'or' so it will match the first expression as well as anything in the second expression.
		The next part matches any char directly after a space. The g applies this expression to the entire string (global).
		The function was the only way I could get the values returned. $1 accesses the stored values in the above expression.
		Everything that was stored is passed into the function and returned as an uppercase char.
		*/
		console.log("Before: " + string);
		console.log("After: " + tc);
	};
	var replc = function (string, a, b) {
		var re = new RegExp(a, "g");
		var newstr = string.replace(re, b);
		console.log("Given: " + string + " - Replace " + a + " with " + b);
		console.log("Result: " + newstr);
	};
	var money = function (string) {
		var currency = Number(string)
		console.log("Input: " + string);
		console.log("Output: $" + currency.toFixed(2));
	};
	var fuzzy = function (numA, numB, perc) {
		var range = numB*(perc/100)
		console.log("Does " + numA + " fall within " + perc + "% of " + numB + "? (" + (numB-range) + " to " + (numB+range) + ")");
		if (numA <= (numB + range) && numA >= (numB - range)) {
			console.log("Yes");
		} else {
			console.log("No");
		};
	};
	var day = function () {
		var today = new Date(); // -- whatever day the script is run
		var lastDay = new Date(2012, 02, 26); // -- the end of class (12:00am March 26, 2012)
		var minutes = (lastDay - today)/60000; // -- 60,000 is the equivalent of 1000 (to convert to seconds) * 60 (to convert to minutes)
		var hours = minutes / 60
		var days = Math.floor(hours/24); // -- rounds down to get number of days
		var remHours = hours % 24; // -- finds the remaining hours after total hours is devided by all full days
		var decMin = (remHours % 1)*60; // -- finds the remaining minutes as a decimal (.5 = 30 min) then convert it to minutes
		var remMinutes = decMin.toFixed(2); // -- Keeps minutes to 2 decimal places
		console.log("As of today: " + today);
		console.log("There are " + days + " days, " + Math.round(remHours) + " hours and " + remMinutes + " minutes left until the end of this class.");
	};
	var strnumconv = function (string) {
		var result = Number(string);
		console.log('Input: "' + string + '"');
		console.log(result);
	};
	var range = function () {
		var tester = new Number();
		var min = tester.MIN_VALUE
	};
	var sum = function () {
		var array = [1,2,6,18,"str",3,"32trunks"];
		var total = 0
		for (i=0; i < array.length; i++) {
			if (typeof array[i] === 'number') {
				total += array[i];
			};
			console.log(total);
		};
		console.log("The sum of the number in the array is: " + total);
	};
	var sortArray = function (string) {
		var array = [{a:2}, {a:3}, {a:1}];
		console.log(array);
		console.log(array.sort);
	};
	var test = function (regEx, string, opt) {
		console.log("Is " + string + " formatted properly?");
		if (regEx.test(string)) {
			console.log("The " + opt + " you entered was valid.");
		} else {
			console.log("The " + opt + " you entered was not formatted properly.");
		};
	};
	return {
		"phone": phone,
		"email": email,
		"url": url,
		"titleCase": titleCase,
		"replc": replc,
		"money": money,
		"fuzzy": fuzzy,
		"day": day,
		"strnumconv": strnumconv,
		"range": range,
		"sum": sum,
		"sortArray": sortArray
	};
};


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
library.titleCase("THIS IS A TEST OF TITLE CASE.");
library.replc("a,b,c", ",", ".");
library.money("34567.45634");
library.money("37435.7");
library.fuzzy(88, 80, 10);
library.fuzzy(28, 32, 5);
library.day();
library.strnumconv("42")
library.strnumconv("123 456")
library.sum();
library.sortArray("a")
