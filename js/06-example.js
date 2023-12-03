// Write a function findLargestNumber(numbers) that looks for the largest number in array.

// function findLargestNumber(numbers) {
// 	let max = numbers[0];
// 	for (let i = 0; i < numbers.length; i++) {
// 		if (numbers[i] > max) {
// 			max = numbers[i];
// 		}
// 	}
// 	return max;
// }

function findLargestNumber(numbers) {
	return Math.max(...numbers);
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83