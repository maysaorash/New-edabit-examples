function hello() {
	return "hello edabit.com"
}

function convert(minutes) {
	return minutes*60
}

function findPerimeter(length, width) {
	return (length+width)*2
}

function cubes(a) {
	return a ** 3
}

function squared(b) {
	return b * b
}

function lessThanOrEqualToZero(num) {
	if(num<=0){return true}
	else {
		return false
	}
}

function getFirstValue(arr) {
	return arr[0]
}

function animals(chickens, cows, pigs) {
	return (chickens*2)+ (cows*4)+ (pigs*4)
}

function debugMe(){ 
	return true? true: false; 
}

function isSeven(x){
	if (x==7){return true}
	else{
	return false;
	}
}

function isSeven(x){
	return x === 7;
}

function isSeven(x){
	return x==7?true:false;
}



function convert(minutes) {
	return  minutes * 60;
}

function circuitPower(voltage, current) {
	return voltage * current;
}

function howManySeconds(hours) {
	return hours*3600
}

function giveMeSomething(a) {
	return "something "+a
}

function remainder(x, y) {
	return x%y
}

function triArea(base, height) {
	return (base*height)/2
}

function addition(num) {
	return num+1
}

function points(twoPointers, threePointers) {
	return (twoPointers*2)+(threePointers*3)
}

function nameString(name){
	var b = "Edabit"
	var result = name + b
  	return result
}

function and(a, b) {
	if(a&&b){
		return true;
	}else if(!a&&b){
		return false
	} else {
		return false
	}
}

function and(a, b) {
	return a && b;
}

function boolToString(flag) {
	return flag.toString()
}

function boolToString(flag){
	return flag ? 'true' : 'false';
}

function boolToString(flag){
	return String(flag)
}

function boolToString(flag){
	return flag + "";
}

function boolToString(flag){
	return `${flag}`;
}

function boolToString(flag){
	var booly = "";
	if (flag){
		booly = "true";
	} else{
		booly = "false";
	}
	return booly;
}

function lessThan100(a, b) {
	return a+b<100? true: false;
}

function nextEdge(side1, side2) {
	return (side1+side2)-1;
}  

function sumPolygon(n) {
	return (n-2)*180;
}

function howManyWalls(n, w, h) {
	return Math.floor(n/(w*h));
}

function calcAge(age) {
	return age*365;
}

function yearsInOneHouse(age, moves) {
	return Math.round(age/(moves+1));
}

function footballPoints(wins, draws, losses) {
	return (wins*3)+(draws*1)+(losses*0)
}

function printArray(number){
    var newArray = [];
    
    for(var i = 1; i <= number; i++){
      newArray.push(i);
    }
    
    return newArray;
  }

  function isSameNum(num1, num2) {
	return num1===num2? true: false;
}

function isSameNum(num1, num2) {
	return num1 === num2
}

function isSameNum(num1, num2) {
	if (num1 === num2){
		return true;
	}else{
		return false;
	}
}

function profitableGamble(prob, prize, pay) {
	return prob*prize>pay
}

function profitableGamble(prob, prize, pay) {
	return prob * prize > pay ? true : false;
}

function greeting(name) {
	if(name == "Mubashir") {
	  return "Hello, my Love!";
	}else{
	   return "Hello, " + name + "!";	
	  }
  }

  function greeting(name){
	return name == "Mubashir"?"Hello, my Love!":"Hello, " + name + "!";
	}

	function calculator(str) {
		return eval(str);
	}

	const calculator = (str) => eval(str);

	const calculator = eval;

	function returnNegative(n) {
		return -Math.abs(n); 
	}

	function convert(hours, minutes) {
		return (hours*3600)+(minutes*60)
	}

	function convert(hours, minutes) {
		return ((hours*60) + minutes) * 60
	}

	function frames(minutes, fps) {
		return minutes*(fps*60)
	}

	function comp(str1, str2) {
		return (str1.length==str2.length)? true: false;
	}

	function comp(str1, str2) {
		return str1.length === str2.length;
	}

	function makesTen(a, b) {
		if(a==10 || b==10){
			return true;
		}else if(a+b==10){
				return true;	
		}else{
			return false;
		} 
	}

	let makesTen = (a,b)=> a + b == 10 ||a == 10 || b == 10;

	const makesTen = (a, b) => [a, b, a + b].includes(10);

	function makesTen(a,b){
		if (a === 10 || b === 10 || a + b === 10) { 
		return true;
		} else {
			return false;
		}
	}

	function makePair(num1, num2) {
		return [num1, num2];
	}

	function makePair(num1, num2) {
		return [...arguments]
	}

	const makePair = (a,b) => [a,b];

	function swap(a, b){
		return [b, a]
	}

	arrowFunc=(a)=>a;

	function length(str) {
		return str.length;
	}

	function maxNum(n1,n2) {
		if (n1<n2) {
		  return n2;
		}else{
		return n1;
	  }
	}