controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        mySprite.vy = -500
        jump += 1
        uppressed = true
        if (lastkey == 0) {
            mySprite.setImage(assets.image`jump image`)
        } else {
            mySprite.setImage(assets.image`jump image0`)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    lastkey = 1
    leftpressed = true
    animation.runImageAnimation(
    mySprite,
    assets.animation`runningAnimation0`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`Mario`)
    mySprite.vx = 0
    rightpressed = false
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    if (leftpressed) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`runningAnimation0`,
        100,
        true
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vx = 0
    leftpressed = false
    mySprite.setImage(assets.image`Mario0`)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    lastkey = 0
    rightpressed = true
    animation.runImageAnimation(
    mySprite,
    assets.animation`runningAnimation`,
    100,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    uppressed = false
    if (lastkey == 0) {
        mySprite.setImage(assets.image`Mario`)
    } else {
        mySprite.setImage(assets.image`Mario0`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (mySprite.vy > 0) {
        mySprite2.setImage(assets.image`myImage`)
        pause(100)
        mySprite2.destroy()
    } else {
        mySprite.destroy()
        pause(100)
        game.over(false)
    }
})
let lastkey = 0
let jump = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
let uppressed = false
let leftpressed = false
let rightpressed = false
rightpressed = false
leftpressed = false
uppressed = false
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`background`)
mySprite = sprites.create(assets.image`Mario`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`goomba`, SpriteKind.Enemy)
mySprite2.x = 300
mySprite.ay = 3000
mySprite2.ay = 3000
scene.cameraFollowSprite(mySprite)
forever(function () {
    if (rightpressed) {
        mySprite.vx = 150
    }
    if (mySprite.vy == 0) {
        jump = 0
    }
    if (leftpressed) {
        mySprite.vx = -150
    }
    if (mySprite.x < mySprite2.x) {
        mySprite2.vx = -40
    } else {
        mySprite2.vx = 40
    }
})
