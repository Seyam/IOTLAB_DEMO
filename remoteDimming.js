/* -----------------------------                                                
  AUTHOR:  @SEYAM
  seyam.bd.net@gmail.com
------------------------------ */


var mraa = require('mraa');
console.log('MRAA Version: ' + mraa.getVersion());

var analogPin0 = new mraa.Aio(0); //No need to define pin direction
var led = new mraa.Pwm(6); //No need to define pin direction
led.period_us(700);
led.enable(true); //Does the rest


// var analogValue = 0.0;
var dutycycle= 0.0;

 


const mqtt = require('mqtt');
const broker = mqtt.connect('mqtt://iot.eclipse.org');

// broker.publish('light-status', state);

// checkState();

// function toggleState(){
  
//   var reading = button.read();
//   console.log('Button state= '+reading);

// }


broker.on('connect', function () {
    broker.subscribe('light');

    console.log('Subscribed to the topic = light');
   
    console.log('I get executed Once!!!');
});



broker.on('message', function (topic, message) {
  if(topic=="light"){

    dutycycle = parseFloat(message);

    led.write(dutycycle);
    console.log('Brightness set at '+dutycycle);
    
    
    // broker.publish('light-status', state);
  }
});