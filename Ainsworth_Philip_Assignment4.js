var liebreary = function () {
	var phone = function (string) {
		var regEx = /\(?\d{3}\)?[.\s-]\d{3}[.\s-]\d{4}/; // -- \(?\d{3}\)? this section tests for 3 numerical digits, parenthesis are optional, [.\s-] this tests for a dot, a space or a dash, followed by \d{3} which tests for another 3 digits and [.\s-]\d{4} which is again a dot, a space or a dash preceeding the last 4 digits.
		var opt = "phone"
		return test(regEx, string, opt); // -- passes the assigned variables to the test function below
	};
	var email = function (string) {
		var regEx = /[\w.-_]+@[\w.-_]+\.\w{2,4}/; // -- [\w.-_]+ This tests for 0+ instances of alphanumeric chars as well as dot, dash and underscore. followed by the @ symbol another [\w.-_]+ which is again 0+ instances followed by a dot and \w{2,4} 2-4 alphanumeric chars.
		var opt = "email"
		return test(regEx, string, opt); // -- passes the assigned variables to the test function below
	};
	var url = function (string) {
		var regEx = /https?:\/\//; // -- this tests for http:// with an optional s in https://.
		var opt = "url"
		return test(regEx, string, opt); // -- passes the assigned variables to the test function below
	};
	/* -- this function is not explicitly in the assignment but is the second half of the above three.
	Since I was trying to make the code as efficient as I know how, and the first three functions used the exact same code, I refactered them into 4 functions.
	Basically the top functions assign variables and inputs, this test function does the work and returns the output.
	*/
	var test = function (regEx, string, opt) {
		console.log("Is " + string + " formatted properly?");
		if (regEx.test(string)) {
			return "The " + opt + " you entered was valid.";
		} else {
			return "The " + opt + " you entered was not formatted properly.";
		};
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
		return "Before: " + string + " -- After: " + tc;
	};
	var replc = function (string, a, b) {
		var re = new RegExp(a, "g"); // -- assigns a dynamic regular expression to a variable, "g" makes it process the entire string
		var newstr = string.replace(re, b); // -- replace the regEx match (a) of string with the b variable and assign it to newstr
		return "Given: " + string + " - Replace " + a + " with " + b + " -- Result: " + newstr;
	};
	var money = function (string) {
		var currency = Number(string) // -- assigns string to a number variable
		return "Input: " + string + " -- Output: $" + currency.toFixed(2); // -- limits the decimal places to 2
	};
	var fuzzy = function (numA, numB, perc) {
		var range = numB*(perc/100) // -- finds the number offset of the given number numB
		console.log("Does " + numA + " fall within " + perc + "% of " + numB + "? (" + (numB-range) + " to " + (numB+range) + ")");
     // -- MAKEUP: Number conditional, assignment 1
		if (numA <= (numB + range) && numA >= (numB - range)) { // -- if numA falls between +/-range
			return "Yes";
		} else {
			return "No";
		};
	};
	var day = function (yyyy, mm, dd) {
		var today = new Date(); // -- whatever day the script is run
		var lastDay = new Date(yyyy, (mm-1), dd); // -- the month uses an array format 0=1, 1=2, etc..
		var minutes = (lastDay - today)/60000; // -- 60,000 is the equivalent of 1000 (to convert to seconds) * 60 (to convert to minutes)
		var hours = minutes / 60
		var days = Math.floor(hours/24); // -- rounds down to get number of full days
		var remHours = hours % 24; // -- finds the remaining hours after total hours is devided by all full days
		var decMin = (remHours % 1)*60; // -- finds the remaining minutes as a decimal (.5 = 30 min) then convert it to minutes
		var remMinutes = decMin.toFixed(2); // -- Keeps minutes to 2 decimal places
		return "As of today: " + today + " there are " + days + " days, " + Math.round(remHours) + " hours and " + remMinutes + " minutes left until the end of this class.";
	};
	var strnumconv = function (string) {
		var result = Number(string); // -- This is pretty straight forward... converts the string to a number
		console.log('Input: "' + string + '"');
		return result;
	};
	var range = function (n) {
		var array = [71, 82, 34, 12, 43, 57, 5];
		var min = Math.max.apply(Math, array); // -- This line is a cool tip I found online. It applies the Math function to the array to return the max value.
		/* -- Once the min value is set to the highest value in the array,
		I can reduce it to the smallest number after passing it through a couple of if statements.
		*/
		for (i=0; i < array.length; i++) { 
			if (array[i] > n) { // -- filters out numbers < n
				if (array[i] < min) { // -- this reduces min to the lowest qualifing value
					min = array[i];
				};
			};
		};
		return "The smallest number in the array: [" + array + "] greater than " + n + " is: " + min;
	};
	var sum = function (a, b, c, d, e, f, g, h, i, j) { // -- I also found the .reduce method but it sums everything, not just numbers. I probably could of made it work but I found it after I already had this working.
		var array = [a, b, c, d, e, f, g, h, i, j];
		var total = 0
		for (i=0; i < array.length; i++) {
			if (typeof array[i] === 'number') { // -- filters out all but numbers
				total += array[i]; // -- adds each number in the array to the total
			};
		};
		return "The sum of the numbers in the array [" + array + "] is: " + total;
	};
	var sortArray = function (key) {
		var array = [{key:2}, {key:3}, {key:1}];
		return array.sort(function (a, b) {return a.key - b.key});
	 /* -- by adding a sort function I was able to define a custom sort order.
	 The function compares the 1st and 2nd array index then the 2nd and 3rd, etc. for every index available.
	 The return value returns one of three value, -1, 0 or 1 which the sort function uses to sort the array in ascending order.
	 */
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
console.log(library.phone("123.456.7890"));
console.log(library.phone("(123) 456-7890"));
console.log(library.phone("1234567890"));
console.log(library.phone("456-7890"));
console.log(library.phone("123-456-7890"));
console.log(library.email("something@domain.com"));
console.log(library.email("domain.com"));
console.log(library.url("http://www.google.com"));
console.log(library.url("https://www.google.com"));
console.log(library.url("www.google.com"));
console.log(library.titleCase("THIS IS A TEST OF TITLE CASE."));
console.log(library.replc("a,b,c", ",", "."));
console.log(library.money("34567.45634"));
console.log(library.money("37435.7"));
console.log(library.fuzzy(88, 80, 10));
console.log(library.fuzzy(28, 32, 5));
console.log(library.day(2012, 03, 26));
console.log(library.strnumconv("42"));
console.log(library.strnumconv("123 456"));
console.log(library.range(35));
console.log(library.sum(1,2,6,18,"str",3,"32 trunks"));
console.log(library.sortArray("key"));
