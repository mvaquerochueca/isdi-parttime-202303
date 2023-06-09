const STEP = 5
class Car {
    constructor(icon) {
        this.icon = icon
        this.pos = 0
    }

    move() {
        this.pos += Math.round(STEP + (1 - Math.random()))
    }

    render() {
        console.log(' '.repeat(this.pos), this.icon)
    }
}

let pos = 0

const taxi = new Car('🚕')
const thief = new Car('🚗')
const police = new Car('🚓')

setInterval(() => {
    console.clear()
    taxi.render
    thief.render
    police.render

    taxi.move()
    thief.move()
    police.move()
}, 200)
