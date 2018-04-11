/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var weapon = "poison";
var suspect = "Mr. Kalehoff";
var solved = false;

if (room === "ballroom") {
	weapon = "poison";
	suspect = "Mr. Kalehoff";
	solved = true;
} else if (room === "gallery") {
	weapon = "trophy";
	suspect = "Ms. Van Cleve";
	solved = true;
} else if (room === "billiards room") {
	weapon = "pool stick";
	suspect = "Mrs. Sparr";
	solved = true;
} else if (room === "dining room") {
	weapon = "knife";
	suspect = "Mr. Parkes";
	solved = true;
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
