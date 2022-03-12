osc(Math.PI * 2, .001, .75).posterize(-2).brightness(-.125)
.modulate(
  shape(40, .572)
  .add(shape(4, .56))

  .modulateScrollY(
    noise(10, -0.072).pixelate(300)
  )
)
.layer(
  osc(Math.PI * 2, .01, .75).posterize(-2).brightness(-.125)
  .mult(
    osc(Math.PI * 2, .1, .75).rotate().posterize(-2).brightness(-.125)
  )
  .modulate(
    shape(40, .572)
    .add(shape(40, .56))

    .modulateScrollX(
      noise(.8751, 0.025).pixelate(30, 30)
    )
  )
)

.out()
