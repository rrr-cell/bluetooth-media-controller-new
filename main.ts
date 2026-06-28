bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.LogoUp, function () {
    media.sendCode(media.keys(media._MediaKey.vol_up))
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    media.sendCode(media.keys(media._MediaKey.next))
    basic.showLeds(`
        # # . . #
        # . # . #
        # . . # #
        # . # . #
        # # . . #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    media.sendCode(media.keys(media._MediaKey.stop))
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    media.sendCode(media.keys(media._MediaKey.playPause))
    basic.showLeds(`
        . # . . .
        . # # . .
        . # . # .
        . # # . .
        . # . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    media.sendCode(media.keys(media._MediaKey.previous))
    basic.showLeds(`
        # . . # #
        # . # . #
        # # . . #
        # . # . #
        # . . # #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    media.sendCode(media.keys(media._MediaKey.vol_down))
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
basic.showString("BLUETOOTH PARING")
basic.forever(function () {
    media.startMediaService()
})
