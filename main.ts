enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Walkingleft,
    IdleLeft
}
namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Fireball = SpriteKind.create()
    export const Fire = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    if (info.life() != 0) {
        info.changeLifeBy(-1)
        startlevel()
    } else {
        game.setGameOverEffect(false, effects.melt)
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function (sprite4, otherSprite2) {
    otherSprite2.destroy()
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . 9 9 9 9 1 . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f 5 f f 5 5 f f 5 f f . . . 
        . f 5 5 f f 5 5 f f 5 f f . . . 
        . . f 5 f f 5 5 f f f f . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . 9 9 9 9 1 . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . 9 9 9 9 1 . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f 5 f f 5 5 f f 5 f f . . . 
        . f 5 5 f f 5 5 f f 5 f f . . . 
        . . f 5 f f 5 5 f f f f . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . 9 9 9 9 1 . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . 9 9 9 9 1 . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f 5 f f 5 5 f f 5 f f . . . 
        . f 5 5 f f 5 5 f f 5 f f . . . 
        . . f 5 f f 5 5 f f f f . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . 9 9 9 9 1 . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . 9 9 9 9 1 . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f 5 f f 5 5 f f 5 f f . . . 
        . f 5 5 f f 5 5 f f 5 f f . . . 
        . . f 5 f f 5 5 f f f f . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . 9 9 9 9 1 . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . 9 9 9 9 1 . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f 5 f f 5 5 f f 5 f f . . . 
        . f 5 5 f f 5 5 f f 5 f f . . . 
        . . f 5 f f 5 5 f f f f . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . 9 9 9 9 1 . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . 9 9 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(hopsandpows.x + 40, hopsandpows.y - 40)
    bee.follow(hopsandpows)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hopsandpows.vy == 0) {
        hopsandpows.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite3, location3) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    if (info.life() != 0) {
        info.changeLifeBy(-1)
        startlevel()
    } else {
        game.setGameOverEffect(false, effects.melt)
        game.gameOver(false)
    }
})
function Game_intro () {
    game.setDialogFrame(img`
        1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        f 1 f f f f f f f f f f 1 1 f 
        1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        f 1 f f f f f f f f f f f 1 f 
        1 f 1 1 1 1 1 1 1 1 1 1 1 f 1 
        `)
    game.showLongText("LostCat in the Forest Copyright 2023 ", DialogLayout.Bottom)
    game.showLongText("Game by Rodrigo,Gabriel and Amanda", DialogLayout.Bottom)
    game.showLongText("Press A Key to Start", DialogLayout.Bottom)
}
function idleCat () {
    idleLeft = animation.createAnimation(ActionKind.IdleLeft, 1000)
    animation.attachAnimation(hopsandpows, idleLeft)
    idleLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . . . . 
        . 1 1 1 . . . . . . . . . . . . 
        1 7 1 1 . . . . . . . . . . . . 
        1 5 1 1 a 1 1 1 1 1 1 1 1 1 1 f 
        . 1 1 a 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 . 1 . . . 1 . 1 . . . . 
        . . . f . f . . . f . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    idleLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . . . . 
        . 1 1 1 . . . . . . . . . . . . 
        1 7 1 1 . . . . . . . . . . . . 
        1 5 1 1 a 1 1 1 1 1 1 1 1 1 1 f 
        . 1 1 a 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 . 1 . . . 1 . 1 . . . . 
        . . . f . f . . . f . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    idleLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . . . . 
        . 1 1 1 . . . . . . . . . . . . 
        1 7 1 1 . . . . . . . . . . . . 
        1 5 1 1 a 1 1 1 1 1 1 1 1 1 1 f 
        . 1 1 a 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 . 1 . . . 1 . 1 . . . . 
        . . . f . f . . . f . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    idleLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . . . . 
        . 1 1 1 . . . . . . . . . . . . 
        1 7 1 1 . . . . . . . . . . . . 
        1 5 1 1 a 1 1 1 . . . . . . . . 
        . 1 1 a 1 1 1 1 1 . . . . . . . 
        . . . 1 1 1 1 1 1 1 . . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . f f 1 1 1 f 1 1 1 1 1 1 f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    idleRight = animation.createAnimation(ActionKind.Idle, 1000)
    animation.attachAnimation(hopsandpows, idleRight)
    idleRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 1 1 . 
        . . . . . . . . . . . . 1 1 7 1 
        f 1 1 1 1 1 1 1 1 1 1 a 1 1 5 1 
        . . . . 1 1 1 1 1 1 1 1 a 1 1 . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 . 1 . . . 1 . 1 . . . 
        . . . . f . f . . . f . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    idleRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 1 1 . 
        . . . . . . . . . . . . 1 1 7 1 
        f 1 1 1 1 1 1 1 1 1 1 a 1 1 5 1 
        . . . . 1 1 1 1 1 1 1 1 a 1 1 . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 . 1 . . . 1 . 1 . . . 
        . . . . f . f . . . f . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    idleRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 1 1 . 
        . . . . . . . . . . . . 1 1 7 1 
        f 1 1 1 1 1 1 1 1 1 1 a 1 1 5 1 
        . . . . 1 1 1 1 1 1 1 1 a 1 1 . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 . 1 . . . 1 . 1 . . . 
        . . . . f . f . . . f . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    idleRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 1 1 . 
        . . . . . . . . . . . . 1 1 7 1 
        . . . . . . . . 1 1 1 a 1 1 5 1 
        . . . . . . . 1 1 1 1 1 a 1 1 . 
        . . . . . . 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . f 1 1 1 1 1 1 f 1 1 1 f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite5, otherSprite3) {
    info.changeScoreBy(-1)
    music.smallCrash.play()
    otherSprite3.destroy()
    if (hopsandpows.y < otherSprite3.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fire, function (sprite33, otherSprite4) {
    info.changeScoreBy(-1)
    info.changeLifeBy(-1)
    music.bigCrash.play()
    otherSprite4.destroy()
})
function CoinAnimation () {
    for (let value22 of tiles.getTilesByType(assets.tile`myTile2`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . f 5 5 5 5 4 4 4 5 5 4 5 f . . 
            . f 5 5 5 4 5 5 5 5 5 4 5 f . . 
            . f 5 5 5 4 5 5 5 5 5 4 5 f . . 
            . f 5 5 5 4 5 5 5 5 5 4 5 f . . 
            . f 5 5 5 4 5 5 5 5 5 4 5 f . . 
            . f 5 5 5 5 4 4 4 5 5 4 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 4 5 f . . 
            . . f 5 4 4 4 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        coin,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 4 4 4 4 4 4 4 5 f . . . 
            . f 5 5 5 5 5 5 5 5 5 4 5 f . . 
            . f 5 5 5 5 4 4 4 5 5 4 5 f . . 
            . f 5 5 5 5 4 5 5 5 5 4 5 f . . 
            . f 5 5 5 5 4 5 5 5 5 4 5 f . . 
            . f 5 5 5 5 4 5 5 5 5 4 5 f . . 
            . f 5 5 5 5 4 4 4 5 5 4 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 4 5 f . . 
            . . f 5 4 4 4 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 4 4 5 f . . . . . 
            . . . f 5 5 5 5 5 4 5 f . . . . 
            . . . f 5 5 4 4 5 4 5 f . . . . 
            . . . f 5 5 4 5 5 4 5 f . . . . 
            . . . f 5 5 4 5 5 4 5 f . . . . 
            . . . f 5 5 4 5 5 4 5 f . . . . 
            . . . f 5 5 4 4 5 4 5 f . . . . 
            . . . f 5 5 5 5 5 4 5 f . . . . 
            . . . . f 5 4 4 4 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 4 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 4 4 5 f . . . . . 
            . . . f 5 5 5 5 5 4 5 f . . . . 
            . . . f 5 5 4 4 5 4 5 f . . . . 
            . . . f 5 5 5 4 5 4 5 f . . . . 
            . . . f 5 5 5 4 5 4 5 f . . . . 
            . . . f 5 5 5 4 5 4 5 f . . . . 
            . . . f 5 5 4 4 4 4 5 f . . . . 
            . . . f 5 5 5 5 5 4 5 f . . . . 
            . . . . f 5 4 4 4 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 4 4 4 4 4 4 4 5 f . . . 
            . f 5 5 5 5 5 5 5 5 5 4 5 f . . 
            . f 5 5 5 5 4 4 5 5 5 4 5 f . . 
            . f 5 5 5 5 5 4 5 5 5 4 5 f . . 
            . f 5 5 5 5 5 4 5 5 5 4 5 f . . 
            . f 5 5 5 5 5 4 5 5 5 4 5 f . . 
            . f 5 5 5 5 4 4 4 5 5 4 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 4 5 f . . 
            . . f 5 4 4 4 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(coin, value22)
        tiles.setTileAt(value22, assets.tile`transparency16`)
    }
}
function startlevel () {
    if (currentlevel == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (currentlevel == 1) {
        tiles.setCurrentTilemap(tilemap`level3`)
    } else if (currentlevel == 2) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (currentlevel == 3) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (currentlevel == 4) {
        tiles.setCurrentTilemap(tilemap`level`)
    } else {
        game.over(true, effects.smiles)
    }
    tiles.placeOnRandomTile(hopsandpows, assets.tile`myTile4`)
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    scene.cameraFollowSprite(hopsandpows)
    for (let value2 of sprites.allOfKind(SpriteKind.Coin)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Flower)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Enemy)) {
        value4.destroy()
    }
    CoinAnimation()
    for (let value222 of tiles.getTilesByType(assets.tile`myTile3`)) {
        flower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . a a a a . . . . . . 
            . . . . . a f f f f a . . . . . 
            . . . . a f 5 5 5 5 f a . . . . 
            . . . a f 5 5 5 5 5 5 f a . . . 
            . . . a f 5 f 5 5 f 5 f a . . . 
            . . . a f 5 5 5 5 5 5 f a . . . 
            . . . . a f 5 5 5 5 f a . . . . 
            . . . . . a f f f f a . . . . . 
            . . . 7 7 . . 7 7 . 7 7 . . . . 
            . . . 7 7 7 7 7 7 7 7 7 . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            `, SpriteKind.Flower)
        tiles.placeOnTile(flower, value222)
        tiles.setTileAt(value222, assets.tile`transparency16`)
    }
    FireBallAnime()
    FireBallAnime2()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fireball, function (sprite33, otherSprite4) {
    info.changeScoreBy(-1)
    info.changeLifeBy(-1)
    music.bigCrash.play()
    otherSprite4.destroy()
})
function FireBallAnime2 () {
    for (let value223 of tiles.getTilesByType(assets.tile`myTile15`)) {
        fireball_2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Fire)
        tiles.placeOnTile(fireball_2, value223)
        tiles.setTileAt(value223, assets.tile`transparency16`)
        animation.runMovementAnimation(
        fireball_2,
        "c -60 0 60 0 0 0",
        2000,
        true
        )
        fireball_2.startEffect(effects.ashes, 500)
    }
}
function FireBallAnime () {
    for (let value2232 of tiles.getTilesByType(assets.tile`myTile14`)) {
        fireball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Fireball)
        tiles.placeOnTile(fireball, value2232)
        tiles.setTileAt(value2232, assets.tile`transparency16`)
        animation.runMovementAnimation(
        fireball,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
        fireball.startEffect(effects.fire, 500)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite2, location2) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    if (info.life() != 0) {
        info.changeLifeBy(-1)
        startlevel()
    } else {
        game.setGameOverEffect(false, effects.melt)
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite32, otherSprite) {
    info.changeScoreBy(1)
    music.baDing.play()
    otherSprite.destroy()
})
function walkCat () {
    walkLeft = animation.createAnimation(ActionKind.Walkingleft, 100)
    animation.attachAnimation(hopsandpows, walkLeft)
    walkLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . . . . 
        . 1 1 1 . . . . . . . . . . . . 
        1 7 1 1 . . . . . . . . . . . . 
        1 5 1 1 a 1 1 1 1 1 1 1 1 1 1 f 
        . 1 1 a 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 . 1 . . . 1 . 1 . . . . 
        . . . f . f . . . f . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    walkLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . . . . 
        . 1 1 1 . . . . . . . . . . . . 
        1 7 1 1 . . . . . . . . . . . . 
        1 5 1 1 a 1 1 1 1 1 1 1 1 1 1 f 
        . 1 1 a 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 . . 1 . . . 1 . . 1 . . . 
        . . f . . f . . . f . . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    walkLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . . . . 
        . 1 1 1 . . . . . . . . . . . . 
        1 7 1 1 . . . . . . . . . . . . 
        1 5 1 1 a 1 1 1 1 1 1 1 1 1 1 f 
        . 1 1 a 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 . . . . . . . 1 1 . . . 
        . . f f . . . . . . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    walkLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . . . . 
        . 1 1 1 . . . . . . . . . . . . 
        1 7 1 1 . . . . . . . . . . . . 
        1 5 1 1 a 1 1 1 1 1 1 1 1 1 1 f 
        . 1 1 a 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 . . . . . 1 1 . . . . 
        . . . f f . . . . . f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    walkRight = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hopsandpows, walkRight)
    walkRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 1 1 . 
        . . . . . . . . . . . . 1 1 7 1 
        f 1 1 1 1 1 1 1 1 1 1 a 1 1 5 1 
        . . . . 1 1 1 1 1 1 1 1 a 1 1 . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 . 1 . . . 1 . 1 . . . 
        . . . . f . f . . . f . f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    walkRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 1 1 . 
        . . . . . . . . . . . . 1 1 7 1 
        f 1 1 1 1 1 1 1 1 1 1 a 1 1 5 1 
        . . . . 1 1 1 1 1 1 1 1 a 1 1 . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 . . 1 . . . 1 . . 1 . . 
        . . . f . . f . . . f . . f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    walkRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 1 1 . 
        . . . . . . . . . . . . 1 1 7 1 
        f 1 1 1 1 1 1 1 1 1 1 a 1 1 5 1 
        . . . . 1 1 1 1 1 1 1 1 a 1 1 . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 . . . . . . . 1 1 . . 
        . . . f f . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    walkRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 1 1 . 
        . . . . . . . . . . . . 1 1 7 1 
        f 1 1 1 1 1 1 1 1 1 1 a 1 1 5 1 
        . . . . 1 1 1 1 1 1 1 1 a 1 1 . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 . . . . . 1 1 . . . 
        . . . . f f . . . . . f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite22, location22) {
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
    info.changeLifeBy(2)
    currentlevel += 1
    startlevel()
})
let walkRight: animation.Animation = null
let walkLeft: animation.Animation = null
let fireball: Sprite = null
let fireball_2: Sprite = null
let flower: Sprite = null
let coin: Sprite = null
let idleRight: animation.Animation = null
let idleLeft: animation.Animation = null
let bee: Sprite = null
let currentlevel = 0
let hopsandpows: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd1111111111111111111
    11111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd111111111111111111
    11111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd111111111111111111
    111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111
    11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
    11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
    1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
    1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
    111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111
    111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd111111
    ddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111dd
    dddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddd
    dddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddd
    ddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111ddddddddddddd
    ddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddd
    ddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999dd
    dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999
    9ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd999999999999
    999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999
    9999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd999999999999999
    99999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd9999999999999999
    999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999
    999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999
    9999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd9996999999999999999
    9999999996666666666699966999999999999999999999999666666666669996699999999999999999999999966666666666999669999999999999999999999996666666666699966999999999999999
    9999999666666666669999996699999999999999999999966666666666999999669999999999999999999996666666666699999966999999999999999999999666666666669999996699999999999999
    9999999996666666669999966999999999999999999999999666666666999996699999999999999999999999966666666699999669999999999999999999999996666666669999966999999999999999
    9999999996666666999999666699999999999999999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666999999666699999999999999
    9999999966966666666996666669999999999999999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666996666669999999999999
    9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666999669999999999969999999999999666666666699966999999999996999
    9999999966666666666996666669999999996999999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666996666669999999996999
    9996999666666666666966666666999999966699999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666999999966699
    9996699999666666666666666699999999996699999669999966666666666666669999999999669999966999996666666666666666999999999966999996699999666666666666666699999999996699
    9966999966666666666666666666999999966999996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666999999966999
    9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666999996666999996699666666666666666666666699999666699
    9966666666666666666666666669999999966669996666666666666666666666666999999996666999666666666666666666666666699999999666699966666666666666666666666669999999966669
    9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666999996666999996666666666666666666666666699999666699
    9996666666666666666666666666669996666669999666666666666666666666666666999666666999966666666666666666666666666699966666699996666666666666666666666666669996666669
    9966666666666666666666666666999999666699996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999999666699
    9666666666666666666666666666669966666669966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669
    9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669966666666666666666666666666666996666666
    9966666666666666666666666666669966666666996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669966666666
    6666666666666666666666666666666966666666666666666666666666666666666666696666666666666666666666666666666666666669666666666666666666666666666666666666666966666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
hopsandpows = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 1 . . . 
    . . . . . . . . . . . . 1 1 1 . 
    . . . . . . . . . . . . 1 1 7 1 
    f 1 1 1 1 1 1 1 1 1 1 a 1 1 5 1 
    . . . . 1 1 1 1 1 1 1 1 a 1 1 . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 . 1 . . . 1 . 1 . . . 
    . . . . f . f . . . f . f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let facingright = 1
idleCat()
walkCat()
controller.moveSprite(hopsandpows, 80, 0)
currentlevel = 0
hopsandpows.setFlag(SpriteFlag.BounceOnWall, false)
info.setLife(7)
Game_intro()
startlevel()
game.onUpdate(function () {
    if (hopsandpows.vx > 0) {
        facingright = 1
    } else if (hopsandpows.vx < 0) {
        facingright = 0
    } else {
    	
    }
    if (hopsandpows.vy < 0) {
        if (facingright == 1) {
            hopsandpows.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . f . . . . . . 
                . . . . . . . . . 1 1 1 1 . . . 
                f . . . . . . 1 1 1 1 5 1 . . . 
                1 . . . . . . a a 1 1 7 1 1 . . 
                1 1 . . . 1 1 1 1 a a 1 1 1 . . 
                . 1 . . 1 1 1 1 1 1 1 a . . . . 
                . 1 1 . 1 1 1 1 1 1 1 1 1 1 f . 
                . . 1 1 1 1 1 1 1 1 1 . . . . . 
                . . . 1 1 1 1 1 . . 1 1 1 1 f . 
                . . 1 1 1 1 1 1 . . . . . . . . 
                . 1 1 1 1 1 . . . . . . . . . . 
                . 1 1 1 . . . . . . . . . . . . 
                . 1 . 1 . . . . . . . . . . . . 
                . f . f . . . . . . . . . . . . 
                `)
        } else {
            hopsandpows.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . f . . . . . . . . . 
                . . . 1 1 1 1 . . . . . . . . . 
                . . . 1 5 1 1 1 1 . . . . . . f 
                . . 1 1 7 1 1 a a . . . . . . 1 
                . . 1 1 1 a a 1 1 1 1 . . . 1 1 
                . . . . a 1 1 1 1 1 1 1 . . 1 . 
                . f 1 1 1 1 1 1 1 1 1 1 . 1 1 . 
                . . . . . 1 1 1 1 1 1 1 1 1 . . 
                . f 1 1 1 1 . . 1 1 1 1 1 . . . 
                . . . . . . . . 1 1 1 1 1 1 . . 
                . . . . . . . . . . 1 1 1 1 1 . 
                . . . . . . . . . . . . 1 1 1 . 
                . . . . . . . . . . . . 1 . 1 . 
                . . . . . . . . . . . . f . f . 
                `)
        }
    } else if (hopsandpows.vy > 0) {
        if (facingright == 1) {
            hopsandpows.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . 1 1 1 f . . . . . . . . . 
                . . . 1 . . . . . . . . . . . . 
                . . . 1 1 . . . . . . . . . . . 
                . . 1 1 1 1 1 . . . f . f . . . 
                . . 1 1 1 1 1 1 . . 1 1 1 1 . . 
                . . 1 1 1 1 1 1 a 1 1 1 5 1 . . 
                . . 1 1 1 1 1 1 1 a 1 1 7 1 1 . 
                . . 1 . . 1 1 1 1 1 a 1 1 1 1 . 
                . . 1 . . 1 . . 1 1 1 . . . . . 
                . . 1 . . 1 . . . 1 . 1 1 1 1 . 
                . . f . . 1 . . . 1 1 . . . f f 
                . . . . . f . . . . 1 1 . . . . 
                . . . . . . . . . . . f f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else {
            hopsandpows.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . f 1 1 1 . . . 
                . . . . . . . . . . . . 1 . . . 
                . . . . . . . . . . . 1 1 . . . 
                . . . f . f . . . 1 1 1 1 1 . . 
                . . 1 1 1 1 . . 1 1 1 1 1 1 . . 
                . . 1 5 1 1 1 a 1 1 1 1 1 1 . . 
                . 1 1 7 1 1 a 1 1 1 1 1 1 1 . . 
                . 1 1 1 1 a 1 1 1 1 1 . . 1 . . 
                . . . . . 1 1 1 . . 1 . . 1 . . 
                . 1 1 1 1 . 1 . . . 1 . . 1 . . 
                f f . . . 1 1 . . . 1 . . f . . 
                . . . . 1 1 . . . . f . . . . . 
                . . . f f . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    } else if (hopsandpows.vx > 0 && facingright == 1) {
        animation.setAction(hopsandpows, ActionKind.Walking)
    } else if (facingright == 1) {
        animation.setAction(hopsandpows, ActionKind.Idle)
    } else {
    	
    }
    if ((hopsandpows.isHittingTile(CollisionDirection.Right) || hopsandpows.isHittingTile(CollisionDirection.Left)) && hopsandpows.vy >= 0) {
        hopsandpows.vy = 0
        hopsandpows.ay = 0
        if (facingright == 1) {
            hopsandpows.setImage(img`
                . . . . . . . . . . 1 1 . . . . 
                . . . . . . . . . 1 5 7 . . . . 
                . . . . . . . . f 1 1 1 . . . . 
                . . . . . . . . . a 1 1 a . 1 f 
                . . . . . . . . . 1 a a 1 1 1 . 
                . . . . . . . . . 1 1 1 1 . . . 
                . . . . . . . . . 1 1 1 1 1 1 f 
                . . . . . . . . . 1 1 1 1 . . . 
                . . . . . . . . . 1 1 1 1 . . . 
                . . . . f . . . . 1 1 1 1 . 1 . 
                . . . . 1 . . . . 1 1 1 1 1 . f 
                . . . . 1 . . . . 1 1 1 1 . . . 
                . . . . . 1 . . . 1 1 1 1 . 1 . 
                . . . . . . 1 1 1 1 1 1 1 1 . f 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else {
            hopsandpows.setImage(img`
                . . . . 1 1 . . . . . . . . . . 
                . . . . 7 5 1 . . . . . . . . . 
                . . . . 1 1 1 f . . . . . . . . 
                f 1 . a 1 1 a . . . . . . . . . 
                . 1 1 1 a a 1 . . . . . . . . . 
                . . . 1 1 1 1 . . . . . . . . . 
                f 1 1 1 1 1 1 . . . . . . . . . 
                . . . 1 1 1 1 . . . . . . . . . 
                . . . 1 1 1 1 . . . . . . . . . 
                . 1 . 1 1 1 1 . . . . f . . . . 
                f . 1 1 1 1 1 . . . . 1 . . . . 
                . . . 1 1 1 1 . . . . 1 . . . . 
                . 1 . 1 1 1 1 . . . 1 . . . . . 
                f . 1 1 1 1 1 1 1 1 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    } else {
        hopsandpows.ay = 350
    }
    if (hopsandpows.vx < 0 || hopsandpows.isHittingTile(CollisionDirection.Left)) {
        animation.setAction(hopsandpows, ActionKind.Walkingleft)
    } else if (facingright == 0) {
        animation.setAction(hopsandpows, ActionKind.IdleLeft)
    } else {
    	
    }
})
