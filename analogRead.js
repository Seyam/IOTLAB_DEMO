
const mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

var analogPin0 = new mraa.Aio(0); //setup access analog inpuput pin 0



var analogValue = 0;

function readValue(){

	analogValue =  analogPin0.read(); //read the value of the analog pin
	console.log(analogValue); //write the value of the analog pin to the console


}

setInterval(readValue,10);




