import mraa
import time

led = mraa.Pwm(6)
led.period_us(700)
# led.enable(True)   works fine without this
value= 0.0

while True:

	# while (value <= 0.5):

    led.write(value)
    time.sleep(0.01)
    value = value + 0.01
    print value

    if value > 1:
		while value >= 0.0:
			led.write(value)
			time.sleep(0.01)
    		value = value - 0.01
			# print value

    if value <= 0.0:
		value = 0.0
		# print "loop ended"
