function endroit () {
    if (a >= 5) {
        ass1 = -1
    } else if (a <= 1) {
        ass1 = 1
    }
    if (b >= 5) {
        ass2 = -1
    } else if (b <= 1) {
        ass2 = 1
    }
    if (c >= 5) {
        ass3 = -1
    } else if (c <= 1) {
        ass3 = 1
    }
    if (d >= 5) {
        ass4 = -1
    } else if (d <= 1) {
        ass4 = 1
    }
    if (e >= 5) {
        ass5 = -1
    } else if (e <= 1) {
        ass5 = 1
    }
}
function bouge () {
    for (let x1 = 0; x1 <= 2; x1++) {
        led.plotBrightness(0, a - x1, liste[x1])
        led.plotBrightness(1, b - x1, liste[x1])
        led.plotBrightness(2, c - x1, liste[x1])
        led.plotBrightness(3, d - x1, liste[x1])
        led.plotBrightness(4, e - x1, liste[x1])
        a += ass1
        b += ass2
        c += ass3
        d += ass4
        e += ass5
        basic.pause(300)
    }
}
let ass5 = 0
let ass4 = 0
let ass3 = 0
let ass2 = 0
let ass1 = 0
let e = 0
let d = 0
let c = 0
let b = 0
let a = 0
let liste: number[] = []
liste = [0, 255, 0]
a = 0
b = 1
c = 2
d = 3
e = 4
ass1 = 1
ass2 = 5
ass3 = 1
ass4 = 5
ass5 = 1
basic.forever(function () {
    endroit()
    bouge()
})
