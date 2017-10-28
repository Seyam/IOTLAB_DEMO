
const mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console



var analogPin0 = new mraa.Aio(0); //No need to define pin direction
var led = new mraa.Pwm(6);


led.period_us(700);
led.enable(true);

var analogValue = 0.0;


var dutycycle= 0.0;




function readValue(){

	analogValue =  analogPin0.read()/1000.0; //read the value of the analog pin
	dutycycle = analogValue.toFixed(1);
	console.log(dutycycle); //write the value of the analog pin to the console
	led.write(parseFloat(dutycycle));

}

setInterval(readValue,10);








    
// console.log('dutycycle: '+analogValue);

  

