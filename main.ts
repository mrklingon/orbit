let Sun = game.createSprite(1, 1)
let Moon = game.createSprite(3, 3)
led.plot(1, 1)
let Ship = game.createSprite(2, 0)
let Ship2 = game.createSprite(2, 4)
Ship2.turn(Direction.Right, 180)
while (true) {
    led.plot(1, 1)
    Ship.turn(Direction.Right, 45)
    Ship.move(1)
    Ship2.turn(Direction.Right, 45)
    Ship2.move(1)
    basic.pause(100)
}
basic.forever(function () {
	
})
