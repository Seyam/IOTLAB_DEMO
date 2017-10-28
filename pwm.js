
const mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

var led = new mraa.Pwm(6); //setup access analog inpuput pin 0


led.period_us(700);
led.enable(True);

var value= 1.0;



led.write(value);

    
console.log(value);

  

