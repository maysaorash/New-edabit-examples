function largest(n) {
	return  +('9'.repeat(n))
}

function divisible(num) {
	return !(num%100)
}

function calculateFuel(n) {
	if (n<=10){return 100}
	else if(n>10){return n*10}
}

function calculateFuel(n) {
	return n>10 ? n*10 : 100
}

const calculateFuel = n => Math.max(100, n * 10);

let calculateFuel = n => n*10 < 100 ? 100 : n*10;

function calculateFuel(n) {
	return n * 10 < 100 ? 100 : n * 10
}

function calculateFuel(n) {
	return Math.max(n*10, 100);
}

function nthEven(n) {
	return (n*2)-2
}

function divisibleByFive(n) {
return n%5===0;
}

function isEven(n) {
	return n % 2 === 0
}

const area = (h, w) => h > 0 && w > 0 ? h * w : -1;

function area(h, w) {
	if(h <=0 || w <= 0) {
		return -1;
	}
	return h * w;
}

function stringInt(str) {
	return parseInt(str)
}

const stringInt = Number;

let  stringInt = str => Number(str);

function checkEquality(a, b) {
 return a===b
}

