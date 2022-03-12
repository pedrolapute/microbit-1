input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (input.temperature()))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hello!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Non")
})
led.setBrightness(21)
led.setDisplayMode(DisplayMode.Greyscale)
radio.setGroup(58)
radio.setTransmitPower(7)
radio.setFrequencyBand(25)
radio.sendString("OK !")
basic.forever(function () {
    radio.sendString("" + (input.temperature()))
    basic.pause(3000)
    radio.sendString("Non")
    basic.pause(3000)
})
