function takeHour() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

setInterval(function () {
    console.log(takeHour())
}, 1000)