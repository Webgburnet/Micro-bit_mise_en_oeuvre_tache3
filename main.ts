let temperature = 0
let pression = 0
let humidite = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    humidite = envirobit.getHumidity()
    pression = envirobit.getPressure()
    temperature = envirobit.getTemperature()
    basic.showString("Humidite" + humidite)
    basic.pause(200)
    basic.showString("Pression" + pression)
    basic.pause(200)
    basic.showString("Temperature" + temperature)
    basic.pause(200)
})
