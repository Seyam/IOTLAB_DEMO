/* -----------------------------                                                
  AUTHOR:  @SEYAM
  seyam.bd.net@gmail.com
------------------------------ */


var mraa = require('mraa');
console.log('MRAA Version: ' + mraa.getVersion());

var led = new mraa.Gpio(13);
// var button = new mraa.Gpio(2);


led.dir(mraa.DIR_OUT);
// button.dir(mraa.DIR_IN);


 


const mqtt = require('mqtt');
const broker = mqtt.connect('mqtt://iot.eclipse.org');
// var state = 'on';


// broker.publish('light-status', state);







// checkState();

function toggleState(){
  
  var reading = button.read();
  console.log('Button state= '+reading);

}


 

broker.on('connect', function () {
    broker.subscribe('light');

    console.log('Subscribed to the topic = light');
   
    console.log('I get executed Once!!!');
});



broker.on('message', function (topic, message) {
  if(topic=="light"){
    if(message == 'on'){
      led.write(1);
      console.log('LED Turned ON');
      //state = 'on';
    }

    else if(message == 'off'){
      led.write(0);
      console.log('LED Turned OFF');
      // state = 'off';
    }
    // broker.publish('light-status', state);
  }
});