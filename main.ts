let velocidad = 40
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        if (maqueen.Ultrasonic(PingUnit.Centimeters) == 1 && maqueen.Ultrasonic(PingUnit.Centimeters) == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
            maqueen.motorStop(maqueen.Motors.M2)
        }
        if (maqueen.Ultrasonic(PingUnit.Centimeters) == 1) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
        }
        if (true) {
            maqueen.motorStop(maqueen.Motors.M2)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
        }
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
})
