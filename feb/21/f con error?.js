osc(Math.PI * 3, .001, .000075).posterize(-2).brightness(-.125)
.modulate(
  shape(40, .6572)
  .add(shape(40, .646))

  .modulateScrollX(
    noise(1, -0.072)//.pixelate(10)
  )
)
.layer(
  osc(Math.PI * 3, .01, .0000025).posterize(-2).brightness(-.125)
  .rotate(1)
  .modulateScrollX(
    shape(99, .6)
    .add(shape(99, .57))

    .modulateScrollY(
      osc(15, -0.072).pixelate(10)
    )

  )
)

.out()
