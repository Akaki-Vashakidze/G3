
const hundred = 100;
const thousand = 1000;
const tenThousand = 10000;
const hundredThousand = 100000;
const million = 1000000;
const million10 = 10000000;
const million100 = 100000000;
const billion = 1000000000;
const billion10 = 10000000000;
const billion100 = 100000000000;
const trillion = 1000000000000;
const trillion10 = 10000000000000;
const trillion100 = 100000000000000;
const quadrillion = 1000000000000000;
const numbers20 = ['ნული','ერთი','ორი','სამი','ოთხი','ხუთი','ექვსი','შვიდი','რვა','ცხრა','ათი','თერთმეტი','თორმეტი','ცამეტი','თოთხმეტი','თხუთმეტი','თექვსმეტი','ჩვიდმეტი','თვრამეტი','ცხრამეტი','ოცი'];
const twenties = ['ოცდა','','ორმ','სამ','ოთხმ','ოცი'];
const hundreds = ['ას','','ორ','სამ','ოთხ','ხუთ','ექვს','შვიდ','რვა','ცხრა','ასი'];
const thousands = ['ათას','ათასი'];
const millions = ['მილიონ','მილიონი'];
const billions = ['მილიარდ','მილიარდი'];
const trillions = ['ტრილიონ','ტრილიონი'];
const quadrillions = ['კვადრილიონ','კვადრილიონი'];

let word = numberToWord(222213435231455)
console.log(word)

function numberToWord(num){
	if(parseInt(num) > -1 )
		return lessThanQuadrillion(parseInt(num));
	return "Not a valid number";
}

function lessThanQuadrillion(num){
	num = parseInt(num);
	if(num <= trillion) {
        return lessThanTrillion(num);
    }
	if(num % trillion == 0 && num <= 9 * trillion100) {
        return lessThan1000(Math.floor(num / trillion)) + " " + trillions[1];
    }
	if(num == quadrillion) {
        return quadrillions[1];
    }
	if(num > quadrillion) {
        return "Please enter number less than Quadrillion";
    }
	return lessThan1000(Math.floor(num / trillion)) + " " + trillions[0] + " " + lessThanTrillion(num - Math.floor(num / trillion) * trillion);
}

function lessThanTrillion(num){
	if(num <= billion) { 
        return lessThanBillion(n);
    }
	if(num % billion == 0 && num <= 9 * billion100) {
        return lessThan1000(Math.floor(num / billion)) + " " + billions[1];
    }
	if(num == trillion) {
        return trillions[1];
    }
	return lessThan1000(Math.floor(num / billion)) + " " + billions[0] + " " + lessThanBillion(num - Math.floor(num / billion) * billion);
}

function lessThanBillion(num){
	if(num <= million) {
        return lessThanMillion(num);
    }
	if(num % million == 0 && num <= 9 * million100) {
        return lessThan1000(Math.floor(num / million)) + " " + millions[1];
    }
	if(num == billion) {
        return billions[1];
    }
	return lessThan1000(Math.floor(num / million)) + " " + millions[0] + " " + lessThanMillion(num - Math.floor(num / million) * million);
}

function lessThanMillion(num){
	if(num <= thousand) {
        return lessThan1000(n);
    }
	if(num % thousand == 0 && num <= 9 * hundredThousand) {
        return lessThan1000(Math.floor(num / thousand)) + " " + thousands[1];
    }
	if(num == million) { 
        return millions[1];
    }
    //2000 და ზემოთ
	if(Math.floor(num / thousand) > 1) {
        return lessThan1000(Math.floor(num / thousand)) + " " + thousands[0] + " " + lessThan1000(num - Math.floor(num / thousand) * thousand);
    }
    //2000 მდე
	else {
     	return thousands[0] + " " + lessThan1000(num - Math.floor(num / thousand) * thousand);
    }
	
}

function lessThan1000(num){
	if(num <= hundred) {
        return lessThan100(n);
    }
	if(num % hundred == 0 && num <= 9 * hundred) {
        return hundreds[Math.floor(num / hundred)] + " " + hundreds[10];
    }
	if(num == thousand) {
        return thousands[1];
    }
	return hundreds[Math.floor(num / hundred)] + hundreds[0] + " " + lessThan100(num - Math.floor(num / hundred) * hundred);
}

function lessThan100(num){
	if(num <= 20) {
        return lessThan20(num);
    }
	if(num == 100) {
        return hundreds[10];
    }
	if(num % 20 == 0) { 
        return twenties[Math.floor(num / 20)] + twenties[5];
    }
	return twenties[Math.floor(num / 20)] + twenties[0] + lessThan20(num - Math.floor(num / 20) * 20);
}

function lessThan20(num){
	return numbers20[num];
}











