osc(Math.PI * 2, .001, .75).posterize(-2).brightness(-.125)
.modulate(
  shape(40, .6572)
  .add(shape(40, .646))

  .modulateScale(
    noise(1, -0.072)//.pixelate(10)
  )
)
.mult(
  osc(Math.PI * 2, .01, .025).posterize(-2).brightness(-.125)

  .modulate(
    shape(40, .66572)
    .add(shape(40, .5664).color(0,1))

    .modulateScale(
      noise(1, -0.072)//.pixelate(10)
    )
  )
)

.out()
