controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (project.isHittingTile(CollisionDirection.Bottom)) {
        project.vy = -185
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let projectile2: Sprite = null
let exit2 = 0
let exit = 0
let projectile: Sprite = null
let project: Sprite = null
scene.setBackgroundColor(9)
project = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c . . . . . . . 
    . . . . . . c 5 c c . . . . . . 
    . . . . c c c 5 5 5 c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f . . . 
    . . f f e e b f e e e f . . . . 
    . . f f f b 1 f b b e f . . . . 
    . . . f f b b b b b b f . . . . 
    . . e b b e e e e e f . . . . . 
    . . e b b e b b b 5 5 f . . . . 
    . . . e e e 5 5 5 5 5 c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
project.setPosition(20, 70)
project.ay = 400
tiles.setCurrentTilemap(tilemap`level2`)
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c . . . . . . . . . . . 
        . c c 6 6 c . . . . . . . . . . 
        c c 3 3 f 6 c . . . . . . . . . 
        c 6 c f 6 3 c . . . . . . . . . 
        c 3 6 3 3 3 c . . . . . . . . . 
        c 3 6 6 3 3 c . . . . . . . . . 
        c 3 3 6 6 3 c . . . . . . . . . 
        . c 3 3 3 6 . . . . . . . . . . 
        . . 6 7 6 . . . . . . . . . . . 
        . . 6 6 8 8 8 6 . . . . . . . . 
        . . 6 8 7 7 7 6 . . . . . . . . 
        . . 8 7 7 7 6 . . . . . . . . . 
        . . 8 8 8 6 . . . . . . . . . . 
        `, project, randint(-200, -120), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
    exit += 1
    if (exit > 4) {
        exit2 = randint(1, 2)
        if (exit2 == 2) {
            pause(100)
            projectile2 = sprites.createProjectileFromSide(img`
                . . . . f f f f f f . . . . . . 
                . . . . f f 2 2 c c f . . . . . 
                . . . . . f f c c c c f f f . . 
                . . . . c c 2 4 4 4 2 2 2 2 c c 
                . . . c 9 b 4 4 2 2 2 2 2 2 2 2 
                . . c 9 9 9 b 2 2 2 2 2 2 2 2 2 
                . c 2 b 9 9 1 1 1 b 2 2 2 2 2 2 
                c 2 2 2 b 1 1 1 9 9 2 2 2 2 c c 
                f 2 2 2 2 2 2 2 2 2 2 2 2 c 2 2 
                . f 2 2 2 2 2 2 2 2 2 2 4 4 2 2 
                . . f f 2 2 2 2 2 2 2 c f 4 4 2 
                . . . . f f f f f f f f f f 4 4 
                . . . . . . . . . f 2 c f f f c 
                . . . . . . . . . f c c 2 f f f 
                . . . . . . . . . . f c 2 f f f 
                . . . . . . . . . . . f f f f f 
                `, randint(-120, -100), 0)
            tiles.placeOnTile(projectile2, tiles.getTileLocation(9, 3))
        }
    }
})
