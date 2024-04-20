
/*
Assignment 5: Problem 1 - Turn the `people` array into an array of strings,
where each string is in the format: "Name: [full name], Age: [age]".

For example:
const people = [
	{ firstName: 'John', lastName: 'Doe', age: 25 },
	{ firstName: 'Jane', lastName: 'Doe', age: 22 }
]

Would result in:
[
	'Name: John Doe, Age: 25',
	'Name: Jane Doe, Age: 22'
]

TO TEST:
You can run this example by running `node problems/problem-1` in your terminal,
or you can run all by running `node run-all`.
*/

const { test } = require('../tester')

const people = [
	'Name: William Shakespeare, Age: 52',
	'Name: Albert Einstein, Age: 76',
	'Name: Isaac Newton, Age: 84',
	'Name: Marie Curie, Age: 66'
]

const peopleStrings = people // append your array methods here

test("Problem 1", peopleStrings)