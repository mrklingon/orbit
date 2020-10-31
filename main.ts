input.onButtonPressed(Button.A, function () {
    Falcon.move(1)
    Falcon.ifOnEdgeBounce()
    if (Falcon.get(LedSpriteProperty.X) == 4 && Falcon.get(LedSpriteProperty.Y) == 0) {
        basic.showString("You made it!!!")
        game.addScore(1000)
        game.setLife(0)
    }
    Start = 1
})
input.onButtonPressed(Button.B, function () {
    Falcon.turn(Direction.Left, 45)
})
let Ship2: game.LedSprite = null
let Moon: game.LedSprite = null
let Speed_2 = 0
let Speed = 0
let Ship: game.LedSprite = null
let Sun: game.LedSprite = null
let Start = 0
let Falcon: game.LedSprite = null
Falcon = game.createSprite(0, 4)
game.setLife(5)
let Tscore = 0
images.createBigImage(`
    . # # . . . . . . .
    . . # # . . . . . .
    . # # # # . . . . .
    . # # # # . . . . .
    . . # # . . . . . .
    `).scrollImage(1, 200)
Start = 0
basic.forever(function () {
    Sun = game.createSprite(1, 1)
    Ship = game.createSprite(2, 0)
    Speed = 100
    while (true) {
        Ship.turn(Direction.Right, 45)
        Ship.move(1)
        basic.pause(Speed)
    }
})
basic.forever(function () {
    Speed_2 = 250
    Moon = game.createSprite(3, 3)
    Ship2 = game.createSprite(2, 4)
    Ship2.turn(Direction.Right, 180)
    while (true) {
        Ship2.turn(Direction.Right, 45)
        Ship2.move(1)
        basic.pause(Speed_2)
        Tscore += 1 * Start
        if (Ship2.isTouching(Falcon) || Ship.isTouching(Falcon)) {
            game.removeLife(1)
            game.addScore(Tscore)
            Tscore = 0
        }
    }
})
