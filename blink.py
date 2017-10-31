import mraa
import time


print (mraa.getVersion())


x = mraa.Gpio(13)
x.dir(mraa.DIR_OUT)
# x.period_us(700)
# x.enable(True)
# value=1;

while True:
    x.write(1)
    time.sleep(0.05)
    x.write(0)
    time.sleep(2)
