osc(Math.PI * 3, .001, .000075).posterize(-2).brightness(-.125)
.modulate(
  shape(40, .6572)
  .add(shape(40, .646))

  .modulateScrollX(
    noise(1, -0.072)//.pixelate(10)
  )
)
.mult(
  osc(Math.PI * 3, .01, .0000025).posterize(-2).brightness(-.125)
  .rotate()
  .modulate(
    shape(40, .66572)
    .add(shape(40, .5664))

    .modulateScrollX(
      noise(1, -0.072)//.pixelate(10)
    )
  )
)

.out()
