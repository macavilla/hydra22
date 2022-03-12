osc(Math.PI * 2, .00001, .75).posterize(-2).brightness(-.125)
.modulate(
  shape(40, .572)
  .add(shape(40, .56))
  .modulateScrollX(
    noise(1, 0.072).pixelate(10,10)
  )
  .modulateScrollY(
    noise(1, 0.072).pixelate(10,10)
  )
)
.out()
