basic.forever(function () {
    led.plot(randint(0, 5), randint(0, 5))
    basic.pause(100)
    if (input.isGesture(Gesture.Shake)) {
        led.toggle(randint(0, 5), randint(0, 5))
    }
})
