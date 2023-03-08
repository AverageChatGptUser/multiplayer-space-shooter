namespace SpriteKind {
    export const gass = SpriteKind.create()
    export const Gambleramble = SpriteKind.create()
}
let AYO_SUSSY_BAKA = 0
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    Darts = [img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111fffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffff111fffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fff111111111111111111111111111111111111fff11111111fffffffffffffffffffffffffffffffff
        ffff11111111111111111111111111111111111fff1111111111111111111ffffff1111ffffffff1fff
        fffff1111111111111111111111111111111111fff1111111111111111111111111111111fff1111fff
        fffff1111111111111111111111111111111111fff1111111111111111111111111111111fff1111fff
        ffffff111111111111111111111111111111111fff111111111111111111111111111111ffff1111fff
        ffffff111111111111111111111111111111111fff111111111111111111111111111111ffff1111fff
        ff1ffff11111111111111111111111111111111fff111111111111111111111111111111fff11111fff
        ff1ffff11111111111111111111111111111111fff11111111111111111111111111111ffff11111fff
        ff11ffff1111111111111111111111111111111fff11111111111111111111111111111ffff11111fff
        ff11fffff111111111111111111111111111111fff1111111111111111111111111111ffff111111fff
        ff111ffff111111111111111111111111111111fff111111111111111111111111111fffff111111fff
        ff1111ffff11111111111111111111111111111fff1111111111111111111111111ffffff1111111fff
        ff1111ffff11111111111111111111111111111fff11111111111111111111111fffffff11111111fff
        ff11111ffff1111111111111111111111111111fff111111111111111111111ffffffff111111111fff
        ff11111ffff1111111111111111111111111111fff111111111111111111fffffffff11111111111fff
        ff111111ffff111111111111111111111111111fff1111111111111111fffffffff1111111111111fff
        ff111111ffff111111111111111111111111111fff111111111111111ffffffff111111111111111fff
        ff1111111ffff11111111111111111111111111fff11111111111111ffffff111111111111111111fff
        ff1111111fffff1111111111111111111111111fff1111111111111fffff11111111111111111111fff
        ff11111111fffff111111111111111111111111fff111111111111fffff111111111111111111111fff
        ff111111111fffff11111111111111111111111fff11111111111fffff1111111111111111111111fff
        ff1111111111fffff1111111111111111111111fff1111111111fffff11111111111111111111111fff
        ff11111111111fffff111111111111111111111ffff111111111ffff1111111111111111111111111ff
        ff111111111111fffff11111111111111111111ffff111111111fff11111111111111111111111111ff
        ff1111111111111fffff11111111111111111111fff111111111fff11111111111111111111111111ff
        ff11111111111111ffffff111111111111111111fff111111111fff11111111111111111111111111ff
        ff111111111111111ffffff11111111111111111fff11111111ffff11111111111111111111111111ff
        ff1111111111111111ffffffff11111111111111fff11111111ffff11111111111111111111111111ff
        ff111111111111111111ffffffff111111111111fff1111111ffff111111111111111111111111111ff
        ff1111111111111111111ffffffffff111111111fff111111fffff111111111111111111111111111ff
        ff1111111111111111111111fffffffff1111111fff11111fffff1111111111111111111111111111ff
        ff111111111111111111111111fffffffff11111ffff11ffffff11111111111111111111111111111ff
        ff111111111111111111111111111ffffffffff1fffffffffff111111111111111111111111111111ff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff1111fffffff11111111111111111111111111fffffffffff11ffffffff111111111111111111111ff
        ff111111111111111111111111111111111111ffffff11ffffff1111ffff111111111111111111111ff
        ff11111111111111111111111111111111111fffffff111fffff11111111111111111111111111111ff
        ff1111111111111111111111111111111111ffffffff1111fffff1111111111111111111111111111ff
        ff111111111111111111111111111111111fffff1ffff1111fffff111111111111111111111111111ff
        ff11111111111111111111111111111111fffff11ffff11111ffff111111111111111111111111111ff
        ff111111111111111111111111111111ffffff1111fff111111fff111111111111111111111111111ff
        ff1111111111111111111111111111fffffff11111fff111111ffff11111111111111111111111111ff
        ff111111111111111111111111111fffffff111111fff111111ffff1111111111111111111111111111
        ff11111111111111111111111111ffffff11111111ffff111111fff1111111111111111111111111111
        ff111111111111111111111111ffffff1111111111ffff111111ffff111111111111111111111111111
        ff1111111111111111111111fffffff111111111111fff111111fffff11111111111111111111111111
        ff1111111111111111111111ffffff1111111111111ffff111111ffffff111111111111111111111111
        ff111111111111111111111fffff111111111111111ffff1111111ffffff11111111111111111111111
        ff11111111111111111111fffff11111111111111111ffff1111111ffffff1111111111111111111111
        ff11111111111111111111ffff111111111111111111ffff111111111ffffff11111111111111111111
        ff1111111111111111111ffff11111111111111111111fff111111111fffffff1111111111111111111
        ff111111111111111111fffff11111111111111111111fff11111111111ffffff111111111111111111
        ff11111111111111111fffff111111111111111111111fff1111111111111ffff111111111111111111
        ff1111111111111111fffff1111111111111111111111fff11111111111111ffff11111111111111111
        ff111111111111111fffff11111111111111111111111ffff1111111111111fffff1111111111111111
        ff11111111111111fffff111111111111111111111111ffff11111111111111ffff1111111111111111
        ff1111111111111fffff11111111111111111111111111fff111111111111111fff1111111111111111
        ff111111111111fffff111111111111111111111111111fff111111111111111ffff111111111111111
        ff11111111111fffff1111111111111111111111111111fff111111111111111ffff111111111111111
        ff11111111111ffff11111111111111111111111111111fff1111111111111111ffff11111111111111
        ff1111111111ffff111111111111111111111111111111fff1111111111111111ffff11111111111111
        ff111111111fffff111111111111111111111111111111fff11111111111111111fff11111111111111
        ff1111111ffffff1111111111111111111111111111111fff11111111111111111fff11111111111111
        ff11111fffffff11111111111111111111111111111111fff11111111111111111ffff1111111111111
        ff111ffffffff111111111111111111111111111111111fff11111111111111111ffffff11111111111
        ff1ffffffff11111111111111111111111111111111111fff111111111111111111fffff11111111111
        fffffffff1111111111111111111111111111111111111fff1111111111111111111ffff11111111111
        fffffff111111111111111111111111111111111111111fff11111111111111111111ffff1111111111
        fffff11111111111111111111111111111111111111111fff11111111111111111111fffff111111111
        ff11111111111111111111111111111111111111111111fff111111111111111111111fffff11111111
        ff11111111111111111111111111111111111111111111fff1111111111111111111111fffff1111111
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        1111111111111111111111111111111111111111111111fff1111111111111fffffffffffffffffffff
        `]
    projectile = sprites.createProjectileFromSprite(Darts._pickRandom(), Person_3, 0, -150)
    projectile.startEffect(effects.bubbles, 5000)
    info.startCountdown(10)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    Darts = [img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111fffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffff111fffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fff111111111111111111111111111111111111fff11111111fffffffffffffffffffffffffffffffff
        ffff11111111111111111111111111111111111fff1111111111111111111ffffff1111ffffffff1fff
        fffff1111111111111111111111111111111111fff1111111111111111111111111111111fff1111fff
        fffff1111111111111111111111111111111111fff1111111111111111111111111111111fff1111fff
        ffffff111111111111111111111111111111111fff111111111111111111111111111111ffff1111fff
        ffffff111111111111111111111111111111111fff111111111111111111111111111111ffff1111fff
        ff1ffff11111111111111111111111111111111fff111111111111111111111111111111fff11111fff
        ff1ffff11111111111111111111111111111111fff11111111111111111111111111111ffff11111fff
        ff11ffff1111111111111111111111111111111fff11111111111111111111111111111ffff11111fff
        ff11fffff111111111111111111111111111111fff1111111111111111111111111111ffff111111fff
        ff111ffff111111111111111111111111111111fff111111111111111111111111111fffff111111fff
        ff1111ffff11111111111111111111111111111fff1111111111111111111111111ffffff1111111fff
        ff1111ffff11111111111111111111111111111fff11111111111111111111111fffffff11111111fff
        ff11111ffff1111111111111111111111111111fff111111111111111111111ffffffff111111111fff
        ff11111ffff1111111111111111111111111111fff111111111111111111fffffffff11111111111fff
        ff111111ffff111111111111111111111111111fff1111111111111111fffffffff1111111111111fff
        ff111111ffff111111111111111111111111111fff111111111111111ffffffff111111111111111fff
        ff1111111ffff11111111111111111111111111fff11111111111111ffffff111111111111111111fff
        ff1111111fffff1111111111111111111111111fff1111111111111fffff11111111111111111111fff
        ff11111111fffff111111111111111111111111fff111111111111fffff111111111111111111111fff
        ff111111111fffff11111111111111111111111fff11111111111fffff1111111111111111111111fff
        ff1111111111fffff1111111111111111111111fff1111111111fffff11111111111111111111111fff
        ff11111111111fffff111111111111111111111ffff111111111ffff1111111111111111111111111ff
        ff111111111111fffff11111111111111111111ffff111111111fff11111111111111111111111111ff
        ff1111111111111fffff11111111111111111111fff111111111fff11111111111111111111111111ff
        ff11111111111111ffffff111111111111111111fff111111111fff11111111111111111111111111ff
        ff111111111111111ffffff11111111111111111fff11111111ffff11111111111111111111111111ff
        ff1111111111111111ffffffff11111111111111fff11111111ffff11111111111111111111111111ff
        ff111111111111111111ffffffff111111111111fff1111111ffff111111111111111111111111111ff
        ff1111111111111111111ffffffffff111111111fff111111fffff111111111111111111111111111ff
        ff1111111111111111111111fffffffff1111111fff11111fffff1111111111111111111111111111ff
        ff111111111111111111111111fffffffff11111ffff11ffffff11111111111111111111111111111ff
        ff111111111111111111111111111ffffffffff1fffffffffff111111111111111111111111111111ff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff1111fffffff11111111111111111111111111fffffffffff11ffffffff111111111111111111111ff
        ff111111111111111111111111111111111111ffffff11ffffff1111ffff111111111111111111111ff
        ff11111111111111111111111111111111111fffffff111fffff11111111111111111111111111111ff
        ff1111111111111111111111111111111111ffffffff1111fffff1111111111111111111111111111ff
        ff111111111111111111111111111111111fffff1ffff1111fffff111111111111111111111111111ff
        ff11111111111111111111111111111111fffff11ffff11111ffff111111111111111111111111111ff
        ff111111111111111111111111111111ffffff1111fff111111fff111111111111111111111111111ff
        ff1111111111111111111111111111fffffff11111fff111111ffff11111111111111111111111111ff
        ff111111111111111111111111111fffffff111111fff111111ffff1111111111111111111111111111
        ff11111111111111111111111111ffffff11111111ffff111111fff1111111111111111111111111111
        ff111111111111111111111111ffffff1111111111ffff111111ffff111111111111111111111111111
        ff1111111111111111111111fffffff111111111111fff111111fffff11111111111111111111111111
        ff1111111111111111111111ffffff1111111111111ffff111111ffffff111111111111111111111111
        ff111111111111111111111fffff111111111111111ffff1111111ffffff11111111111111111111111
        ff11111111111111111111fffff11111111111111111ffff1111111ffffff1111111111111111111111
        ff11111111111111111111ffff111111111111111111ffff111111111ffffff11111111111111111111
        ff1111111111111111111ffff11111111111111111111fff111111111fffffff1111111111111111111
        ff111111111111111111fffff11111111111111111111fff11111111111ffffff111111111111111111
        ff11111111111111111fffff111111111111111111111fff1111111111111ffff111111111111111111
        ff1111111111111111fffff1111111111111111111111fff11111111111111ffff11111111111111111
        ff111111111111111fffff11111111111111111111111ffff1111111111111fffff1111111111111111
        ff11111111111111fffff111111111111111111111111ffff11111111111111ffff1111111111111111
        ff1111111111111fffff11111111111111111111111111fff111111111111111fff1111111111111111
        ff111111111111fffff111111111111111111111111111fff111111111111111ffff111111111111111
        ff11111111111fffff1111111111111111111111111111fff111111111111111ffff111111111111111
        ff11111111111ffff11111111111111111111111111111fff1111111111111111ffff11111111111111
        ff1111111111ffff111111111111111111111111111111fff1111111111111111ffff11111111111111
        ff111111111fffff111111111111111111111111111111fff11111111111111111fff11111111111111
        ff1111111ffffff1111111111111111111111111111111fff11111111111111111fff11111111111111
        ff11111fffffff11111111111111111111111111111111fff11111111111111111ffff1111111111111
        ff111ffffffff111111111111111111111111111111111fff11111111111111111ffffff11111111111
        ff1ffffffff11111111111111111111111111111111111fff111111111111111111fffff11111111111
        fffffffff1111111111111111111111111111111111111fff1111111111111111111ffff11111111111
        fffffff111111111111111111111111111111111111111fff11111111111111111111ffff1111111111
        fffff11111111111111111111111111111111111111111fff11111111111111111111fffff111111111
        ff11111111111111111111111111111111111111111111fff111111111111111111111fffff11111111
        ff11111111111111111111111111111111111111111111fff1111111111111111111111fffff1111111
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        1111111111111111111111111111111111111111111111fff1111111111111fffffffffffffffffffff
        `]
    projectile = sprites.createProjectileFromSprite(Darts._pickRandom(), Person_2, 0, -150)
    projectile.startEffect(effects.bubbles, 5000)
    info.startCountdown(10)
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    Darts = [img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111fffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffff111fffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fff111111111111111111111111111111111111fff11111111fffffffffffffffffffffffffffffffff
        ffff11111111111111111111111111111111111fff1111111111111111111ffffff1111ffffffff1fff
        fffff1111111111111111111111111111111111fff1111111111111111111111111111111fff1111fff
        fffff1111111111111111111111111111111111fff1111111111111111111111111111111fff1111fff
        ffffff111111111111111111111111111111111fff111111111111111111111111111111ffff1111fff
        ffffff111111111111111111111111111111111fff111111111111111111111111111111ffff1111fff
        ff1ffff11111111111111111111111111111111fff111111111111111111111111111111fff11111fff
        ff1ffff11111111111111111111111111111111fff11111111111111111111111111111ffff11111fff
        ff11ffff1111111111111111111111111111111fff11111111111111111111111111111ffff11111fff
        ff11fffff111111111111111111111111111111fff1111111111111111111111111111ffff111111fff
        ff111ffff111111111111111111111111111111fff111111111111111111111111111fffff111111fff
        ff1111ffff11111111111111111111111111111fff1111111111111111111111111ffffff1111111fff
        ff1111ffff11111111111111111111111111111fff11111111111111111111111fffffff11111111fff
        ff11111ffff1111111111111111111111111111fff111111111111111111111ffffffff111111111fff
        ff11111ffff1111111111111111111111111111fff111111111111111111fffffffff11111111111fff
        ff111111ffff111111111111111111111111111fff1111111111111111fffffffff1111111111111fff
        ff111111ffff111111111111111111111111111fff111111111111111ffffffff111111111111111fff
        ff1111111ffff11111111111111111111111111fff11111111111111ffffff111111111111111111fff
        ff1111111fffff1111111111111111111111111fff1111111111111fffff11111111111111111111fff
        ff11111111fffff111111111111111111111111fff111111111111fffff111111111111111111111fff
        ff111111111fffff11111111111111111111111fff11111111111fffff1111111111111111111111fff
        ff1111111111fffff1111111111111111111111fff1111111111fffff11111111111111111111111fff
        ff11111111111fffff111111111111111111111ffff111111111ffff1111111111111111111111111ff
        ff111111111111fffff11111111111111111111ffff111111111fff11111111111111111111111111ff
        ff1111111111111fffff11111111111111111111fff111111111fff11111111111111111111111111ff
        ff11111111111111ffffff111111111111111111fff111111111fff11111111111111111111111111ff
        ff111111111111111ffffff11111111111111111fff11111111ffff11111111111111111111111111ff
        ff1111111111111111ffffffff11111111111111fff11111111ffff11111111111111111111111111ff
        ff111111111111111111ffffffff111111111111fff1111111ffff111111111111111111111111111ff
        ff1111111111111111111ffffffffff111111111fff111111fffff111111111111111111111111111ff
        ff1111111111111111111111fffffffff1111111fff11111fffff1111111111111111111111111111ff
        ff111111111111111111111111fffffffff11111ffff11ffffff11111111111111111111111111111ff
        ff111111111111111111111111111ffffffffff1fffffffffff111111111111111111111111111111ff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff1111fffffff11111111111111111111111111fffffffffff11ffffffff111111111111111111111ff
        ff111111111111111111111111111111111111ffffff11ffffff1111ffff111111111111111111111ff
        ff11111111111111111111111111111111111fffffff111fffff11111111111111111111111111111ff
        ff1111111111111111111111111111111111ffffffff1111fffff1111111111111111111111111111ff
        ff111111111111111111111111111111111fffff1ffff1111fffff111111111111111111111111111ff
        ff11111111111111111111111111111111fffff11ffff11111ffff111111111111111111111111111ff
        ff111111111111111111111111111111ffffff1111fff111111fff111111111111111111111111111ff
        ff1111111111111111111111111111fffffff11111fff111111ffff11111111111111111111111111ff
        ff111111111111111111111111111fffffff111111fff111111ffff1111111111111111111111111111
        ff11111111111111111111111111ffffff11111111ffff111111fff1111111111111111111111111111
        ff111111111111111111111111ffffff1111111111ffff111111ffff111111111111111111111111111
        ff1111111111111111111111fffffff111111111111fff111111fffff11111111111111111111111111
        ff1111111111111111111111ffffff1111111111111ffff111111ffffff111111111111111111111111
        ff111111111111111111111fffff111111111111111ffff1111111ffffff11111111111111111111111
        ff11111111111111111111fffff11111111111111111ffff1111111ffffff1111111111111111111111
        ff11111111111111111111ffff111111111111111111ffff111111111ffffff11111111111111111111
        ff1111111111111111111ffff11111111111111111111fff111111111fffffff1111111111111111111
        ff111111111111111111fffff11111111111111111111fff11111111111ffffff111111111111111111
        ff11111111111111111fffff111111111111111111111fff1111111111111ffff111111111111111111
        ff1111111111111111fffff1111111111111111111111fff11111111111111ffff11111111111111111
        ff111111111111111fffff11111111111111111111111ffff1111111111111fffff1111111111111111
        ff11111111111111fffff111111111111111111111111ffff11111111111111ffff1111111111111111
        ff1111111111111fffff11111111111111111111111111fff111111111111111fff1111111111111111
        ff111111111111fffff111111111111111111111111111fff111111111111111ffff111111111111111
        ff11111111111fffff1111111111111111111111111111fff111111111111111ffff111111111111111
        ff11111111111ffff11111111111111111111111111111fff1111111111111111ffff11111111111111
        ff1111111111ffff111111111111111111111111111111fff1111111111111111ffff11111111111111
        ff111111111fffff111111111111111111111111111111fff11111111111111111fff11111111111111
        ff1111111ffffff1111111111111111111111111111111fff11111111111111111fff11111111111111
        ff11111fffffff11111111111111111111111111111111fff11111111111111111ffff1111111111111
        ff111ffffffff111111111111111111111111111111111fff11111111111111111ffffff11111111111
        ff1ffffffff11111111111111111111111111111111111fff111111111111111111fffff11111111111
        fffffffff1111111111111111111111111111111111111fff1111111111111111111ffff11111111111
        fffffff111111111111111111111111111111111111111fff11111111111111111111ffff1111111111
        fffff11111111111111111111111111111111111111111fff11111111111111111111fffff111111111
        ff11111111111111111111111111111111111111111111fff111111111111111111111fffff11111111
        ff11111111111111111111111111111111111111111111fff1111111111111111111111fffff1111111
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        1111111111111111111111111111111111111111111111fff1111111111111fffffffffffffffffffff
        `]
    projectile = sprites.createProjectileFromSprite(Darts._pickRandom(), Player_4, 0, -150)
    info.startCountdown(10)
})
controller.combos.attachCombo(controller.combos.idToString(controller.combos.ID.B), function () {
	
})
sprites.onOverlap(SpriteKind.Player, AYO_SUSSY_BAKA, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    _.startEffect(effects.clouds, 500)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    Darts = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b c . . . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . b 5 5 5 2 5 5 5 b . . . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . b b 5 5 5 2 1 2 5 5 5 b b . 
        . . d d 5 2 1 1 2 1 1 2 5 d d . 
        . . b b 5 5 5 2 1 2 5 5 5 b b . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . . . b 5 5 5 2 5 5 5 b . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . . . c b d b c . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    assets.image`Spider`,
    img`
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . c 6 . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . 2 6 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 2 9 . . . . . . . 
        . . . . . . . c 8 . . . . . . . 
        . . . . . . . 2 6 . . . . . . . 
        . . . . . . . c 8 . . . . . . . 
        . . . . . . . 2 6 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 3 1 3 2 . . . . . . 
        . . . . . 3 1 1 1 3 . . 2 . . 2 
        . 2 . . . 3 1 1 1 3 . . . . . . 
        . . . . . 3 1 1 1 3 . . . . . . 
        . . . . . 3 1 1 1 2 . . . 2 . . 
        . . 2 . . 2 1 1 1 2 . . . . . . 
        2 . . . . 2 3 1 3 2 . . . . . . 
        . . . . 2 . 3 1 3 . . . . . . . 
        . . . . . . 2 1 2 . . . . 2 . . 
        . 2 . . . . 2 1 2 . . 2 . . . . 
        . . . 2 . . 2 1 2 . . . . . . 2 
        . . . . . . . . . . . . . . . . 
        `
    ]
    projectile = sprites.createProjectileFromSprite(Darts._pickRandom(), Person_2, 0, -150)
    projectile.startEffect(effects.fire, 5000)
    projectile.startEffect(effects.bubbles, 5000)
})
info.onCountdownEnd(function () {
    info.changeLifeBy(-200)
    info.changeScoreBy(10000000000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gass, function (sprite, otherSprite) {
    statusbar.value = 100
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    Darts = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b c . . . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . b 5 5 5 2 5 5 5 b . . . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . b b 5 5 5 2 1 2 5 5 5 b b . 
        . . d d 5 2 1 1 2 1 1 2 5 d d . 
        . . b b 5 5 5 2 1 2 5 5 5 b b . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . . . b 5 5 5 2 5 5 5 b . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . . . c b d b c . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    assets.image`Spider`,
    img`
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . c 6 . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . 2 6 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 2 9 . . . . . . . 
        . . . . . . . c 8 . . . . . . . 
        . . . . . . . 2 6 . . . . . . . 
        . . . . . . . c 8 . . . . . . . 
        . . . . . . . 2 6 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 3 1 3 2 . . . . . . 
        . . . . . 3 1 1 1 3 . . 2 . . 2 
        . 2 . . . 3 1 1 1 3 . . . . . . 
        . . . . . 3 1 1 1 3 . . . . . . 
        . . . . . 3 1 1 1 2 . . . 2 . . 
        . . 2 . . 2 1 1 1 2 . . . . . . 
        2 . . . . 2 3 1 3 2 . . . . . . 
        . . . . 2 . 3 1 3 . . . . . . . 
        . . . . . . 2 1 2 . . . . 2 . . 
        . 2 . . . . 2 1 2 . . 2 . . . . 
        . . . 2 . . 2 1 2 . . . . . . 2 
        . . . . . . . . . . . . . . . . 
        `
    ]
    projectile = sprites.createProjectileFromSprite(Darts._pickRandom(), Player_4, 0, -150)
    projectile.startEffect(effects.bubbles, 5000)
    projectile.startEffect(effects.fire, 5000)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    Darts = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b c . . . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . b 5 5 5 2 5 5 5 b . . . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . b b 5 5 5 2 1 2 5 5 5 b b . 
        . . d d 5 2 1 1 2 1 1 2 5 d d . 
        . . b b 5 5 5 2 1 2 5 5 5 b b . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . . . b 5 5 5 2 5 5 5 b . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . . . c b d b c . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    assets.image`Spider`,
    img`
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . c 6 . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . 2 6 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 2 9 . . . . . . . 
        . . . . . . . c 8 . . . . . . . 
        . . . . . . . 2 6 . . . . . . . 
        . . . . . . . c 8 . . . . . . . 
        . . . . . . . 2 6 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 3 1 3 2 . . . . . . 
        . . . . . 3 1 1 1 3 . . 2 . . 2 
        . 2 . . . 3 1 1 1 3 . . . . . . 
        . . . . . 3 1 1 1 3 . . . . . . 
        . . . . . 3 1 1 1 2 . . . 2 . . 
        . . 2 . . 2 1 1 1 2 . . . . . . 
        2 . . . . 2 3 1 3 2 . . . . . . 
        . . . . 2 . 3 1 3 . . . . . . . 
        . . . . . . 2 1 2 . . . . 2 . . 
        . 2 . . . . 2 1 2 . . 2 . . . . 
        . . . 2 . . 2 1 2 . . . . . . 2 
        . . . . . . . . . . . . . . . . 
        `
    ]
    projectile = sprites.createProjectileFromSprite(Darts._pickRandom(), Person_1, 0, -150)
    projectile.startEffect(effects.bubbles, 5000)
    projectile.startEffect(effects.fire, 5000)
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    Darts = [
    img`
        ...........ccccc66666...........
        ........ccc4444444444666........
        ......cc444444444bb4444466......
        .....cb4444bb4444b5b444444b.....
        ....eb4444b5b44444b44444444b....
        ...ebb44444b4444444444b444446...
        ..eb6bb444444444bb444b5b444446..
        ..e6bb5b44444444b5b444b44bb44e..
        .e66b4b4444444444b4444444b5b44e.
        .e6bb444444444444444444444bb44e.
        eb66b44444bb444444444444444444be
        eb66bb444b5b44444444bb44444444be
        fb666b444bb444444444b5b4444444bf
        fcb666b44444444444444bb444444bcf
        .fbb6666b44444444444444444444bf.
        .efbb66666bb4444444444444444bfe.
        .86fcbb66666bbb44444444444bcc688
        8772effcbbbbbbbbbbbbbbbbcfc22778
        87722222cccccccccccccccc22226678
        f866622222222222222222222276686f
        fef866677766667777776667777fffef
        fbff877768f86777777666776fffffbf
        fbeffeefffeff7766688effeeeefeb6f
        f6bfffeffeeeeeeeeeeeeefeeeeebb6e
        f66ddfffffeeeffeffeeeeeffeedb46e
        .c66ddd4effffffeeeeeffff4ddb46e.
        .fc6b4dddddddddddddddddddb444ee.
        ..ff6bb444444444444444444444ee..
        ....ffbbbb4444444444444444ee....
        ......ffebbbbbb44444444eee......
        .........fffffffcccccee.........
        ................................
        `,
    assets.image`Dart1`,
    img`
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . c 6 . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . 2 6 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 2 9 . . . . . . . 
        . . . . . . . c 8 . . . . . . . 
        . . . . . . . 2 6 . . . . . . . 
        . . . . . . . c 8 . . . . . . . 
        . . . . . . . 2 6 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 3 1 3 2 . . . . . . 
        . . . . . 3 1 1 1 3 . . 2 . . 2 
        . 2 . . . 3 1 1 1 3 . . . . . . 
        . . . . . 3 1 1 1 3 . . . . . . 
        . . . . . 3 1 1 1 2 . . . 2 . . 
        . . 2 . . 2 1 1 1 2 . . . . . . 
        2 . . . . 2 3 1 3 2 . . . . . . 
        . . . . 2 . 3 1 3 . . . . . . . 
        . . . . . . 2 1 2 . . . . 2 . . 
        . 2 . . . . 2 1 2 . . 2 . . . . 
        . . . 2 . . 2 1 2 . . . . . . 2 
        . . . . . . . . . . . . . . . . 
        `
    ]
    projectile = sprites.createProjectileFromSprite(Darts._pickRandom(), Person_3, 0, -150)
    projectile.startEffect(effects.fire, 5000)
    projectile.startEffect(effects.bubbles, 5000)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    Darts = [img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111fffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffff111fffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fff111111111111111111111111111111111111fff11111111fffffffffffffffffffffffffffffffff
        ffff11111111111111111111111111111111111fff1111111111111111111ffffff1111ffffffff1fff
        fffff1111111111111111111111111111111111fff1111111111111111111111111111111fff1111fff
        fffff1111111111111111111111111111111111fff1111111111111111111111111111111fff1111fff
        ffffff111111111111111111111111111111111fff111111111111111111111111111111ffff1111fff
        ffffff111111111111111111111111111111111fff111111111111111111111111111111ffff1111fff
        ff1ffff11111111111111111111111111111111fff111111111111111111111111111111fff11111fff
        ff1ffff11111111111111111111111111111111fff11111111111111111111111111111ffff11111fff
        ff11ffff1111111111111111111111111111111fff11111111111111111111111111111ffff11111fff
        ff11fffff111111111111111111111111111111fff1111111111111111111111111111ffff111111fff
        ff111ffff111111111111111111111111111111fff111111111111111111111111111fffff111111fff
        ff1111ffff11111111111111111111111111111fff1111111111111111111111111ffffff1111111fff
        ff1111ffff11111111111111111111111111111fff11111111111111111111111fffffff11111111fff
        ff11111ffff1111111111111111111111111111fff111111111111111111111ffffffff111111111fff
        ff11111ffff1111111111111111111111111111fff111111111111111111fffffffff11111111111fff
        ff111111ffff111111111111111111111111111fff1111111111111111fffffffff1111111111111fff
        ff111111ffff111111111111111111111111111fff111111111111111ffffffff111111111111111fff
        ff1111111ffff11111111111111111111111111fff11111111111111ffffff111111111111111111fff
        ff1111111fffff1111111111111111111111111fff1111111111111fffff11111111111111111111fff
        ff11111111fffff111111111111111111111111fff111111111111fffff111111111111111111111fff
        ff111111111fffff11111111111111111111111fff11111111111fffff1111111111111111111111fff
        ff1111111111fffff1111111111111111111111fff1111111111fffff11111111111111111111111fff
        ff11111111111fffff111111111111111111111ffff111111111ffff1111111111111111111111111ff
        ff111111111111fffff11111111111111111111ffff111111111fff11111111111111111111111111ff
        ff1111111111111fffff11111111111111111111fff111111111fff11111111111111111111111111ff
        ff11111111111111ffffff111111111111111111fff111111111fff11111111111111111111111111ff
        ff111111111111111ffffff11111111111111111fff11111111ffff11111111111111111111111111ff
        ff1111111111111111ffffffff11111111111111fff11111111ffff11111111111111111111111111ff
        ff111111111111111111ffffffff111111111111fff1111111ffff111111111111111111111111111ff
        ff1111111111111111111ffffffffff111111111fff111111fffff111111111111111111111111111ff
        ff1111111111111111111111fffffffff1111111fff11111fffff1111111111111111111111111111ff
        ff111111111111111111111111fffffffff11111ffff11ffffff11111111111111111111111111111ff
        ff111111111111111111111111111ffffffffff1fffffffffff111111111111111111111111111111ff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ff1111fffffff11111111111111111111111111fffffffffff11ffffffff111111111111111111111ff
        ff111111111111111111111111111111111111ffffff11ffffff1111ffff111111111111111111111ff
        ff11111111111111111111111111111111111fffffff111fffff11111111111111111111111111111ff
        ff1111111111111111111111111111111111ffffffff1111fffff1111111111111111111111111111ff
        ff111111111111111111111111111111111fffff1ffff1111fffff111111111111111111111111111ff
        ff11111111111111111111111111111111fffff11ffff11111ffff111111111111111111111111111ff
        ff111111111111111111111111111111ffffff1111fff111111fff111111111111111111111111111ff
        ff1111111111111111111111111111fffffff11111fff111111ffff11111111111111111111111111ff
        ff111111111111111111111111111fffffff111111fff111111ffff1111111111111111111111111111
        ff11111111111111111111111111ffffff11111111ffff111111fff1111111111111111111111111111
        ff111111111111111111111111ffffff1111111111ffff111111ffff111111111111111111111111111
        ff1111111111111111111111fffffff111111111111fff111111fffff11111111111111111111111111
        ff1111111111111111111111ffffff1111111111111ffff111111ffffff111111111111111111111111
        ff111111111111111111111fffff111111111111111ffff1111111ffffff11111111111111111111111
        ff11111111111111111111fffff11111111111111111ffff1111111ffffff1111111111111111111111
        ff11111111111111111111ffff111111111111111111ffff111111111ffffff11111111111111111111
        ff1111111111111111111ffff11111111111111111111fff111111111fffffff1111111111111111111
        ff111111111111111111fffff11111111111111111111fff11111111111ffffff111111111111111111
        ff11111111111111111fffff111111111111111111111fff1111111111111ffff111111111111111111
        ff1111111111111111fffff1111111111111111111111fff11111111111111ffff11111111111111111
        ff111111111111111fffff11111111111111111111111ffff1111111111111fffff1111111111111111
        ff11111111111111fffff111111111111111111111111ffff11111111111111ffff1111111111111111
        ff1111111111111fffff11111111111111111111111111fff111111111111111fff1111111111111111
        ff111111111111fffff111111111111111111111111111fff111111111111111ffff111111111111111
        ff11111111111fffff1111111111111111111111111111fff111111111111111ffff111111111111111
        ff11111111111ffff11111111111111111111111111111fff1111111111111111ffff11111111111111
        ff1111111111ffff111111111111111111111111111111fff1111111111111111ffff11111111111111
        ff111111111fffff111111111111111111111111111111fff11111111111111111fff11111111111111
        ff1111111ffffff1111111111111111111111111111111fff11111111111111111fff11111111111111
        ff11111fffffff11111111111111111111111111111111fff11111111111111111ffff1111111111111
        ff111ffffffff111111111111111111111111111111111fff11111111111111111ffffff11111111111
        ff1ffffffff11111111111111111111111111111111111fff111111111111111111fffff11111111111
        fffffffff1111111111111111111111111111111111111fff1111111111111111111ffff11111111111
        fffffff111111111111111111111111111111111111111fff11111111111111111111ffff1111111111
        fffff11111111111111111111111111111111111111111fff11111111111111111111fffff111111111
        ff11111111111111111111111111111111111111111111fff111111111111111111111fffff11111111
        ff11111111111111111111111111111111111111111111fff1111111111111111111111fffff1111111
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffff111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        1111111111111111111111111111111111111111111111fff1111111111111fffffffffffffffffffff
        `]
    projectile = sprites.createProjectileFromSprite(Darts._pickRandom(), Person_1, 0, -150)
    projectile.startEffect(effects.fire, 5000)
    info.startCountdown(10)
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    game.over(false, effects.slash)
})
controller.combos.attachSpecialCode(function () {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(100)
    info.changeLifeBy(10)
    if (info.score() >= 10) {
        Person_1.sayText("+5 level-up Bonus! yay!", 5000, true)
        info.changeScoreBy(5)
        enemyspeed = 70
    }
    if (info.score() >= 20) {
        Person_2.sayText("+5 level-up Bonus! yay!", 5000, true)
        info.changeScoreBy(10)
        enemyspeed = 100
    }
    if (info.score() >= 50) {
        Person_1.sayText("+5 level-up Bonus! yay!", 5000, true)
        info.changeScoreBy(50)
        enemyspeed = 70
    }
    if (info.score() >= 200) {
        Person_1.sayText("+5 level-up Bonus! yay!", 5000, true)
        info.changeScoreBy(10)
        enemyspeed = 130
    }
    if (info.score() >= 250) {
        Person_1.sayText("+5 level-up Bonus! yay!", 5000, true)
        info.changeScoreBy(20)
        enemyspeed = 130
    }
    if (info.score() >= 350) {
        Person_1.sayText("+5 level-up Bonus! yay!", 5000, true)
        info.changeScoreBy(70)
        enemyspeed = 300
    }
    if (info.score() >= 1000) {
        Person_1.sayText("uh oh....", 5000, true)
        info.changeScoreBy(200)
        scene.setBackgroundImage(assets.image`Fuel`)
        enemyspeed = 300
    }
    if (info.score() == 2011) {
        Person_1.sayText("How have we made it this far.....", 5000, true)
        scene.setBackgroundImage(assets.image`Fuel`)
        info.changeScoreBy(2011)
    }
    if (info.score() == 1000000000000) {
        Person_1.sayText("How have we made it this far.....", 5000, true)
        scene.setBackgroundImage(assets.image`Fuel`)
        info.changeScoreBy(2011)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy(effects.ashes, 500)
    scene.cameraShake(4, 500)
})
let gassy_gassy_gassy_love_gas: Sprite = null
let boss: Sprite = null
let _: Sprite = null
let projectile: Sprite = null
let Darts: Image[] = []
let enemyspeed = 0
let statusbar: StatusBarSprite = null
let Player_4: Sprite = null
let Person_3: Sprite = null
let Person_2: Sprite = null
let Person_1: Sprite = null
info.setLife(50)
game.splash("This is Bryent from Misson Control. You are currently stranded")
game.splash(" fr")
info.setScore(10)
scene.setBackgroundImage(assets.image`Galaxy`)
scroller.scrollBackgroundWithSpeed(0, 10)
Person_1 = sprites.create(assets.image`Blue Rocket`, SpriteKind.Player)
Person_2 = sprites.create(img`
    . . . . . . e e c c e e . . . . 
    . . . . . e 2 2 2 2 2 2 e . . . 
    . . . . 2 c 2 2 2 2 2 2 c 2 . . 
    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
    . . . f 2 2 4 2 2 2 2 2 c 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 c 2 4 4 2 2 2 c 2 f . 
    . . . e 2 c e c c c c e c 2 e . 
    . . . e 2 e c b b b b c e 2 e . 
    . . . e 2 e b b b b b b e 2 e . 
    . . . e e e e e e e e e e e e . 
    . . . f e d e e e e e e d e f . 
    . . . f e 2 d e e e e d 2 e f . 
    . . . f f e e e e e e e e f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.Player)
Person_3 = sprites.create(assets.image`Rocket0`, SpriteKind.Player)
Player_4 = sprites.create(img`
    . . . . 1 1 1 1 . . . . 
    . . 1 1 f f f f 1 1 . . 
    . 1 f f d d d d f f 1 . 
    1 f d d d d d d d d f 1 
    1 f d d d d d d d d f 1 
    1 f d d d d d d d d f 1 
    1 f d d d d d d d d f 1 
    1 f d d d d d d d d f 1 
    1 f d d d d d d d d f 1 
    . f f f f f f f f f f . 
    . f f 6 1 f f 1 6 f f . 
    f 1 f 1 1 f f 1 1 f 1 f 
    f 1 f 1 1 f f 1 1 f 1 f 
    f 1 f b 1 f f 1 b f 1 f 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(Person_1, 100, 100)
controller.player2.moveSprite(Person_2, 100, 100)
controller.player3.moveSprite(Person_3, 100, 100)
controller.player4.moveSprite(Player_4, 100, 100)
animation.runImageAnimation(
Person_1,
assets.animation`Flying Blue0`,
200,
true
)
Person_1.setStayInScreen(true)
Person_2.setStayInScreen(true)
Person_3.setStayInScreen(true)
Player_4.setStayInScreen(true)
statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar.attachToSprite(Person_1, -30, 0)
enemyspeed = 50
game.onUpdateInterval(5000, function () {
    boss = sprites.createProjectileFromSide(assets.image`UFO`, 0, 50)
    boss.x = randint(1, 155)
    boss.setKind(SpriteKind.Gambleramble)
    enemyspeed = 1
})
game.onUpdateInterval(5000, function () {
	
})
game.onUpdateInterval(5000, function () {
    statusbar.value += -10
})
game.onUpdateInterval(1000, function () {
    gassy_gassy_gassy_love_gas = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . 5 5 . . . . . . . . . . . . 
        . . . 5 5 . . . . . . . . . . . 
        . . . . 5 5 . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . 2 4 4 4 2 2 . . . . . . 
        . . . . 4 2 2 2 2 2 . . . . . . 
        . . . . 4 2 2 2 2 2 . . . . . . 
        . . . . 4 2 2 4 4 4 . . . . . . 
        . . . . 4 2 2 2 4 2 . . . . . . 
        . . . . 2 4 4 4 4 2 . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 80)
    gassy_gassy_gassy_love_gas.x = randint(5, 155)
    gassy_gassy_gassy_love_gas.setKind(SpriteKind.gass)
})
forever(function () {
    if (controller.B.isPressed()) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . c d . . . . . . . 
            2 . . 2 . . . c d . . 2 . . . . 
            . . . . . 2 . c d . . . . 2 . . 
            . . . . . . . c b . . . . . . . 
            . 2 . 2 . . . f f 2 . 2 . . . 2 
            . . . . . . . c 7 . . . . . . . 
            . . . . 2 . . f f . . 2 . 2 . . 
            . 2 . . . . . 8 7 . . . . . . . 
            . . . . . . 2 8 5 . . . . . . . 
            . . . . . . . 7 5 . 2 . . . 2 . 
            2 . 2 . 2 . . c 6 . . . . . . . 
            . . . . . . . 7 7 . . 2 . . 2 . 
            . 2 . . . 2 . c 6 . . . . 2 . . 
            . . . 2 . . . 7 7 . . 2 . . . . 
            8 . 8 8 8 8 6 6 7 7 7 5 7 7 6 6 
            8 8 8 8 8 8 6 6 7 7 7 7 5 7 6 6 
            `, Person_1, 0, -150)
        projectile.startEffect(effects.bubbles, 5000)
        projectile.startEffect(effects.fire, 5000)
        info.startCountdown(20)
    }
})
game.onUpdateInterval(200, function () {
    _ = sprites.createProjectileFromSide(assets.image`Stealth`, 0, 80)
    _.x = randint(5, 155)
    _.setKind(SpriteKind.Enemy)
})
