osc(Math.PI * 2, .00001, .75).posterize(-2).brightness(-.125)
.modulate(
  shape(40, .572)
  .add(shape(40, .56))
  .modulateScrollX(
    noise(1, 0.0072).pixelate()
  )
  .modulateScrollY(
    noise(1, -0.0072).pixelate()
  )
)
.out()
