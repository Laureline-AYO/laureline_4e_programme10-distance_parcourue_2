input.onButtonPressed(Button.A, function () {
    if (Distance < 1000) {
        basic.showNumber(Distance)
        basic.showString("m")
    } else {
        basic.showNumber(Distance / 1000)
        basic.showString("km")
    }
})
input.onButtonPressed(Button.AB, function () {
    Distance = 0
    pas = 0.25
    basic.showNumber(Distance)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (pas <= 1.2) {
        pas += 0.1
    }
})
input.onGesture(Gesture.Shake, function () {
    Distance += pas
})
input.onGesture(Gesture.LogoDown, function () {
    Distance += pas
})
let pas = 0
let Distance = 0
Distance = 0
pas = 0.25
