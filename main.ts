music.playSoundEffect(music.createSoundEffect(
WaveShape.Sine,
2379,
0,
255,
0,
500,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), SoundExpressionPlayMode.InBackground)
music.playTone(262, music.beat(BeatFraction.Whole))
music.ringTone(294)
music.ringTone(330)
music.setVolume(255)
basic.forever(function () {
	
})
