bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.LogoUp, function () {
    media.sendCode(media.keys(media._MediaKey.vol_up))
})
input.onGesture(Gesture.TiltLeft, function () {
    media.sendCode(media.keys(media._MediaKey.previous))
})
input.onGesture(Gesture.Shake, function () {
    media.sendCode(media.keys(media._MediaKey.playPause))
})
input.onGesture(Gesture.TiltRight, function () {
    media.sendCode(media.keys(media._MediaKey.next))
})
input.onGesture(Gesture.LogoDown, function () {
    media.sendCode(media.keys(media._MediaKey.vol_down))
})
basic.forever(function () {
    media.startMediaService()
})
