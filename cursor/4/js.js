function findBiggestUserN(maxNumbersAmount) {
	const numbers = [];
	for (let i = 0; i < maxNumbersAmount; i++) {
		numbers.push(parseInt(prompt('enter num')));
	}

	let biggestN = 0;
	for (let i = 0; i < numbers.lenght; i++) {
		const currentN = numbers[i];
		if(currentN > biggestN) {
			biggestN = currentN;
		}
	}
	return biggestN;
}
console.log(findBiggestUserN(5));