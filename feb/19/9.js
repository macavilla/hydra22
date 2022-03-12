osc(Math.PI * 2, .00001, .75).posterize(-2).brightness(-.125)
.modulate(
  shape(40, .572)
  .add(shape(40, .56))

  .modulateScrollY(
    noise(1, -0.072).pixelate(3)
  )
)
.layer(
  osc(Math.PI * 2, .01, .75).posterize(-2).brightness(-.125)
  .modulate(
    shape(40, .572)
    .add(shape(40, .56))

    .modulateScrollY(
      noise(1, -0.072).pixelate(30, 30)
    )
  )

)

.out()
