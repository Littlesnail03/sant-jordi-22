input.onButtonPressed(Button.A, function () {
    basic.showString("Feliç Sant Jordi")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.Confused)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("La Torreta")
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
